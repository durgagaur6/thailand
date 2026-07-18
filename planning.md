# Website Customization Map

This file records where the website's names, photos, quotes, proposal copy, invitation details, and dynamic messages are currently stored.

- Repository root: `/projects/sandbox/thailand`
- This document: `/projects/sandbox/thailand/planning.md`
- Main absolute source paths:
  - `/projects/sandbox/thailand/index.html`
  - `/projects/sandbox/thailand/script.js`
  - `/projects/sandbox/thailand/styles.css`
  - `/projects/sandbox/thailand/assets/portrait-placeholder.svg`
  - `/projects/sandbox/thailand/assets/journey.svg`
- All shorter paths below are relative to `/projects/sandbox/thailand/`.
- Line numbers verified against commit: `18e1208`
- Main source files: `index.html`, `script.js`, `styles.css`, and `assets/`
- Do **not** edit `dist/` directly. It is generated again during every build.
- Line numbers can move after future edits. If that happens, search for the current text shown in the tables below.

## 1. Recipient name: Jenny

When changing the recipient's name, review every location in this table so the browser title, visible page, sharing text, image accessibility text, and saved browser state remain consistent.

| File and line | Current value | Purpose / what to change |
|---|---|---|
| `index.html:7` | `remarkable Jenny` | Browser/search description |
| `index.html:8` | `A Letter for the Remarkable Jenny` | Social sharing/Open Graph title |
| `index.html:10` | `A Letter for the Remarkable Jenny` | Browser tab title |
| `index.html:52` | `The Remarkable Jenny` | Name visible inside the envelope |
| `index.html:65` | `For the Remarkable Jenny` | Hero footer name |
| `index.html:80` | `Jenny's photograph` | Portrait image alt text |
| `index.html:89` | `Dear Jenny,` | Letter salutation |
| `index.html:113` | `So, Jenny, will you be my girlfriend?` | Name in the final proposal question |
| `index.html:175` | `Jenny?` | Name in the RSVP heading |
| `index.html:193` | `For Jenny` | Name in the page footer |
| `script.js:40` | `jenny-letter-opened` | Browser local-storage key for the opened letter |
| `script.js:131` | `A Letter for the Remarkable Jenny` | Native share-dialog title |
| `script.js:186` | `jenny-rsvp` | Saves an RSVP selection |
| `script.js:191` | `jenny-rsvp` | Restores the saved RSVP selection |
| `assets/portrait-placeholder.svg:1` | `Photo placeholder for Jenny` and `Jenny's photograph` | Placeholder image title/description |
| `package.json:2` | `a-letter-for-jenny` | Internal project/package name; not visible on the page |

### Important name-change note

`The Remarkable Jenny` is intentionally used in the hero and metadata, while plain `Jenny` is used in the personal letter, proposal, RSVP, and footer. If the recipient changes, update both forms. Changing the local-storage keys in `script.js:40`, `script.js:186`, and `script.js:191` means the browser will treat the new recipient as a fresh session, which is usually desirable.

## 2. Portrait / personal photo

There is currently **no real personal photograph** in the repository. The website is still using a designed placeholder.

| File and line | Current value | Purpose / what to change |
|---|---|---|
| `index.html:80` | `src="assets/portrait-placeholder.svg"` | Main portrait file path; replace this path with the real image path |
| `index.html:80` | `alt="A warm placeholder for Jenny's photograph"` | Accessible image description; update it when adding a real photo |
| `index.html:82` | `One beautiful soul` | Caption below the portrait |
| `assets/portrait-placeholder.svg:1` | Placeholder artwork and `YOUR PHOTO HERE` | Current placeholder image asset |

Recommended future replacement:

1. Add the real image as, for example, `assets/jenny-photo.jpg`.
2. Change `index.html:80` to use `src="assets/jenny-photo.jpg"`.
3. Change the alt text on the same line to a short, respectful description of the real photo.
4. The frame works best with a portrait-oriented image. Direct portrait/frame/caption/tape styling is at `styles.css:107-111`; responsive portrait width is at `styles.css:191`.

## 3. Journey background image

| File and line | Current value | Purpose / what to change |
|---|---|---|
| `styles.css:125` | `background:url("assets/journey.svg")` | Actual Journey section background image path |
| `index.html:104` | `A couple sharing a quiet sunset beside a lake` | Accessible description of the Journey image |
| `assets/journey.svg:1` | SVG title `A meaningful journey`, description `A couple sharing a quiet sunset beside a lake.`, and sunset-couple artwork | Current Journey background asset; update its title/description if editing the SVG itself |
| `styles.css:123-126` | Journey size, position, scale, and desktop dark overlay | Adjust these styles if a replacement photo looks too dark, bright, or cropped |
| `styles.css:194` | Mobile Journey dark overlay | Adjust separately if the replacement image looks wrong on smaller screens |

To use a real Journey photo, add it under `assets/`, update the URL at `styles.css:125`, and synchronize the accessible description at `index.html:104`.

