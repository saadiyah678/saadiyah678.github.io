This repository hosts the personal portfolio site for Saadiyah Liakhat Ali.

Files added/updated in this change:
- assets/images/saadiyah.jpg — profile photo (uploaded per request)
- index.html — updated to use the new photo, added social links (LinkedIn, Google Scholar, ORCID, ResearchGate, Bluesky), and replaced public email with a contact form.
- assets/js/contact.js — client-side form handler that submits to Formspree (placeholder form ID).

Important next steps for you:
1. Verify the profile photo: I uploaded the image as assets/images/saadiyah.jpg. If you'd like a different filename or a different crop/size, tell me and I will update it.
2. Formspree setup: The contact form currently posts to "https://formspree.io/f/your-form-id". To receive form submissions:
   - Sign up at https://formspree.io and create a form. Replace the "your-form-id" in the form action in index.html with the ID Formspree provides (it looks like `f/mnqlkxyz`).
   - Alternatively, if you prefer using Netlify Forms or a different provider, tell me and I can switch the form implementation.
3. Enable GitHub Pages: Go to your repository Settings → Pages, set Source to Branch: main and folder: / (root). Save. The site will publish at https://saadiyah678.github.io when done.

If you want, I can also:
- Parse all entries from assets/data/publications.bib and generate a dedicated publications page.
- Add CSV/JSON exports of your publications or add citation download links (BibTeX).
- Add analytics, sitemap, or accessibility improvements.

Tell me what you want next and I will implement it and push the change.
