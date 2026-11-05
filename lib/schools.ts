/* The school picker's data and search.
   public/schools.json is a compact list built from the open
   university-domains-list dataset (10k schools, US first):
   [name, countryCode, stateOrProvince, primaryDomain][]. It is fetched
   once, the first time someone touches the search, never in the bundle. */

export type School = { name: string; country: string; state: string; domain: string };

/* Campuses onby runs on, by email domain. Add a row when one launches. */
export const LIVE: Record<string, { path: string; note: string; short: string }> = {
  "elon.edu": { path: "/elon", note: "Spring 2027 pilot", short: "Elon" },
};

export const REQUEST_ENDPOINT =
  "https://hujewnquwyivlgnbprpc.supabase.co/functions/v1/campus-request";

let cache: School[] | null = null;
let inflight: Promise<School[]> | null = null;

export function loadSchools(): Promise<School[]> {
  if (cache) return Promise.resolve(cache);
  if (!inflight) {
    inflight = fetch("/schools.json")
      .then((r) => r.json() as Promise<[string, string, string, string][]>)
      .then((rows) => {
        cache = rows.map(([name, country, state, domain]) => ({ name, country, state, domain }));
        return cache;
      })
      .catch((err) => {
        inflight = null;
        throw err;
      });
  }
  return inflight;
}

const fold = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9. ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

/* Rank: name starts with the query, then a word starts with it, then the
   domain, then anywhere in the name. US schools first within a rank,
   shorter names first after that. */
export function searchSchools(list: School[], query: string, limit = 8): School[] {
  const q = fold(query);
  if (q.length < 2) return [];
  const scored: { s: School; rank: number }[] = [];
  for (const s of list) {
    const n = fold(s.name);
    let rank = -1;
    if (n.startsWith(q)) rank = 0;
    else if (n.includes(" " + q)) rank = 1;
    else if (s.domain && s.domain.startsWith(q)) rank = 2;
    else if (n.includes(q)) rank = 3;
    if (rank >= 0) scored.push({ s, rank });
  }
  scored.sort(
    (a, b) =>
      a.rank - b.rank ||
      Number(a.s.country !== "US") - Number(b.s.country !== "US") ||
      a.s.name.length - b.s.name.length,
  );
  return scored.slice(0, limit).map((x) => x.s);
}
