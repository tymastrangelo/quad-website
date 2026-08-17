import type { Metadata } from "next";
import {
  B,
  Callout,
  LegalFootnote,
  LegalPage,
  LegalSection,
  Mail,
  P,
  Sub,
  UL,
} from "@/components/site/legal";

export const metadata: Metadata = {
  title: "Privacy Policy | Quad",
  description:
    "How Quad Software, LLC collects, uses, stores, and protects your personal information in the Quad Connect app.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Quad Connect Privacy Policy"
      effective="June 22, 2026"
      updated="August 17, 2026"
    >
      <div className="flex flex-col gap-4">
        <P>
          Quad Software, LLC, a North Carolina limited liability company
          (“Quad,” “we,” “our,” or “us”), operates the Quad Connect mobile
          application (the “App”). This Privacy Policy explains how we
          collect, use, store, disclose, and protect your personal
          information when you use the App, and describes your rights and
          choices regarding that information.
        </P>
        <P>
          By creating an account or using the App, you agree to the
          collection and use of your information as described in this
          Policy. If you do not agree, please do not use the App.
        </P>
        <P>
          <B>Independence from Elon University.</B> Quad Connect is an
          independent application owned and operated by Quad Software, LLC.
          It is not affiliated with, sponsored by, endorsed by, or an
          official service of Elon University. The App is designed to serve
          the Elon University community but is operated independently.
          Where Quad acts as a service provider to Elon University under a
          separate written agreement, that agreement governs Quad’s
          handling of any information Elon University provides to us, and
          its terms control over this Policy to the extent of any conflict
          with respect to that information.
        </P>
      </div>

      <LegalSection title="1. Who We Are and How to Reach Us">
        <P>
          <B>Data Controller:</B> Quad Software, LLC
        </P>
        <P>
          <B>Mailing Address:</B> 10348 Campus Box, Elon, NC 27244
        </P>
        <P>
          <B>Contact Email:</B> <Mail />
        </P>
        <P>
          All privacy related requests, including questions, access,
          correction, deletion, and complaints, should be sent to <Mail />.
          We will respond within five (5) business days.
        </P>
      </LegalSection>

      <LegalSection title="2. Who This Policy Applies To">
        <P>
          The App is intended exclusively for individuals affiliated with
          Elon University. Account registration requires a valid @elon.edu
          email address. By registering, you represent that you are a
          current student, faculty member, or staff member of Elon
          University.
        </P>
        <Callout>
          Age requirement. The App is intended for users who are at least
          18 years of age, or who are at least 13 years of age and have
          obtained verifiable parental or guardian consent as required by
          applicable law, including the Children’s Online Privacy
          Protection Act (“COPPA”). If you are under 13, you may not use
          the App. If we learn that we have collected personal information
          from a child under 13 without verifiable parental consent, we
          will delete it promptly. Parents or guardians who believe their
          child has provided personal information to us should contact us
          immediately at the address in Section 1.
        </Callout>
      </LegalSection>

      <LegalSection title="3. Information We Collect">
        <Sub>3.1 Information You Provide to Us</Sub>
        <P>When you create an account, you provide:</P>
        <UL>
          <li>First and last name (combined into a display name)</li>
          <li>Email address (must be an @elon.edu address)</li>
          <li>
            Password (stored only in hashed and salted form by our
            authentication provider; never in plaintext)
          </li>
          <li>Profile photo or avatar (optional; user uploaded image)</li>
        </UL>
        <P>When you use social and community features, you provide:</P>
        <UL>
          <li>Posts you publish (images and captions) to club feeds</li>
          <li>Likes on posts</li>
          <li>
            Feedback messages, category selections, and any images you
            attach when submitting in-app feedback or support requests
          </li>
        </UL>
        <P>
          When you or club administrators manage club information, you may
          provide:
        </P>
        <UL>
          <li>
            Club names, descriptions, summaries, categories, contact
            emails, meeting times, websites, and social media links
          </li>
          <li>
            Event details (title, description, date and time, location,
            venue coordinates, host, images, and recurrence settings)
          </li>
          <li>Club registration submissions</li>
        </UL>

        <Sub>3.2 Information Generated by Your Use of the App</Sub>
        <P>As you interact with the App, we collect:</P>
        <UL>
          <li>RSVPs to events</li>
          <li>Saved events</li>
          <li>
            Club memberships, follows, and join requests (including request
            status)
          </li>
          <li>Club administrator role assignments</li>
          <li>
            Per club notification mute preferences and daily reminder
            settings
          </li>
          <li>
            A stored history of in-app notifications you have received
            (event reminders, administrator broadcasts, and club updates)
          </li>
          <li>A flag indicating whether you have seen the welcome screen</li>
        </UL>

        <Sub>3.3 Automatic and Device Data</Sub>
        <UL>
          <li>
            <B>Push notification token.</B> When you grant notification
            permission, your device generates an Expo push token that we
            store server side to deliver push notifications. This token is
            never exposed to other users.
          </li>
          <li>
            <B>Device type indicator.</B> We check whether you are using a
            physical device (rather than an emulator) to determine whether
            to attempt push notification registration. We do not collect
            device identifiers, IMEI, or advertising IDs.
          </li>
          <li>
            <B>Session data.</B> Your authentication session (access token
            and refresh token) is stored in your device’s secure keychain
            or keystore and is not stored in plaintext.
          </li>
          <li>
            <B>Local app preferences.</B> Theme color and a testing mode
            flag are stored locally on your device and are not transmitted
            to our servers.
          </li>
          <li>
            <B>Crash and error data (if enabled).</B> If Sentry crash
            reporting is active in the deployed version of the App,
            anonymized crash logs, exception data, device and OS diagnostic
            context, and Sentry session data may be collected. Performance
            tracing is disabled. We will update this Policy if Sentry is
            activated or deactivated in production.
          </li>
        </UL>

        <Sub>3.4 Location Data</Sub>
        <P>
          <B>
            We do not collect, store, or transmit your GPS location or any
            precise geolocation data.
          </B>
        </P>
        <P>
          The campus map screen may display your location on a map using
          your device’s built-in location service (the “show my location”
          feature). This display is processed entirely on your device by
          the operating system and is not read by the App, sent to our
          servers, or stored by us. You may receive an operating system
          location permission prompt when viewing the map, and you can deny
          it without affecting any other App feature. Coordinates stored in
          our database relate to campus buildings and event venues, not to
          any individual user’s location.
        </P>

        <Sub>3.5 Information We Do Not Collect</Sub>
        <P>
          We do not collect graduation year, major, phone number, or
          biographical information. We do not collect payment information.
          We do not collect audio or record microphone input.
        </P>
      </LegalSection>

      <LegalSection title="4. University Authentication and Integration">
        <P>
          Today, accounts are created and authenticated using an email
          address and password managed by our authentication provider
          (Supabase).
        </P>
        <P>
          <B>Planned single sign-on (SSO).</B> We are working toward
          optional integration with Elon University’s identity system. If
          and when university SSO is enabled, you would sign in through
          Elon’s identity provider (for example, a SAML or Shibboleth based
          service), and Elon University, not Quad, would control identity
          authentication. In that case we would receive a limited set of
          directory information needed to operate your account, such as
          your name, @elon.edu email address, and a user identifier, and
          (where applicable) club administrator status. We would update
          this Policy before any such integration takes effect in
          production.
        </P>
        <P>
          Any information that Elon University provides to us in connection
          with a service provider relationship is handled in accordance
          with our written agreement with the University and applicable
          law, including, where applicable, the Family Educational Rights
          and Privacy Act (“FERPA”). We use such information only to
          operate the App and for no other purpose.
        </P>
      </LegalSection>

      <LegalSection title="5. How We Use Your Information">
        <P>We use your personal information for the following purposes:</P>
        <UL>
          <li>
            <B>Providing and operating the App:</B> creating and managing
            your account, authenticating your identity, and enabling all
            core features (event discovery, RSVPs, club follows, social
            posts, and notifications).
          </li>
          <li>
            <B>Personalized recommendations:</B> generating event
            suggestions using an on-device scoring algorithm that considers
            the clubs you follow, your past RSVPs and saves, event
            categories, and venue locations you have engaged with. This
            processing occurs on your device using data already associated
            with your account. No data is sent to a third party
            recommendation or advertising service for this purpose.
          </li>
          <li>
            <B>Push and in-app notifications:</B> sending event reminders
            (one day and one hour before events you saved or RSVP’d to),
            club updates, new post alerts, and administrator broadcast
            messages.
          </li>
          <li>
            <B>Club administration:</B> enabling club administrators to
            create posts, review join requests, and view RSVP lists for
            their clubs.
          </li>
          <li>
            <B>Support and feedback:</B> receiving and responding to your
            in-app feedback or support requests.
          </li>
          <li>
            <B>Security and integrity:</B> detecting fraud, enforcing our
            Terms of Service, and maintaining platform safety.
          </li>
          <li>
            <B>Legal compliance:</B> complying with applicable laws,
            regulations, and lawful requests.
          </li>
          <li>
            <B>Service improvement:</B> diagnosing technical issues,
            monitoring App performance, and improving functionality.
          </li>
        </UL>
        <P>
          <B>No advertising and no AI training.</B> We do not use your
          personal information to serve you advertising. We do not use your
          personal information for automated individual decision-making
          that produces legal or similarly significant effects. We do not
          use, sell, or share your personal information to train, develop,
          or improve any artificial intelligence or machine learning
          models, and we do not permit our service providers to use your
          personal information for that purpose.
        </P>
      </LegalSection>

      <LegalSection title="6. How We Share Your Information">
        <Sub>6.1 Within the App</Sub>
        <UL>
          <li>
            Your display name and avatar are visible to other users in
            social contexts, such as on posts you author and in RSVP lists
            viewed by club administrators.
          </li>
          <li>
            Posts, captions, and likes are visible to other users with
            access to the relevant club feed.
          </li>
          <li>
            RSVP lists for an event are visible to the administrator(s) of
            the club hosting that event.
          </li>
          <li>
            Your email address and push notification token are never
            exposed to other regular users. Database level security
            policies restrict access, and push tokens are resolved only
            server side when delivering notifications.
          </li>
        </UL>

        <Sub>6.2 Service Providers (Sub-Processors)</Sub>
        <P>
          We share your personal information with the following third party
          service providers solely to operate the App. Each provider is
          contractually obligated to protect your data and to use it only
          to provide services to us:
        </P>
        <UL>
          <li>
            <B>Supabase (supabase.com):</B> primary database,
            authentication, file storage, and serverless functions. Data
            processed: account credentials, profile data, all user
            generated content, engagement data (RSVPs, saves, memberships),
            push notification tokens, and uploaded images. Hosted on Amazon
            Web Services in a United States region.
          </li>
          <li>
            <B>Expo / Expo Application Services (expo.dev):</B> application
            build, distribution, and push notification relay. Data
            processed: device push tokens and the content of push
            notifications (titles, bodies, and snippets such as event and
            club names).
          </li>
          <li>
            <B>
              Apple Push Notification service (APNs) and Google Firebase
              Cloud Messaging (FCM):
            </B>{" "}
            operating system level push notification transport. Data
            processed: push token and notification payload for delivery to
            your device.
          </li>
          <li>
            <B>Resend (resend.com):</B> transactional email delivery. Data
            processed: feedback message text, category, your user ID and
            email address, timestamp, and any image attachments you include
            in a feedback submission.
          </li>
          <li>
            <B>Sentry (sentry.io) (if enabled in production):</B> crash and
            error reporting. Data processed: crash and exception data,
            device and OS diagnostic context, and session data. Performance
            tracing is disabled.
          </li>
          <li>
            <B>Apple App Store and Google Play Store:</B> app distribution.
            Data processed: standard store level data associated with app
            downloads, governed by Apple’s and Google’s own privacy
            policies.
          </li>
        </UL>

        <Sub>6.3 No Sale and No Advertising</Sub>
        <P>
          We do not sell, rent, or lease your personal information to any
          third party. We do not share your personal information with
          advertising networks, data brokers, or analytics providers. The
          App contains no advertising SDKs, tracking pixels, or behavioral
          analytics tools.
        </P>

        <Sub>6.4 Administrative Disclosures</Sub>
        <P>
          Certain accounts hold elevated access privileges. Club
          administrators can view the names and avatars of members and
          RSVP’d attendees for their clubs. A designated owner account and
          an approved list of senders can send broadcast notifications to
          all users. These capabilities are used only to operate the App.
        </P>

        <Sub>6.5 Legal and Safety Disclosures</Sub>
        <P>
          We may disclose your personal information if we believe in good
          faith that disclosure is necessary to: (a) comply with applicable
          law or respond to valid legal process, such as a court order or
          subpoena; (b) protect the rights, property, or safety of Quad
          Software, LLC, our users, or the public; or (c) detect, prevent,
          or address fraud, security, or technical issues.
        </P>

        <Sub>6.6 Business Transfers</Sub>
        <P>
          Quad Software, LLC may transfer its membership interests or
          assets, or undergo a merger, acquisition, reorganization, or
          sale. In such an event, your personal information may be
          transferred to the successor entity, which will remain bound by
          commitments at least as protective as those in this Policy. We
          will notify you of any such transfer, and of any resulting
          choices you may have, by a prominent notice in the App or by
          email.
        </P>
      </LegalSection>

      <LegalSection title="7. Data Location and International Transfers">
        <P>
          Your personal information is stored and processed in the United
          States. We do not store, grant access to, transmit, or otherwise
          process your personal information outside the United States
          without an appropriate legal basis, and, where we act as a
          service provider to Elon University, without the University’s
          prior written consent as required by our agreement.
        </P>
        <P>
          The App is designed for and targeted at Elon University
          affiliates in the United States. We do not knowingly market to or
          target individuals outside the United States. If you access the
          App from outside the United States, your information will be
          transferred to, processed, and stored in the United States, where
          data protection laws may differ from those in your jurisdiction.
          By using the App, you consent to this transfer and processing.
        </P>
      </LegalSection>

      <LegalSection title="8. User-Generated Content and Public Storage">
        <Callout>
          Important: Images you upload to the App (including your profile
          avatar, post images, and event or club images) are stored in
          publicly accessible cloud storage buckets. This means that anyone
          who obtains the direct URL to an image can view it, regardless of
          whether they have an account. Do not upload images you wish to
          keep private.
        </Callout>
        <P>
          Text you post (captions) is visible to other users who can view
          the relevant club or feed within the App. You are responsible for
          the content you submit. Do not post personal information about
          others without their consent.
        </P>
      </LegalSection>

      <LegalSection title="9. Data Retention">
        <P>
          We retain your personal information for as long as your account
          is active or as needed to provide the App’s services. When you
          delete your account (see Section 11), we initiate a cascade
          deletion of your profile, RSVPs, saved events, posts, likes, club
          memberships, join requests, notification records, and
          notification preferences. Your uploaded avatar image is also
          deleted on a best effort basis.
        </P>
        <P>Residual copies may persist for a limited period in:</P>
        <UL>
          <li>
            Supabase database backups, retained according to Supabase’s
            backup retention schedule;
          </li>
          <li>
            Resend email delivery logs, which may retain copies of feedback
            submissions according to Resend’s retention policies; and
          </li>
          <li>
            Sentry (if enabled), which may retain error and crash records
            according to Sentry’s retention policies.
          </li>
        </UL>
        <P>
          Data associated with deleted accounts will not be used for any
          operational purpose after deletion is processed. Where we hold
          data on behalf of Elon University under a service provider
          agreement, we will return or securely destroy that data following
          termination as required by that agreement. If you have a specific
          retention or deletion question, contact us at the address in
          Section 1.
        </P>
      </LegalSection>

      <LegalSection title="10. Cookies, Tracking, and Analytics">
        <P>
          The App does not use cookies, advertising identifiers, cross site
          tracking, behavioral analytics SDKs (such as Google Analytics,
          Firebase Analytics, Amplitude, Mixpanel, Segment, or Meta Pixel),
          or any third party tracking technologies. Session tokens are
          stored locally on your device in a secure keychain or keystore,
          not in cookies.
        </P>
      </LegalSection>

      <LegalSection title="11. Your Choices and Rights">
        <Sub>11.1 Profile and Account Controls</Sub>
        <UL>
          <li>
            You may update your display name and avatar at any time from
            the profile settings screen.
          </li>
          <li>
            You may delete your account yourself at any time from Settings
            &rarr; Delete Account inside the App. No request to us and no
            contact with us is required. Deletion runs immediately,
            permanently removes your profile and associated data as
            described in Section 9, and is irreversible.
          </li>
        </UL>

        <Sub>11.2 Notification Controls</Sub>
        <UL>
          <li>
            You may grant or deny push notification permission at the
            operating system level at any time.
          </li>
          <li>
            Within the App, you may mute notifications for individual
            clubs.
          </li>
          <li>
            You may toggle the daily event reminder preference in the App
            settings.
          </li>
        </UL>

        <Sub>11.3 Calendar, Photo Library, and Camera</Sub>
        <P>
          The App may request permission to add events to your device’s
          native calendar. This is a one way write; we do not read or
          access existing calendar entries. The App requests access to your
          photo library and camera only to let you select or capture images
          for posts, events, club pages, avatars, and feedback attachments.
          You may deny or revoke any of these permissions at the operating
          system level; doing so will prevent the related feature but will
          not affect other App features.
        </P>

        <Sub>11.4 Access, Correction, Deletion, and Portability</Sub>
        <P>
          You may request access to, correction of, deletion of, or a
          portable copy of your personal information by contacting us at
          the address in Section 1. On request, we can provide an export of
          your account data in a common machine readable format (such as
          CSV or JSON). We will respond within five (5) business days and
          may need to verify your identity before fulfilling a request. You
          do not need to contact us to delete your account: the in-app
          control at Settings &rarr; Delete Account does this immediately and
          is the fastest way to delete your data.
        </P>

        <Sub>11.5 California Residents</Sub>
        <P>
          If you are a California resident, you may have additional rights
          under the California Consumer Privacy Act (CCPA) and the
          California Privacy Rights Act (CPRA), including the rights to
          know what personal information we collect and how it is used, to
          delete your personal information, to correct inaccurate personal
          information, and to opt out of the “sale” or “sharing” of
          personal information. We do not sell or share personal
          information as those terms are defined under California law. To
          exercise any of these rights, contact us at the address in
          Section 1. We will not discriminate against you for exercising
          your privacy rights.
        </P>

        <Sub>11.6 Other U.S. State Privacy Laws</Sub>
        <P>
          Users in Virginia, Colorado, Connecticut, Texas, and other states
          with comprehensive privacy laws may have similar rights,
          including rights to access, correct, delete, and obtain a
          portable copy of their personal information, and to opt out of
          certain processing. To the extent applicable, you may exercise
          these rights by contacting us at the address in Section 1.
        </P>
      </LegalSection>

      <LegalSection title="12. Security">
        <P>
          We implement reasonable and appropriate technical and
          organizational measures designed to protect your personal
          information against unauthorized access, disclosure, alteration,
          and destruction. These measures include:
        </P>
        <UL>
          <li>
            Encryption in transit (HTTPS/TLS) for all data transmitted
            between your device and our servers, and encryption at rest for
            stored data;
          </li>
          <li>
            Session tokens stored in your device’s secure enclave or
            keystore, not in plaintext or unencrypted storage;
          </li>
          <li>
            Database level Row Level Security (RLS) policies that restrict
            what data each authenticated user can read or write;
          </li>
          <li>
            Column level restrictions preventing client side reads of push
            notification tokens;
          </li>
          <li>
            Server side privilege separation: sensitive operations (account
            deletion, push notification dispatch, administrative
            broadcasts) run in isolated serverless functions using service
            level credentials, and the calling user’s identity is always
            verified from their authentication token;
          </li>
          <li>
            Logical separation of data by account, with role based access
            controls;
          </li>
          <li>
            Passwords managed and stored in hashed and salted form by our
            authentication provider; and
          </li>
          <li>
            Explicit blocking of microphone and audio recording
            permissions.
          </li>
        </UL>
        <P>
          <B>Breach notification.</B> If we become aware of a security
          incident affecting your personal information, we will notify
          affected users and, where applicable, Elon University and
          relevant authorities without undue delay and as required by
          applicable law and any agreement under which we hold the data.
        </P>
        <P>
          Despite these measures, no system is completely secure, and we
          cannot guarantee the absolute security of your information. We
          encourage you to use a strong, unique password and to keep your
          device software up to date.
        </P>
      </LegalSection>

      <LegalSection title="13. Device Permissions Summary">
        <P>
          The App may request the following device level permissions, each
          of which you can manage at any time through your device’s
          settings:
        </P>
        <UL>
          <li>
            <B>Photo Library:</B> to select images for posts, events, club
            pages, avatars, and feedback attachments.
          </li>
          <li>
            <B>Camera:</B> to take photos for posts, events, and other
            content.
          </li>
          <li>
            <B>Calendar:</B> to write event details you choose to your
            device’s native calendar. The App does not read your calendar.
          </li>
          <li>
            <B>Push Notifications:</B> to deliver event reminders, club
            updates, and broadcast messages.
          </li>
          <li>
            <B>Location (map display only):</B> to display your position on
            the campus map. Your location is processed on your device and
            is not transmitted to us.
          </li>
        </UL>
      </LegalSection>

      <LegalSection title="14. Children's Privacy">
        <P>
          The App is not directed to children under the age of 13, and we
          do not knowingly collect personal information from children under
          13. If you are a parent or guardian and believe your child has
          provided personal information to us, please contact us
          immediately at the address in Section 1, and we will take steps
          to delete the information and terminate the child’s account. If
          you are between 13 and 17 years of age, you may use the App only
          with the consent of a parent or legal guardian.
        </P>
      </LegalSection>

      <LegalSection title="15. Third-Party Links and Services">
        <P>
          The App may display links to club websites and social media
          profiles (for example, Instagram, Twitter/X, Facebook, and
          YouTube). These links direct you to third party services that
          have their own privacy policies. We are not responsible for the
          privacy practices of those services, and this Policy does not
          apply to them. We encourage you to review the privacy policies of
          any third party services you visit.
        </P>
      </LegalSection>

      <LegalSection title="16. Governing Law">
        <P>
          This Policy and any dispute relating to it or to your use of the
          App are governed by the laws of the State of North Carolina,
          without regard to its conflict of law principles, except where a
          mandatory consumer protection or privacy law of your state of
          residence applies.
        </P>
      </LegalSection>

      <LegalSection title="17. Changes to This Policy">
        <P>
          We may update this Privacy Policy from time to time. If we make
          material changes, we will notify you by posting a prominent
          notice within the App and by updating the “Last Updated” date
          above. For significant changes that materially affect how we
          handle your personal information, we will provide at least thirty
          (30) days’ advance notice before the changes take effect. Your
          continued use of the App after the effective date of any revised
          Policy constitutes your acceptance of the updated terms. We
          encourage you to review this Policy periodically.
        </P>
      </LegalSection>

      <LegalSection title="18. Contact Us">
        <P>
          If you have questions, concerns, or requests relating to this
          Privacy Policy or our privacy practices, please contact us:
        </P>
        <P>
          <B>Quad Software, LLC</B>
          <br />
          10348 Campus Box
          <br />
          Elon, NC 27244
          <br />
          <Mail />
        </P>
        <P>
          We will respond to all privacy related inquiries within five (5)
          business days.
        </P>
      </LegalSection>

      <LegalFootnote>
        © 2026 Quad Software, LLC. All rights reserved. Quad Connect and
        the Quad Connect mark are pending federal trademark registration
        (USPTO Serial No. 99673569).
      </LegalFootnote>
    </LegalPage>
  );
}