## 4. Browser metadata and social sharing text

| File and line | Current value | Purpose / what to change |
|---|---|---|
| `index.html:7` | `A sincere letter and a thoughtful coffee invitation for the remarkable Jenny.` | Search/browser page description |
| `index.html:8` | `A Letter for the Remarkable Jenny` | Social preview title |
| `index.html:9` | `A message from the heart, sealed in wax.` | Social preview description |
| `index.html:10` | `A Letter for the Remarkable Jenny` | Browser tab title |
| `script.js:131` | `A Letter for the Remarkable Jenny` | Share-dialog title |
| `script.js:132` | `A message from the heart, sealed in wax.` | Share-dialog message |

Keep `index.html:8-10` and `script.js:131-132` synchronized whenever the title or share message changes.

## 5. Opening hero and envelope

| File and line | Current text | Purpose / what to change |
|---|---|---|
| `index.html:40` | `A letter most sincere` | Small hero label |
| `index.html:41` | `Some words are meant to be felt.` | Main opening heading |
| `index.html:42` | `A message from the heart, sealed in wax` | Hero tagline |
| `index.html:51` | `Especially for` | Envelope label above the recipient name |
| `index.html:52` | `The Remarkable Jenny` | Envelope recipient name |
| `index.html:60` | `A` | Wax-seal initial; update this if it should represent the sender's initial |
| `index.html:61` | `Tap to open` | Initial envelope button label |
| `index.html:65` | `For the Remarkable Jenny` | Left side of hero footer |
| `index.html:67` | `A letter penned with intention` | Right side of hero footer |
| `script.js:38` | `Letter opened` | Button label shown after opening the envelope |

## 6. Main letter copy

The English letter rewrite is in `index.html:87-95`.

| File and line | Current text / block | Purpose / what to change |
|---|---|---|
| `index.html:87` | `With admiration` | Small letter label |
| `index.html:88` | `The beginning of something meaningful…` | Letter heading |
| `index.html:89` | `Dear Jenny,` | Salutation |
| `index.html:90` | `Some meetings are more than just a date...` | First letter paragraph |
| `index.html:91` | `I am not coming with a perfect speech...` | Second letter paragraph |
| `index.html:92` | `Maybe it will be just a cup of coffee...` | Third letter paragraph |
| `index.html:94` | `With respect & warm intentions,` | Sign-off introduction |
| `index.html:95` | `Someone who planned this with care` | Sender/signature text |

If a real sender name should be displayed, replace the text at `index.html:95`.

## 7. Journey proposal and quote

The romantic proposal added after the second meeting is in `index.html:107-115`.

| File and line | Current text / block | Purpose / what to change |
|---|---|---|
| `index.html:107` | `02 · A Thought` | Journey section number and label |
| `index.html:108` | `The journey` | Journey eyebrow text |
| `index.html:109` | `The best stories begin with a little courage.` | Journey heading |
| `index.html:111` | `When I met you for the second time...` | Second-meeting happiness paragraph |
| `index.html:112` | `I want to invite you into my life...` | Partner invitation paragraph |
| `index.html:113` | `I am completely serious about you...` | Serious-intentions paragraph and girlfriend question |
| `index.html:115` | `A beautiful destination matters less than the person you choose to walk beside.` | Journey closing quote |

These three proposal paragraphs were introduced in commit `b3e2dc0`.

## 8. Invitation details

| File and line | Current value | Purpose / what to change |
|---|---|---|
| `index.html:126` | `You are cordially invited to` | Invitation label |
| `index.html:127` | `An Invitation to Remember` | Invitation heading |
| `index.html:128` | `For a quiet evening, a warm cup...` | Invitation introduction |
| `index.html:135` | `Venue` | Venue detail label |
| `index.html:136` | `Tapri Central` | Venue name |
| `index.html:137` | `Where chai meets the city sky` | Venue description |
| `index.html:143` | `When` | Date/time detail label |
| `index.html:144` | `datetime="2026-05-28T16:00"` | Machine-readable date and time |
| `index.html:144` | `28 May 2026` | Visible date |
| `index.html:145` | `Thursday · 4:00 PM` | Visible day and time |
| `index.html:151` | `The plan` | Plan detail label |
| `index.html:152` | `Coffee & Conversation` | Plan title |
| `index.html:153` | `Peaceful, genuine, unhurried` | Plan description |
| `index.html:159` | `Because the finest things in life deserve to be savoured slowly.` | Invitation quote |
| `index.html:162` | `— A man with a plan. 🌸` | Invitation signature |

### Important date-change note

Whenever the meeting changes, update all three values together:

- Machine-readable value at `index.html:144`
- Visible date at `index.html:144`
- Visible weekday and time at `index.html:145`

The weekday must match the chosen calendar date.

## 9. RSVP question, buttons, and responses

### Visible RSVP section in HTML

