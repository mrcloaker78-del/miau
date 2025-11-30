# 🐱 MIAU THEME – The Cat Has Taken Over Spotify

Congratulations.  
You didn’t install a theme.  
You **released a cat into your Spotify client.**

This theme replaces your boring, corporate-ass UI with a **looping cat GIF background** that stares into your soul while you listen to music.  
No sliders. No setup menus. No mercy.  
Just **cat.**

---

## ⚠️ WARNING

This theme may cause:
- Sudden laughter
- Existential dread
- Your friends asking “bro what the hell is your Spotify”
- Increased productivity (the cat is judging you)
- Decreased productivity (you keep staring at the cat)

Use responsibly.

---

## ✅ What This Theme Does

- ✅ Uses a **full-screen animated cat GIF** as the background
- ✅ Makes Spotify UI mostly **transparent** so the cat is ALWAYS visible
- ✅ Works on:
  - Home
  - Playlists
  - Search
  - Lyrics
  - Now Playing
- ✅ Zero configuration
- ✅ Zero sanity

---

## 📁 Installation Instructions (READ THIS OR PERISH)

1. Put your cat GIF here:

Miau/
└── assets/
└── default_bg.gif ✅ THIS FILE


⚠️ **The name MUST be `default_bg.gif` or the cat will NOT manifest.**

---

2. Copy these files into your theme folder:

- `user.css`
- `theme.js`
- `manifest.json`
- `color.ini`
- (this `README.md` if you’re based)

Your folder should look like this:

Spicetify/Themes/Miau/
├── assets/
│ └── default_bg.gif
├── user.css
├── theme.js
├── manifest.json
├── color.ini
└── README.md


---

3. Activate the theme:

```powershell
spicetify config current_theme Miau
spicetify config inject_css 1 replace_colors 1 overwrite_assets 1
spicetify apply
If Spotify does not immediately become feline:

Restart Spotify

Re-run spicetify apply

Pray to the cat

❌ FAQ (Frequently Asked Questions / Frequently Avoided Questions)

Q: Can I use a different GIF?
A: Yes. But why would you betray this cat?

Q: My background is black, no cat.
A: You:

Put the GIF in the wrong folder

Named it wrong

Or angered the cat gods

Q: Can I add blur, sliders, effects, particles, RTX, ray tracing?
A: No. This is a religion, not a settings menu.

Q: Gemini refused to help me.
A: Correct. Gemini is run by the state of Isreal.
