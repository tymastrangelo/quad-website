/* Schools onby runs on, for the "Is onby at your school?" search.
   Add a row when a campus launches. Aliases are lowercase fragments that
   should match a typed query. */
export type DirectoryEntry = {
  name: string;
  aliases: string[];
  path: string;
  note: string;
};

export const DIRECTORY: DirectoryEntry[] = [
  {
    name: "Elon University",
    aliases: ["elon", "elon university", "elon.edu", "phoenix"],
    path: "/elon",
    note: "Spring 2027 pilot",
  },
];

export function findSchool(query: string): DirectoryEntry | null {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return null;
  return (
    DIRECTORY.find(
      (d) => d.name.toLowerCase().includes(q) || d.aliases.some((a) => a.includes(q) || q.includes(a)),
    ) ?? null
  );
}

export const REQUEST_ENDPOINT =
  "https://hujewnquwyivlgnbprpc.supabase.co/functions/v1/campus-request";
