   # DLUX Auto - Setup Guide for Developer Team

Welcome! Follow these steps to get the website running and deployed.

---

## What You Have

📦 **After Cloning The Repo** - Complete React website project

**Tech Stack:**

- React 19 + Vite (fast build)
- Tailwind CSS (styling)
- Framer Motion (animations)
- React Router (navigation)
- Deployed on: Vercel

---

## Step 1: Local Setup (30 minutes)

### 1.1 Extract & Install

```bash
unzip dlux-auto.zip
cd dlux-auto
npm install
```

### 1.2 Start Development Server

```bash
npm run dev
```

**You should see:**

```
VITE v7.2.4  ready in 234 ms
➜  Local:   http://localhost:5173/
```

### 1.3 Test Locally

- Open http://localhost:5173 in browser
- All pages load ✓
- Mobile responsive ✓
- No errors (check F12 → Console) ✓

**Press Ctrl+C to stop dev server**

---

## Step 2: Deploy to Vercel (1-2 hours)

### 2.1 Create Vercel Account

1. Go to https://vercel.com
2. Sign up (GitHub, GitLab, or Email)
3. Complete signup

### 2.2 Deploy Project

**Option A: From GitHub (Recommended)**

1. Push to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/dlux-auto
   git push -u origin main
   ```
2. Vercel Dashboard → New Project → Select GitHub repo
3. Click Deploy
4. Wait 2-5 minutes

**Option B: Direct Upload**

1. Vercel Dashboard → New Project
2. Upload ZIP or connect Git
3. Click Deploy

### 2.3 Website is Live!

- **Vercel URL:** https://dlux-auto-[random].vercel.app
- Test it works
- Share with others

---

## Step 3: Add Custom Domain (When Notified)

When the original developer tells you domains are transferring:

1. Vercel Dashboard → Settings → Domains
2. Click "Add"
3. Enter domain (e.g., dluxauto.com)
4. You'll see DNS records

**Share these DNS values with the original developer:**

- A Record value
- CNAME value

Then wait for them to update DNS. After 24-48 hours, domain will point to your Vercel.

---

## Making Changes

### Edit Content

Content files: `src/data/[section]/content.js`

- `src/data/home/content.js` - Homepage
- `src/data/services/content.js` - Services
- Other sections in data folder

### Add Pages

1. Create: `src/Pages/YourPage.jsx`
2. Import in: `src/App.jsx`
3. Add route (follow existing pattern)

### Push Changes

```bash
git add .
git commit -m "Description of changes"
git push
```

**Vercel auto-deploys automatically!**

---

## Useful Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Check code quality
```

---

## Project Structure

```
src/
├── Pages/              # Website pages
├── components/         # React components
├── data/              # Content files (edit this!)
├── assets/            # Images & videos
└── App.jsx            # Main component

public/               # Static files
```

---

## Troubleshooting

| Problem             | Solution                                           |
| ------------------- | -------------------------------------------------- |
| `npm install` fails | Clear cache: `npm cache clean --force` then retry  |
| Port 5173 in use    | `npm run dev -- --port 3000`                       |
| Build fails         | Run locally: `npm run build` to see errors         |
| Vercel build fails  | Check: Node v16+, all dependencies in package.json |
| Images not loading  | Check paths, ensure files in `public/` or imported |
| Styling broken      | Clear cache (Ctrl+Shift+Delete), rebuild           |

---

## SSL Certificate (HTTPS)

- ✅ Vercel auto-generates SSL
- ✅ Auto-renews yearly
- ✅ No action needed

**Verify:** 🔒 icon in browser address bar

---

## Environment Variables (If Needed Later)

1. Create `.env.local` in root:

   ```
   VITE_EXAMPLE=value
   ```

2. Use in code:

   ```javascript
   const value = import.meta.env.VITE_EXAMPLE;
   ```

3. Never commit `.env.local` (add to `.gitignore`)

---

## Documentation

- **Vite:** https://vitejs.dev
- **React:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com
- **Vercel:** https://vercel.com/docs

---

## What's Next

✅ Extract & install  
✅ Run locally  
✅ Deploy to Vercel  
✅ Get Vercel URL  
✅ Wait for domain transfer from original developer  
✅ Test on custom domain  
✅ Start maintaining website

---

## Questions?

1. Check Troubleshooting section above
2. Check documentation links
3. Contact Vercel support
4. Contact original developer if needed

---

**You're all set! Website is now in your hands. 🚀**

For domain transfer details or support, contact the original developer.
