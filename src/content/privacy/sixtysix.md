**Effective date:** 20 October 2026

Sixty6 ("the App", "we", "us") is a habit and exercise-consistency tracker operated by **{{legalName}}**, an Australian sole trader, ABN **{{abn}}**, based in **{{state}}, Australia**. Sixty6 turns daily exercise into friendly competition: users keep a personal bank of daily goals (e.g. push-up targets), log workout entries, and rank on leaderboards by completion rate and consistency.

The App is a direct-to-consumer (B2C) mobile application distributed through the Apple App Store and Google Play Store (bundle/package `com.simosultan.sixty6`).

**Privacy contact:** [{{email}}](mailto:{{email}})

This policy explains what personal information we collect, why we collect it, where we store it (including on your device and on overseas services), and the rights you have under the *Privacy Act 1988* (Cth) and the 13 Australian Privacy Principles (APPs).

**Audience:** Sixty6 is a general-audience service intended for people aged 13 and over. It is not directed at children under 13, and we do not knowingly collect personal information from children under 13. If we learn we have collected information from a child under 13, we will delete it.

## 1. The short version (plain-English summary)

- We collect your **name, username, workout goals and workout entries, timezone, and account identifier** from Google or Apple sign-in. We do **not** store your email address or your Google/Apple password.
- Your **email address is used only at sign-in** to create a unique username (the part before the `@`); the full email is not saved in our database.
- **By default your profile is public** and you appear on the global leaderboard (`is_public` defaults to `true`). Other users can see your name/username, avatar, goals and completion statistics. You can opt out (see APP 6 / Section 7).
- Workout entries are **fitness information**, which the Privacy Act treats as health-adjacent sensitive information. We collect it only to run the App's core function, with your explicit consent at sign-in.
- We use **Amplitude** (product analytics), **PostHog** (error/crash reporting), **Google** and **Apple** (sign-in), and **Expo's push notification service**. Some of these services are hosted overseas (primarily the United States).
- On your device we store your **login session token** and UI preferences in unencrypted app storage (AsyncStorage); your push notification token is stored on our server.
- We do not sell your personal information, and we do not run third-party advertising in the App.
- You can access, correct, or request deletion of your data by emailing [{{email}}](mailto:{{email}}).

## 2. What we collect

### 2.1 Information you provide

| Information | Source | Why |
|---|---|---|
| Account identifier (`google_sub`) | Google / Apple Sign-In | Identify your account |
| First name, last name | Your Google / Apple profile | Display on your profile and leaderboards |
| Username | Derived from your sign-in email (local part, uniquified) | Public handle on leaderboards and packs |
| Email address | Provided at sign-in by Google/Apple | **Used only to derive your username — not stored in our database** |
| Custom goal names and targets (e.g. "Push-ups — 30 reps") | You create these | Core App function (goal bank) |
| Workout entries (reps logged toward goals, with completion date/time) | You log these | Core App function; drives leaderboards, streaks and percentages |
| Custom 2D avatar configuration | You (future feature) | Profile display |
| Pack (friend group) names and membership | You create/join | Group leaderboards and invites |
| Push notification token + device platform | Your device, at notification opt-in | Deliver pack invites and notifications |
| Timezone | Your device | Correct day boundaries for goals and streaks |

### 2.2 Sensitive information (fitness data)

Workout entries, goal targets and derived completion/streak statistics constitute **fitness information**, which can fall within the definition of *health information* (and therefore *sensitive information*) under the *Privacy Act 1988*. We collect this information only:

- **for the direct, disclosed purpose of the App** — tracking your own exercise and comparing consistency with friends — and
- **with your explicit consent**, given when you sign in and begin logging entries. Sign-in and first use are presented with a plain-language explanation of what is logged. You can stop logging and request deletion at any time (Section 8).

We do not collect health data from medical sources, and MVP does not integrate with Apple Health, Google Fit, Strava or Garmin (any future integration will require a separate, opt-in consent flow).

