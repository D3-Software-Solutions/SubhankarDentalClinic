# Dentique Specialist Dental Clinic Website

A modern, professional, SEO-optimized website for Dentique Specialist Dental Clinic, Agartala, led by Dr. Subhankar Paul (BDS, MDS Maxillofacial Surgeon).

---

## 🚀 Features
- Medical-grade, beautiful UI
- Fully responsive (mobile, tablet, desktop)
- SEO meta tags, schema markup, and local SEO
- Blog functionality with admin/editor UI
- Appointment booking form
- Fast, accessible, and performance-optimized
- Awards, testimonials, FAQ, and service detail pages

---

## 🛠️ Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

### 3. Build for production
```bash
npm run build
npm start
```

---

## 📂 Project Structure & Customization

- `/pages` — Main pages (Home, About, Services, Blog, Contact, Admin)
- `/components` — Reusable UI components (Header, Footer, ContactForm, etc.)
- `/public/images/` — **Place all images here** (clinic photos, doctor, awards, etc.)
- `/utils` — Database and helper scripts
- `/scripts` — Seed and utility scripts
- `/admin_creds.txt` — **Admin credentials for blog editor UI**
- `/dentique.sqlite` — SQLite database for blogs

---

## ✍️ Content Management

### Blog Posts
- **Add/Edit/Delete**: Go to `/admin` (login with credentials in `admin_creds.txt`)
- **API**: Use `/api/blogs` for programmatic CRUD
- **Seed**: To reset/seed sample blogs, run:
  ```bash
  node scripts/seedBlogs.js
  ```

### Images
- **Place all images in** `/public/images/`
- Reference them in components/pages as `/images/your-image.jpg`

### Awards, Testimonials, FAQ, Services
- **Edit content in** `/components/` (e.g., `Awards.tsx`, `Testimonials.tsx`, `FAQ.tsx`, `Services.tsx`)
- For new services, create a new page in `/pages/services/` and add a link in the Services section/component

### Contact Info & Google Maps
- **Edit in** `components/ContactForm.tsx` and `components/Footer.tsx`
- **Google Maps**: Update the embed code in the Contact section/component

### Admin Credentials
- **Edit in** `admin_creds.txt` (format: `username: ...`, `password: ...`)

### SEO Meta Tags & Schema
- **Edit in** `components/SEO.tsx` (site-wide defaults)
- **For blog posts**: SEO fields are editable in the admin UI

---

## 📝 Pending Items (Checklist)
- [ ] Add real clinic/doctor images to `/public/images/`
- [ ] Update contact details and address in `ContactForm.tsx` and `Footer.tsx`
- [ ] Add/replace awards and credentials in `Awards.tsx` (or About section)
- [ ] Add/replace testimonials in `Testimonials.tsx`
- [ ] Add/expand FAQ in `FAQ.tsx` or relevant section
- [ ] Add/expand service detail pages in `/pages/services/`
- [ ] Set up backend for appointment form submissions (currently frontend only)
- [ ] Add Google Analytics tracking code in `_app.tsx` or via plugin
- [ ] Update Google Maps embed in Contact section
- [ ] Review and update SEO meta tags and schema as needed

---

## 🧑‍💻 Developer Notes
- All content is componentized for easy editing.
- Blog admin/editor UI is at `/admin` (protected by credentials in `admin_creds.txt`).
- API routes for blogs are in `/pages/api/blogs.ts`.
- Database is SQLite, file: `dentique.sqlite` (can be reset with seed script).
- For any new static assets, use `/public/images/`.

---

## ✅ Post-Launch Checklist
- [ ] Add real content and images
- [ ] Test all forms and blog CRUD
- [ ] Run Lighthouse accessibility and SEO audit
- [ ] Check mobile and desktop responsiveness
- [ ] Submit sitemap.xml to Google Search Console
- [ ] Add robots.txt
- [ ] Monitor site performance and analytics

---

For any issues or customization help, contact the developer or refer to this README. 