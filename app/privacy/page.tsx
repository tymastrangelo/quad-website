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
  title: "Privacy Policy | onby",
  description:
    "How Quad Software, LLC collects, uses, stores, and protects your personal information in the onby app.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="onby Privacy Policy"
      effective="November 18, 2026"
      updated="November 18, 2026"
    >
      <div className="flex flex-col gap-4">
        <P>
          Quad Software, LLC, a North Carolina limited liability company
          (“onby,” “we,” “our,” or “us”), operates the onby mobile
          application (the “App”) and the joinonby.com website (the
          “Site”). This Privacy Policy explains how we
          collect, use, store, disclose, and protect your personal
          information when you use the App or the Site, and describes your
          rights and choices regarding that information.
        </P>
        <P>
          By creating an account or using the App, you agree to the
          collection and use of your information as described in this
          Policy. If you do not agree, please do not use the App.
        </P>
        <P>
          <B>Independence from Elon University.</B> onby is an
          independent application owned and operated by Quad Software, LLC.
          It is not affiliated with, sponsored by, endorsed by, or an
          official service of Elon University. The App is designed to serve
          the Elon University community but is operated independently.
          onby is not a university system and does not act as a school
          official. It shows club and event listings that come from the
          school’s student organization and events system (see Section
          3.7), and it does not receive education records from the
          University.
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
          We will respond as soon as we reasonably can, and within 30 days.
        </P>
      </LegalSection>

      <LegalSection title="2. Who This Policy Applies To">
        <P>
          The App is intended exclusively for individuals affiliated with
          Elon University. Account registration requires a valid @elon.edu
          email address. The only exceptions are a small number of
          addresses we approve individually for testing and app store
          review. When you create an account, you confirm that you are a
          current student, faculty member, or staff member of Elon
          University.
        </P>
        <Callout>
          Age. The App is for people who have a school email address at a
          participating university, which means college students, faculty,
          and staff. It is not directed to children under 13, and we do not
          knowingly collect personal information from them. If we learn
          that we have, we will delete it. If you are under 18, use the App
          only with a parent or guardian’s permission. Parents or guardians
          who believe their child has provided personal information to us
          should contact us at the address in Section 1.
        </Callout>
      </LegalSection>

      <LegalSection title="3. Information We Collect">
        <Sub>3.1 Information You Provide to Us</Sub>
        <P>When you create an account, you provide:</P>
        <UL>
          <li>Your name (shown to others as your display name)</li>
          <li>Email address (your school email address; see Section 2)</li>
          <li>
            Password (stored only in hashed and salted form by our
            authentication provider; never in plaintext)
          </li>
          <li>Profile photo or avatar (optional; user uploaded image)</li>
          <li>
            Class year (an expected graduation year such as &quot;Class of
            2030&quot;, &quot;Graduate student&quot;, or &quot;Faculty or
            staff&quot;), which you choose when you sign up and can change
            in your profile
          </li>
        </UL>
        <P>When you use social and community features, you provide:</P>
        <UL>
          <li>
            Posts you publish (images and captions) for a club you
            administer, and likes on posts. Posts are a feature that each
            school can turn on or off; they are currently turned off for
            Elon University.
          </li>
          <li>
            Event invitations and shared posts you send to other users at
            your school
          </li>
          <li>The people you block</li>
          <li>
            Reports you file about an event or post (the reason you pick
            and any details you type)
          </li>
          <li>
            Feedback messages, category selections, and any images you
            attach when submitting in-app feedback or support requests
          </li>
          <li>
            Answers to in-app feedback questions, such as whether you went
            to an event, how you heard about it, a rating, and an optional
            comment; answers to the optional three-question belonging
            survey; and the choice you make about how your answer may be
            shared (with your first name and class year, without your
            name, or only with the onby team)
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
          <li>Club logo and banner images</li>
          <li>
            Club registration submissions (club name, category,
            description, meeting information, website, contact email, and
            image)
          </li>
          <li>
            Requests to send a school-wide notification (the title and
            message you propose, and your email address)
          </li>
        </UL>

        <Sub>3.2 Information Generated by Your Use of the App</Sub>
        <P>As you interact with the App, we collect:</P>
        <UL>
          <li>Saved events</li>
          <li>
            Club memberships, follows, and join requests (including request
            status)
          </li>
          <li>Club administrator role assignments</li>
          <li>
            Notification settings: which kinds of notifications you want,
            per club mutes, the daily digest, quiet hours, and your
            phone’s time zone (used to time them)
          </li>
          <li>
            Privacy settings: whether other users can invite you to events,
            and whether usage logging is on (Section 11.7)
          </li>
          <li>
            Calendar subscription settings: which sets of events you chose
            to include, and the private link that identifies your
            subscription (Section 11.3)
          </li>
          <li>
            A stored history of in-app notifications you have received
            (event reminders, administrator broadcasts, club updates, and
            invitations or shared posts from other users, which show the
            sender’s name)
          </li>
          <li>A flag indicating whether you have seen the welcome screen</li>
        </UL>

        <Sub>3.3 Usage Information</Sub>
        <P>
          onby itself records how you use the App, and links these records
          to your account:
        </P>
        <UL>
          <li>The screens you open and the buttons you tap (by label only)</li>
          <li>
            The events shown on your screen, the events and clubs you open,
            save, follow, share, or add to your calendar, and when you tap
            links to an event’s page or sign-up page
          </li>
          <li>
            The notifications you open, and the filters and settings you
            change (including whether Near me is off, on while you use the
            App, or always on; see Section 3.5)
          </li>
          <li>
            Searches you type in the App (lowercased and cut off at 100
            characters)
          </li>
          <li>When you use the App (sessions), and the App version and platform</li>
        </UL>
        <P>
          We do not record what you type anywhere in the App other than
          searches and your feedback answers. This usage information does
          not include your location coordinates or your contacts. It can
          include one fact related to location, described in Section 3.5:
          that you opened an event from a nearby alert. You can turn usage
          logging off (see Section 11.7).
        </P>

        <Sub>3.4 Automatic and Device Data</Sub>
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
            <B>Data kept on your device.</B> Appearance choices, your
            recent searches, the school you last picked, and your Near me
            setting are stored locally on your device. The App also keeps a
            copy of recently
            loaded content on your device so it opens quickly, and holds
            usage records (Section 3.3) there briefly until they are sent.
          </li>
          <li>
            <B>Crash and error data (if enabled).</B> The App contains
            optional crash reporting (Sentry) that runs only in a release
            where we have configured it. If it is active in the deployed
            version of the App,
            crash logs, exception data, device and OS diagnostic
            context, and Sentry session data may be collected. Performance
            tracing is disabled. We will update this Policy if Sentry is
            activated or deactivated in production.
          </li>
        </UL>

        <Sub>3.5 Location Data</Sub>
        <P>
          <B>
            We do not collect your location. Your location is not sent to
            our servers or to your school, and we do not store it.
          </B>
        </P>
        <P>
          <B>Near me (optional).</B> The campus map has a feature called
          Near me. It is off until you turn it on. When you turn it on, the
          App asks for your device’s location permission and uses your
          precise location, on your device only, to show you on the map, to
          show roughly how long the walk to an event is, and to list the
          nearest events first.
        </P>
        <P>
          <B>Nearby alerts (optional, iPhone only for now).</B> If you also
          allow location access “Always” and allow notifications, the App
          gives your phone’s operating system a list of up to 20 campus
          venues with upcoming events and asks it to notice when you arrive
          (iOS region monitoring). When your phone detects that you have
          come within about 150 meters of a venue where an event is
          happening or about to start, the App shows a notification on your
          phone. This check runs on your phone, using event information
          already saved there, and makes no network request. We are not
          told that it happened or where you were.
        </P>
        <P>
          <B>The one thing we can learn.</B> If you tap a nearby alert and
          usage logging is on (Section 3.3), we record that you opened that
          event from a nearby alert. That record implies you were near that
          event at that time. It contains no coordinates, it is only
          created if you tap the alert, and it is not created at all if you
          have turned usage logging off (Section 11.7).
        </P>
        <P>
          <B>Turning it off.</B> You can turn Near me off with the Near me
          button on the map or in the App’s settings, or by changing the
          App’s location permission in your device settings. Turning it off
          stops the region monitoring and clears the saved venue list from
          your phone. The rest of the App works without location.
        </P>
        <P>
          <B>Maps.</B> The map is drawn by your device’s map service (Apple
          Maps on iPhone), which receives requests for the map area being
          displayed, as with any app that shows a map, under that
          provider’s own privacy policy. If you ask for directions to an
          event, the App hands the venue to your device’s maps app.
          Coordinates stored in our database relate to campus buildings and
          event venues, not to any individual user’s location.
        </P>

        <Sub>3.6 Information We Do Not Collect</Sub>
        <P>
          We do not collect major, phone number, or biographical
          information beyond your class year. We do not collect payment
          information. We do not collect audio or record microphone input.
          We do not read your contacts.
        </P>

        <Sub>3.7 Club and Event Listings From School Systems</Sub>
        <P>
          Most club and event listings in the App are not typed in by
          users. They come from the school’s student organization and
          events system (at Elon University,
          PhoenixCONNECT). This includes organization names, descriptions,
          images, and contact emails, and event titles, descriptions,
          times, locations, and images. This information describes
          organizations and events, not App users.
        </P>

        <Sub>3.8 Information From the Site</Sub>
        <P>
          The Site has a form for asking us to bring onby to a school. If
          you submit it, we receive the email address and school name you
          enter, and we use them only to reply to you. We use your IP
          address to limit how many requests one connection can send. The
          Site does not use advertising or analytics cookies.
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
          service), and Elon University, not onby, would control identity
          authentication. In that case we would receive a limited set of
          directory information needed to operate your account, such as
          your name, @elon.edu email address, and a user identifier, and
          (where applicable) club administrator status. We would update
          this Policy before any such integration takes effect in
          production.
        </P>
        <P>
          onby does not receive education records from Elon University. The
          information that comes from the University’s systems is club and
          event listing information (Section 3.7). We use it only to
          operate the App and for no other purpose. If that ever changes,
          we will update this Policy first.
        </P>
      </LegalSection>

      <LegalSection title="5. How We Use Your Information">
        <P>We use your personal information for the following purposes:</P>
        <UL>
          <li>
            <B>Providing and operating the App:</B> creating and managing
            your account, authenticating your identity, and enabling all
            core features (event discovery, saved events, club follows,
            invitations, calendar sync, club posts where a school has them
            turned on, and notifications).
          </li>
          <li>
            <B>Personalized recommendations:</B> suggesting events based on
            the clubs you follow, the events you saved, and, unless you
            have turned usage logging off, the kinds of events and clubs
            you have recently opened or saved. Our servers summarize that
            recent activity for your account and the App ranks events on
            your device. No data is sent to a third party recommendation or
            advertising service for this purpose.
          </li>
          <li>
            <B>Push and in-app notifications:</B> sending event reminders
            (one day and one hour before events you saved), a notice when
            an event you saved or an event from a club you follow is
            starting, new events and posts from clubs you follow,
            invitations and shared posts from other users, an optional
            daily digest, and administrator broadcast messages. Nearby
            alerts (Section 3.5) are created by your phone, not sent by
            us.
          </li>
          <li>
            <B>Club administration:</B> enabling club administrators to
            edit their club’s profile, create posts, review join requests,
            and see who follows their clubs.
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
          <li>
            <B>Suggestions and understanding onby:</B> using your usage
            information and feedback to suggest events, to understand how
            onby is used and improve it, and to report aggregate results to
            a partner university (see Section 6.7).
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
            Your display name and avatar are visible to other signed-in
            users at your school. For example, they appear in the list
            people choose from when inviting someone to an event or sharing
            a post (unless you turn off event invites; see Section 11.1),
            on invitations and shared posts you send, and on posts you
            author.
          </li>
          <li>
            Posts, captions, and likes are visible to other users with
            access to the relevant club feed.
          </li>
          <li>
            The administrators of a club can see the names and avatars of
            the people who follow that club or have asked to join it.
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
          service providers solely to operate the App. They process it on
          our behalf under their own terms of service and data processing
          terms:
        </P>
        <UL>
          <li>
            <B>Supabase (supabase.com):</B> primary database,
            authentication, file storage, and serverless functions. Data
            processed: account credentials, profile data, all user
            generated content, engagement data (saved events, follows,
            usage records, and feedback answers), push notification tokens,
            and uploaded images. Hosted on Amazon
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
            in a feedback submission; and the email address and school name
            you enter in the request form on the Site.
          </li>
          <li>
            <B>Google (Gmail):</B> the onby team’s email inbox. Feedback
            and support messages, and requests sent from the Site, are
            delivered there by Resend, so Google stores those messages and
            any attachments.
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
        <P>
          Two other kinds of third party are involved only when you use the
          related feature. Your device’s map service draws the campus map
          (Section 3.5). If you subscribe to your onby calendar (Section
          11.3), the calendar service you add it to, such as Apple, Google,
          or Microsoft, fetches your private calendar link and receives the
          events in it.
        </P>

        <Sub>6.3 No Sale and No Advertising</Sub>
        <P>
          We do not sell, rent, or lease your personal information to any
          third party. We do not share your personal information with
          advertising networks, data brokers, or analytics providers. The
          App contains no advertising SDKs, tracking pixels, or third-party
          analytics tools.
        </P>

        <Sub>6.4 Administrative Disclosures</Sub>
        <P>
          Certain accounts hold elevated access privileges. Club
          administrators can view the names and avatars of their clubs’
          followers and of people who asked to join. School administrator
          accounts and an approved list of senders can send broadcast
          notifications to all users at a school, and school administrator
          accounts can see activity totals for their school. The onby team
          can look up an individual account (name, email address, and class
          year) and view that account’s usage records, follows, saved
          events, and feedback answers, in order to operate, support, and
          fix the App. These capabilities are used only to operate the
          App.
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

        <Sub>6.7 Partner Universities</Sub>
        <P>
          A partner university receives totals and breakdowns only. Groups
          of fewer than five students are combined so no one can be picked
          out. A partner university receives a feedback quote only if you
          chose to share it; it is labeled by class year, and includes your
          first name only if you chose that. Accounts belonging to the onby
          team and to testers are left out of these totals. We never sell
          your information and never use it for advertising or marketing.
        </P>
      </LegalSection>

      <LegalSection title="7. Data Location and International Transfers">
        <P>
          Your personal information is stored and processed in the United
          States. We do not store, grant access to, transmit, or otherwise
          process your personal information outside the United States
          without an appropriate legal basis.
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
          deletion of your profile, saved events, posts, likes, club
          memberships and follows, join requests, notification records,
          notification preferences, block list, calendar subscription
          link, usage records, and feedback answers. Your uploaded avatar
          image is also deleted on a best effort basis.
        </P>
        <P>A few things are not removed automatically:</P>
        <UL>
          <li>
            Reports you filed about an event or post are kept, but are no
            longer linked to you.
          </li>
          <li>
            Club registration submissions and requests for a school-wide
            notification that you sent us are kept as records of what was
            requested, including any contact email you entered.
          </li>
          <li>
            Images you uploaded for a club or a post are not deleted from
            storage automatically when you delete your account. Contact us
            at the address in Section 1 if you want one removed.
          </li>
          <li>
            A feedback quote you agreed to share that has already been
            included in a report to a partner university cannot be
            recalled.
          </li>
        </UL>
        <P>Residual copies may persist for a limited period in:</P>
        <UL>
          <li>
            Supabase database backups, retained according to Supabase’s
            backup retention schedule;
          </li>
          <li>
            Resend email delivery logs, which may retain copies of feedback
            submissions according to Resend’s retention policies;
          </li>
          <li>
            the onby team’s email inbox (Gmail), which holds feedback and
            support messages you sent us; and
          </li>
          <li>
            Sentry (if enabled), which may retain error and crash records
            according to Sentry’s retention policies.
          </li>
        </UL>
        <P>
          Data associated with deleted accounts will not be used for any
          operational purpose after deletion is processed. If you have a specific
          retention or deletion question, contact us at the address in
          Section 1.
        </P>
        <P>
          Raw usage records (Section 3.3) are kept for up to 13 months.
          Feedback answers are kept until you delete your account. Both
          are deleted when you delete your account.
        </P>
      </LegalSection>

      <LegalSection title="10. Cookies, Tracking, and Analytics">
        <P>
          onby records in-app usage itself (first-party), as described in
          Section 3.3, to suggest events, to understand and improve onby,
          and to report aggregate results to a partner university. The App
          does not use third-party analytics SDKs (such as Google
          Analytics, Firebase Analytics, Amplitude, Mixpanel, Segment, or
          Meta Pixel), advertising identifiers, cookies, cross-app
          tracking, or any third party tracking technologies. Session tokens are
          stored locally on your device in a secure keychain or keystore,
          not in cookies.
        </P>
      </LegalSection>

      <LegalSection title="11. Your Choices and Rights">
        <Sub>11.1 Profile and Account Controls</Sub>
        <UL>
          <li>
            You may update your display name, avatar, and class year at
            any time from the Profile screen.
          </li>
          <li>
            Under Profile &rarr; Privacy &amp; Blocked you may turn off
            event invites, which also removes you from the list people
            choose from when inviting, and see and undo your blocks. You
            can block someone from a notification they sent you. A blocked
            person cannot invite you or share posts with you.
          </li>
          <li>
            You may delete your account yourself at any time from Profile
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
            Within the App, under Profile &rarr; Notifications, you may
            pause push notifications, choose which kinds you receive, mute
            individual clubs, turn the daily digest on or off, and set
            quiet hours.
          </li>
          <li>
            School-wide alerts from your school’s administrators are not
            affected by these in-app settings. Denying notification
            permission on your device stops them from appearing as push
            notifications.
          </li>
        </UL>

        <Sub>11.3 Calendar and Photo Library</Sub>
        <P>
          <B>Adding one event.</B> When you choose to add an event to your
          calendar, the App opens your device’s own new event screen with
          the details filled in, and you confirm it there. This is a one
          way write; we do not read or access existing calendar entries.
        </P>
        <P>
          <B>Calendar subscription.</B> Under Profile &rarr; Calendar Sync
          you can subscribe to a calendar of the events you saved and, if
          you choose, events from clubs you follow and campus highlights.
          The subscription is a private link. Anyone who has the link can
          see the events in it, so share it only if you mean to. You can
          reset the link at any time, which stops the old one from working.
        </P>
        <P>
          <B>Photos.</B> The App requests access to your photo library only
          to let you select images for your avatar, club pages, posts, and
          feedback attachments. The App does not currently take photos with
          your camera. You may deny or revoke any of these permissions at
          the operating system level; doing so will prevent the related
          feature but will not affect other App features.
        </P>

        <Sub>11.4 Access, Correction, Deletion, and Portability</Sub>
        <P>
          You may request access to, correction of, deletion of, or a
          portable copy of your personal information by contacting us at
          the address in Section 1. On request, we can provide an export of
          your account data in a common machine readable format (such as
          CSV or JSON). We will respond as soon as we reasonably can, and
          within 30 days, and
          may need to verify your identity before fulfilling a request. You
          do not need to contact us to delete your account: the in-app
          control at Profile &rarr; Delete Account does this immediately and
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

        <Sub>11.7 Usage Logging and Feedback Prompts</Sub>
        <P>
          You can turn off usage logging in the App under Profile &rarr;
          Privacy &amp; Blocked &rarr; Help improve onby. When it is off,
          the App stops sending usage records and our servers ignore
          anything sent. You can always skip feedback prompts.
        </P>

        <Sub>11.8 Location</Sub>
        <P>
          Near me and nearby alerts are off unless you turn them on, and
          you can turn them off at any time in the App or in your device
          settings. See Section 3.5.
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
            Session tokens stored in your device’s secure keychain or
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
          applicable law.
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
            <B>Photo Library:</B> to select images for your avatar, club
            pages, posts, and feedback attachments.
          </li>
          <li>
            <B>Calendar:</B> to write event details you choose to your
            device’s native calendar. The App does not read your calendar.
          </li>
          <li>
            <B>Push Notifications:</B> to deliver event reminders, club
            updates, invitations, the daily digest, and broadcast messages,
            and to show nearby alerts.
          </li>
          <li>
            <B>Location (optional, only if you turn on Near me):</B> “While
            Using the App” to show you on the campus map and sort events by
            distance; “Always” only if you also want nearby alerts. Your
            location is used on your device and is not transmitted to us.
            See Section 3.5.
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
          to delete the information and close the account. The App is for
          people with a school email address at a participating university
          (Section 2). If you are under 18, use the App only with a parent
          or guardian’s permission.
        </P>
      </LegalSection>

      <LegalSection title="15. Third-Party Links and Services">
        <P>
          The App may display links to club websites and social media
          profiles (for example, Instagram, Twitter/X, Facebook, and
          YouTube), and links to an event’s original listing or sign-up
          page on your school’s systems (at Elon University,
          PhoenixCONNECT). These links direct you to third party services that
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
          We will respond to all privacy related inquiries as soon as we
          reasonably can, and within 30 days.
        </P>
      </LegalSection>

      <LegalFootnote>
        © 2026 Quad Software, LLC. All rights reserved. onby and
        the onby mark are pending federal trademark registration
        (USPTO Serial No. 99673569).
      </LegalFootnote>
    </LegalPage>
  );
}