**Note on exemptions:** because we collect fitness/health-adjacent information and may be treated as providing a health-related service, Sixty6 complies with the Australian Privacy Principles in full, irrespective of turnover. The small-business exemption is treated as not applicable.

### 2.3 Information collected automatically

| Information | Source | Why |
|---|---|---|
| Product analytics events (login, entry logged, goal created/edited/deleted, pack events, athlete profile views, pack count) | Amplitude SDK | Improve the product; measure retention |
| Crash and unhandled error reports (with session context) | PostHog Error Tracking | Diagnose and fix crashes |
| Server request logs (method, path, status, duration, correlation IDs) | Our Go API on Google Cloud Run | Security, debugging, abuse prevention |
| Feature-flag evaluation (per user / per device ID) | Server-side flags served to the app | Controlled feature rollout |

We do **not** collect advertising identifiers for ad tracking, and we do not use third-party advertising SDKs.

### 2.4 What we do NOT collect

- Your email address is not persisted in our database (only the derived username is stored).
- Passwords — authentication is entirely via Google / Apple.
- Payment card or bank details (premium purchases, when launched, are handled by the Apple App Store / Google Play / RevenueCat; we never see card data).
- Precise geolocation, camera, photos, contacts, or microphone. The App requests no OS permissions except **push notifications** (and, on iOS, the standard Sign in with Apple capability).

## 3. How we use your information (APP 6 — use and disclosure)

We use personal information only for the purpose collected and related purposes you would reasonably expect:

1. **Provide the App:** authenticate you, store your goals and entries, compute daily completion percentages, streaks, and leaderboards.
2. **Social features:** show your name, username, avatar and statistics on the global leaderboard and, when enabled, within your packs (friend groups). See Section 7 — public visibility.
3. **Notifications:** deliver pack invites and in-app event notifications via Expo's push service, using the push token you register.
4. **Safety and reliability:** crash reporting (PostHog), server logging, security monitoring.
5. **Improvement:** aggregated product analytics (Amplitude).
6. **Legal obligations:** respond to lawful requests; enforce terms.

**We do not sell personal information** and do not disclose it to third parties for their direct marketing. Service providers (Section 4) process data only on our instructions.

**Analytics events** contain identifiers (Amplitude device ID, our user ID) and event properties such as goal names you created and pack IDs — not the full text of your workout history. **Server logs** never include your passwords or tokens (they carry Amplitude correlation IDs for debugging).

## 4. Who we share it with (APP 8 — cross-border disclosure)

We share limited data with the following service providers. Some process data **outside Australia**, primarily in the **United States**. Where we disclose personal information overseas, we take reasonable steps to ensure the recipient handles it consistently with the Australian Privacy Principles (contractual protections with reputable providers).

| Provider | Purpose | Data shared | Location |
|---|---|---|---|
| **Google LLC** (Google Sign-In) | Authentication | OAuth authorization code; we receive your Google subject ID, name, email (used transiently) | International (US) |
| **Apple Inc.** (Sign in with Apple) | Authentication | Same as above via Apple OAuth | International (US) |
| **Google Cloud Platform** (Cloud Run) — API hosting | Backend hosting | All application data (users, goals, entries, packs, device tokens) | Region configured at deployment; Google Cloud regions. Database is Neon-managed Postgres (see below) |
| **Neon Inc.** (Postgres) | Primary database | All application data | International (managed cloud; offshore) |
| **Amplitude Inc.** | Product analytics | Device ID, user ID, product events, user properties (e.g. pack count) | United States |
| **PostHog Inc.** | Crash / error tracking | Crash reports, stack traces, session context; server-side errors | United States (`us.i.posthog.com`) |
| **Expo / expo.io push service** (`exp.host`) | Push notification delivery | Push token, notification title/body, your user ID | United States |
| **EAS (Expo Application Services)** | Build & distribution infrastructure | Source code and build artifacts (developer data, not user data) | International |
| **RevenueCat** *(future, when paid features launch)* | In-app purchase management | App Store/Play account purchase identifiers and receipts | United States |
| **Discord** *(community only)* | Support/community | Whatever you post there; not linked to App data | International |