| File and line | Current text | Purpose / what to change |
|---|---|---|
| `index.html:174` | `One little question remains` | RSVP label |
| `index.html:175` | `So, what say you, Jenny?` | RSVP heading and recipient name |
| `index.html:176` | `No dramatic countdown, no fine print...` | RSVP instructions |
| `index.html:179` | `I love this plan. I’m in.` | Positive-response button |
| `index.html:182` | `Let me check my duty roster` | Maybe-response button |
| `index.html:188` | `Whatever your answer, thank you for reading this far.` | Closing note |
| `index.html:193` | `Made with intention · For Jenny · 2026` | Footer copy and fallback year |

### Dynamic responses in JavaScript

| File and line | Current text / behavior | Purpose / what to change |
|---|---|---|
| `script.js:174` | `Then it’s a date. The coffee already tastes better. ♡` | Message after selecting Yes |
| `script.js:177` | `Fair enough—the plan will wait patiently, with no audit objections.` | Message after selecting Maybe |
| `script.js:186` | Saves the selection under `jenny-rsvp` | Browser storage write |
| `script.js:191-192` | Reads and restores `jenny-rsvp` | Browser storage read |
| `script.js:195` | `new Date().getFullYear()` | Replaces the HTML fallback year with the current year |

Because of `script.js:195`, the final footer year changes automatically at runtime. The literal `2026` in `index.html:193` is only a fallback.

## 10. Other interface and accessibility text

These are not central proposal copy, but they are editable user-facing or screen-reader messages.

### HTML labels and section markers

| File and line | Current text / purpose |
|---|---|
| `index.html:17` | `Skip to the letter` accessibility link |
| `index.html:20` | `Page controls` accessibility label |
| `index.html:21` | `Play gentle background music` initial music-button label |
| `index.html:25` | `Share this letter` share-button label |
| `index.html:72` | `01 · The Letter` section marker |
| `index.html:100` | `Keep reading` scroll prompt |
| `index.html:107` | `02 · A Thought` section marker |
| `index.html:119` | `03 · The Invitation` section marker |
| `index.html:135` | `Venue` invitation detail label |
| `index.html:143` | `When` invitation detail label |
| `index.html:151` | `The plan` invitation detail label |
| `index.html:177` | `RSVP choices` accessibility label |

### JavaScript messages

| File and line | Current text / behavior |
|---|---|
| `script.js:99` | `Audio is not supported on this device` |
| `script.js:107` | `Pause gentle background music` active music-button label |
| `script.js:108` | `Gentle ambience is playing` |
| `script.js:120` | `Play gentle background music` inactive music-button label |
| `script.js:121` | `Music paused` |
| `script.js:139` | `Letter shared with care` |
| `script.js:142` | `Link copied — ready to share` |
| `script.js:144` | `Copy the page link to share it` |
| `script.js:147` | `Sharing was not available` |

## 11. Build and deployment locations

| File and line | Purpose |
|---|---|
| `package.json:5-7` | Defines `npm run build` |
| `scripts/build.mjs:8-15` | Recreates `dist/` and copies HTML, CSS, JavaScript, and assets |
| `.github/workflows/deploy-pages.yml:3-9` | Triggers deployment when `main` is pushed |
| `.github/workflows/deploy-pages.yml:33-45` | Builds the site, configures Pages, uploads `dist/`, and deploys to GitHub Pages |

After future changes:

1. Edit only the source files listed above.
2. Run `npm run build` from `/projects/sandbox/thailand`.
3. Confirm the updated text/image exists in `dist/`.
4. Commit the source changes.
5. Push/deploy to GitHub Pages.
6. If the browser shows old content, use a hard refresh or append a cache-busting query such as `?v=<commit>`.

## 12. Change history completed so far

| Commit | Change |
|---|---|
| `b8b5e45` | Renamed the recipient site-wide from Divya/CA. Divya to Jenny, including metadata, accessibility text, package name, share title, and storage keys |
| `8ce3e3f` | Added `the Remarkable` to recipient-facing metadata, hero, and share text, then rewrote the main letter heading and body in English |
| `b3e2dc0` | Replaced the generic Journey copy with the second-meeting romantic proposal |
| `18e1208` | Empty commit titled `Trigger Pages redeployment`; it contains no file changes |

## Quick future-edit checklist

Before publishing any new customization, verify:

- [ ] Recipient name is updated in every location from Section 1.
- [ ] Portrait path and alt text are synchronized.
- [ ] Journey image path and accessible description are synchronized.
- [ ] Browser/social title matches the visible recipient.
- [ ] Letter salutation and final proposal question use the correct name.
- [ ] Date, weekday, time, and machine-readable `datetime` agree.
- [ ] Share title/message match the page metadata.
- [ ] RSVP buttons and JavaScript response messages still fit the invitation.
- [ ] `npm run build` succeeds.
- [ ] The deployed page is checked with a cache-busting URL after publishing.
