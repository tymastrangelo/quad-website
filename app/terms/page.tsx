import type { Metadata } from "next";
import Link from "next/link";
import {
  B,
  Callout,
  LegalFootnote,
  LegalPage,
  LegalSection,
  Mail,
  P,
  UL,
} from "@/components/site/legal";

export const metadata: Metadata = {
  title: "Terms of Service | Quad",
  description:
    "The Terms of Service governing your use of the Quad mobile application, operated by Quad Software, LLC.",
};

function PrivacyLink() {
  return (
    <Link href="/privacy" className="font-medium text-pin hover:underline">
      Privacy Policy
    </Link>
  );
}

export default function TermsPage() {
  return (
    <LegalPage
      title="Quad Terms of Service"
      effective="June 16, 2026"
      updated="June 16, 2026"
    >
      <div className="flex flex-col gap-4">
        <P>
          These Terms of Service (the “Terms”) are a binding agreement
          between you and Quad Software, LLC, a North Carolina limited
          liability company (“Quad,” “we,” “our,” or “us”), governing your
          access to and use of the Quad mobile application (the “App”). By
          creating an account or using the App, you agree to these Terms.
          If you do not agree, do not use the App.
        </P>
        <P>
          Your use of the App is also governed by our <PrivacyLink />,
          which is incorporated into these Terms by reference.
        </P>
      </div>

      <LegalSection title="1. Who We Are">
        <P>
          Quad is an independent application operated by Quad Software,
          LLC. It is designed to serve the Elon University community but is
          not officially affiliated with, sponsored by, or endorsed by Elon
          University. The App helps students discover campus clubs and
          events, follow organizations, RSVP to and save events, share
          posts within club feeds, and receive related notifications.
        </P>
      </LegalSection>

      <LegalSection title="2. Eligibility and Age Requirements">
        <P>
          The App is intended exclusively for individuals affiliated with
          Elon University. Account registration requires a valid @elon.edu
          email address. By registering, you represent that you are a
          current student, faculty member, or staff member of Elon
          University, and that the information you provide is accurate.
        </P>
        <P>
          You must be at least 18 years of age, or at least 13 years of age
          with the consent of a parent or legal guardian, to use the App.
          The App is not directed to children under 13, and you may not use
          it if you are under 13. You are responsible for complying with
          all applicable Elon University policies while using the App.
        </P>
      </LegalSection>

      <LegalSection title="3. Your Account">
        <P>
          You are responsible for maintaining the confidentiality of your
          login credentials and for all activity that occurs under your
          account. Keep your credentials secure and notify us promptly at{" "}
          <Mail /> if you suspect unauthorized access. You may not share
          your account, impersonate others, or create an account using
          someone else’s identity or email address.
        </P>
      </LegalSection>

      <LegalSection title="4. Acceptable Use and Community Standards">
        <P>
          You agree to use the App only for lawful purposes and to share
          only accurate, lawful, and respectful content. You agree not to:
        </P>
        <UL>
          <li>
            Post content that is misleading, harassing, discriminatory,
            hateful, threatening, defamatory, obscene, or otherwise
            unlawful;
          </li>
          <li>
            Post personal information about another person without their
            consent;
          </li>
          <li>
            Violate the intellectual property, privacy, or other rights of
            any person or organization;
          </li>
          <li>
            Upload viruses, malicious code, or attempt to disrupt,
            overload, or gain unauthorized access to the App or its
            systems;
          </li>
          <li>
            Use the App to send spam or unsolicited broadcasts, or to
            misuse notification features;
          </li>
          <li>Violate Elon University policies or any applicable law.</li>
        </UL>
        <P>
          We may remove or restrict content, and suspend or terminate
          accounts, that we believe violate these Terms, our community
          standards, university policy, or the law. Repeated or serious
          violations may result in permanent termination.
        </P>
      </LegalSection>

      <LegalSection title="5. Your Content">
        <P>
          You retain ownership of the content you submit to the App,
          including posts, captions, images, and club or event information
          (“Your Content”). You are solely responsible for Your Content and
          represent that you have the rights necessary to share it and that
          it does not violate these Terms or any law.
        </P>
        <P>
          By submitting Your Content, you grant Quad Software, LLC a
          non-exclusive, worldwide, royalty free license to host, store,
          reproduce, display, and distribute Your Content solely for the
          purpose of operating and providing the App (for example,
          displaying your posts in club feeds and your name and avatar in
          social contexts). This license ends when you delete Your Content
          or your account, except for content already shared with others
          and residual copies retained as described in our Privacy Policy.
        </P>
        <Callout>
          Important: Images you upload (including profile avatars, post
          images, and event or club images) are stored in publicly
          accessible cloud storage. Anyone with the direct image URL can
          view it, whether or not they have an account. Do not upload
          images you wish to keep private.
        </Callout>
      </LegalSection>

      <LegalSection title="6. Club Administrators">
        <P>
          Certain users are designated as club administrators with the
          ability to create and edit events and posts, review join
          requests, send notifications to club members, and view RSVP lists
          for their clubs. If you are a club administrator, you agree to
          use these capabilities responsibly, to keep club and event
          information accurate, and to respect the privacy of members and
          attendees. You may not use member information for any purpose
          other than operating your club within the App.
        </P>
      </LegalSection>

      <LegalSection title="7. Platform Role; Events and Assumption of Risk">
        <P>
          Quad provides a digital space for student organizations and
          community members to share information about events and
          opportunities. Quad does not organize, host, supervise, or manage
          any event listed in the App. Event organizers are solely
          responsible for the accuracy of their listings and for complying
          with campus rules and applicable law.
        </P>
        <P>
          You understand and agree that participating in events promoted
          through the App is entirely voluntary and at your own risk. Quad
          makes no representations about the safety, suitability, or
          quality of any event or host. By attending, you assume all risks,
          including injury, illness, property damage, or other loss, and
          you release Quad and its operators from any liability arising
          from your participation.
        </P>
      </LegalSection>

      <LegalSection title="8. Third-Party Links and Services">
        <P>
          The App may display links to club websites, social media
          profiles, ticketing platforms, forms, or other external
          resources. Quad does not control, endorse, or assume
          responsibility for these third party services, their content,
          fees, or practices. Review the terms and privacy policies of any
          third party service before providing information or payment
          details.
        </P>
      </LegalSection>

      <LegalSection title="9. Privacy">
        <P>
          Our collection and use of your personal information is described
          in our <PrivacyLink />. By using the App, you acknowledge that
          you have reviewed it.
        </P>
      </LegalSection>

      <LegalSection title="10. Intellectual Property">
        <P>
          The App, including its design, features, and underlying software,
          and the “Quad” name and marks, are owned by Quad Software, LLC
          and protected by intellectual property laws. Except for Your
          Content, you may not copy, modify, distribute, reverse engineer,
          or create derivative works from the App without our prior written
          permission.
        </P>
      </LegalSection>

      <LegalSection title="11. Termination and Account Deletion">
        <P>
          You may delete your account at any time from within the App;
          deletion is permanent and irreversible, as described in our
          Privacy Policy. We may suspend or terminate your access at any
          time, with or without notice, for any violation of these Terms,
          our community standards, university policy, or applicable law, or
          to protect the App, our users, or third parties. Sections of
          these Terms that by their nature should survive termination
          (including content licenses for already shared content,
          disclaimers, limitation of liability, and indemnification) will
          survive.
        </P>
      </LegalSection>

      <LegalSection title="12. Disclaimers">
        <P>
          The App and all content are provided on an “as is” and “as
          available” basis. To the fullest extent permitted by law, we
          disclaim all warranties, express or implied, including implied
          warranties of merchantability, fitness for a particular purpose,
          title, and non-infringement. We do not guarantee uninterrupted or
          error free service, or the accuracy or reliability of any event
          listing, club information, or user content.
        </P>
      </LegalSection>

      <LegalSection title="13. Limitation of Liability">
        <P>
          To the fullest extent permitted by law, Quad Software, LLC and
          its operators, members, volunteers, and affiliates will not be
          liable for any indirect, incidental, consequential, special,
          exemplary, or punitive damages, or for any loss of profits, data,
          or goodwill. Our total liability for any claim arising out of or
          relating to the App will not exceed fifty U.S. dollars (US $50).
        </P>
      </LegalSection>

      <LegalSection title="14. Indemnification">
        <P>
          You agree to indemnify, defend, and hold harmless Quad Software,
          LLC and its operators, members, volunteers, and affiliates from
          and against any claims, liabilities, damages, losses, and
          expenses (including reasonable attorneys’ fees) arising from your
          use of the App, Your Content, or your violation of these Terms or
          applicable law.
        </P>
      </LegalSection>

      <LegalSection title="15. Changes to These Terms">
        <P>
          We may update these Terms from time to time. If we make material
          changes, we will notify you within the App or by email and update
          the “Last Updated” date above. Your continued use of the App
          after changes take effect constitutes acceptance of the updated
          Terms.
        </P>
      </LegalSection>

      <LegalSection title="16. Governing Law">
        <P>
          These Terms are governed by the laws of the State of North
          Carolina, without regard to its conflict of law principles. You
          agree that any dispute arising out of or relating to these Terms
          or the App will be resolved in the state or federal courts
          located in North Carolina, and you consent to their jurisdiction.
        </P>
      </LegalSection>

      <LegalSection title="17. Contact">
        <P>
          Questions about these Terms can be directed to <Mail />.
        </P>
        <P>
          <B>Quad Software, LLC</B>
          <br />
          10348 Campus Box
          <br />
          Elon, NC 27244
        </P>
      </LegalSection>

      <LegalFootnote>
        © 2026 Quad Software, LLC. All rights reserved. Quad and the Quad
        mark are pending federal trademark registration (USPTO Serial No.
        99673569).
      </LegalFootnote>
    </LegalPage>
  );
}