**No data is sold or shared for cross-context behavioural advertising.** PostHog and Amplitude are used for analytics and error tracking only, not advertising.

**Future health integrations** (Strava, Garmin, Google Fit, Apple Health) are not live. When added, they will require separate, explicit opt-in consent before any data flows to us.

## 5. Where your data lives (infrastructure summary)

- **API:** Go service deployed on **Google Cloud Run** (HTTPS; production URL `sixty6-api-…a.run.app`). Deployment region is chosen at deploy time (deploy tooling is configured for `australia-southeast1`-style regions; confirm the live region before publication and update this section if needed).
- **Database:** **Neon** managed PostgreSQL. Neon regions are offshore (not Australia). All user records (accounts without email, goals, entries, packs, invites, device tokens, notification events) live here.
- **Backups:** Neon-managed backups; occasional manual exports.
- **Logs:** Cloud Run structured JSON logs; error snapshots forwarded to PostHog.

## 6. Storage on your device (local storage & permissions)

Sixty6 runs on your iPhone, iPad, or Android device. On your device we store:

| Item | Mechanism | Notes |
|---|---|---|
| Session token (JWT) | AsyncStorage (unencrypted app sandbox) | Grants you access to the API until you log out; anyone with a compromised/jailbroken device could read it |
| Selected pack preference | AsyncStorage | UI convenience only |
| Push notification token | OS-managed; registered with our server | Standard Expo notifications flow |
| Amplitude / PostHog SDK state | SDK-managed caches | Analytics identifiers |

**OS permissions requested:** push notifications (alerts, badges, sound). The App does **not** request camera, microphone, photos, contacts, background location, or health-records permissions in the current release.

We do not currently encrypt the session token with the OS keychain/keystore; this is a recognised hardening item. The token is only valid against our HTTPS API and can be revoked by logging out (server-side session invalidation roadmap).

## 7. Public profiles and leaderboards (APP 6, APP 10 — disclosure)

**By default, every new account is public** (`is_public = true`): you appear on the **global leaderboard**. Other users of the App can see:

- your first name / last name and username,
- your avatar,
- your goal bank (goal names and targets you created),
- your completion percentage and streak statistics for the selected period.

**You can opt out of public visibility.** Turning off public visibility removes you from the global leaderboard and stops other users seeing your profile statistics. (Packs: within a pack, members can see each other's statistics by design — that is the point of a pack leaderboard.)

Workout entries themselves are not exposed individually to other users; others see derived statistics (percentages, streaks, goal completion), not a log of each session. Tapping a day on a calendar (future feature) shows goal progress for that day on your own profile view.

## 8. Data quality, access, correction and deletion (APP 12, APP 13)

You have the right to:

- **Access** the personal information we hold about you. Request an export at [{{email}}](mailto:{{email}}) and we will provide a machine-readable copy of your account, goals, entries, packs and related records.
- **Correct** your name, username, avatar, and goal data any time in the App. For anything we cannot correct in-App, email us.
- **Delete your account and data.** Email [{{email}}](mailto:{{email}}) with the subject "Delete my Sixty6 account" from the address associated with your account (or state your username). We will delete your user record, goals, entries, packs membership history, device tokens and notification events, subject only to limited retention required for legal disputes, security logs (rotated on a short cycle), and financial records if you ever held a paid subscription (kept as required by tax/consumer law).
- **Withdraw consent** for notifications (via OS settings) or for public leaderboard visibility (in-App setting), without losing access to core features.

We will acknowledge requests within **30 days** and aim to complete them within that period.

## 9. Security (APP 11)

- All API traffic is HTTPS/TLS.
- Passwords never touch our systems (OAuth only).
- SQL is fully parameterised (sqlc-generated queries); input validation on usernames, names, targets and avatar payloads.
- Secrets are never committed (CI secret scanning via TruffleHog on full repo history); Go vulnerabilities checked with govulncheck; CI gates on lint/typecheck/vet.
- Session tokens are HS256/RS256-signed JWTs with expiry.
- Push tokens are stored server-side, not used for tracking.
- Access to production infrastructure (Cloud Run, Neon) is limited to the operator via authenticated cloud IAM.
- **No system is perfectly secure.** If we become aware of a breach involving your personal information, we will notify you and the OAIC as required by the *Privacy Act 1988* (Notifiable Data Breaches scheme).

## 10. Payments (future)

When premium features launch, purchases are processed by **Apple App Store / Google Play** (and managed via **RevenueCat**). We receive purchase status and product identifiers — never your card number or bank details. Subscription refunds are governed by the relevant store's policies.

## 11. Overseas recipients — summary statement (APP 8)

You consent to the overseas disclosure of your personal information to the service providers listed in Section 4 (chiefly in the United States: Google, Apple, Amplitude, PostHog, Expo push, Neon-hosted database). **We are accountable under the Privacy Act for that information even after disclosure.** If you do not consent to overseas disclosure, you may email us; however, this may mean the App cannot function (its core infrastructure relies on these providers), and your remedy would be not to use the App.

## 12. Complaints

If you believe we have breached the Australian Privacy Principles, contact us at **[{{email}}](mailto:{{email}})** with details. We will acknowledge within **7 days** and respond within **30 days**. If you are not satisfied, you may complain to the **Office of the Australian Information Commissioner (OAIC)**:

- Website: https://www.oaic.gov.au
- Phone: 1300 363 992

## 13. Changes to this policy

We will post any changes here and update the effective date. Material changes (e.g. new data uses or new overseas providers) will be highlighted in-App or via the App Store/Play update notes. Continued use after changes constitutes acceptance of the updated policy where permitted by law.

## 14. Third-party links and services

The App links to our Discord community and store pages. Those services have their own privacy policies; we are not responsible for them. Google and Apple sign-in are governed by their respective privacy policies.

## Appendix — APP compliance map

| APP | How Sixty6 complies |
|---|---|
| **APP 1 — Open management** | This policy; staff/operator = sole trader; review annually or on material change. |
| **APP 2 — Anonymity** | Limited: leaderboards require a display name/username. Core logging works with a pseudonymous username; email is never displayed. |
| **APP 3 — Collection of solicited personal information** | Collection limited to what is necessary for the App; fitness data collected with explicit consent as sensitive information. |
| **APP 4 — Unsolicited personal information** | Any unsolicited data received (e.g. support emails beyond what we need) is not used or disclosed and is destroyed/de-identified where lawful. |
| **APP 5 — Notification of collection** | This policy + in-App onboarding notices; sign-in screen states what is collected (name, workout data, analytics). |
| **APP 6 — Use & disclosure** | Section 3; only for the stated primary purpose and permitted related purposes; no sale; no cross-context ads. |
| **APP 7 — Direct marketing** | Not conducted. We may send transactional in-App notifications (pack invites); any future marketing email will require opt-out. |
| **APP 8 — Cross-border disclosure** | Sections 4/11; contractual protections with providers; recipients and countries named. |
| **APP 9 — Adoption/use/disclosure of government-related IDs** | None collected. |
| **APP 10 — Quality** | Users edit profile/goal data in-App; deduplicated usernames; corrections via support. |
| **APP 11 — Security** | Section 9; TLS, parameterised SQL, secret scanning, signed JWTs, access-limited infrastructure. |
| **APP 12 — Access** | Section 8; export on request within 30 days. |
| **APP 13 — Correction** | Section 8; in-App editing + support channel; serious errors annotated. |
