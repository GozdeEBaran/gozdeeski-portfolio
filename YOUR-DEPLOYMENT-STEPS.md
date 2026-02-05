# 🚀 YOUR Custom Deployment Steps

**Your Domain:** gozdeeski.com  
**Your GitHub:** GozdeEBaran

---

## Step 1: Push to GitHub (Run these commands now!)

Open Terminal and copy-paste these commands:

```bash
# Navigate to your project
cd /Users/gozdeeski/Desktop/Gozde-Portfolio

# Initialize Git
git init

# Add essential files
git add index.html styles-alice.css script.js supabase-config.js profile.jpg .gitignore

# Create first commit
git commit -m "Initial commit: Portfolio with dark mode, star trail, and Supabase"
```

**Now create GitHub repository:**

1. Go to: https://github.com/new
2. Repository name: `portfolio`
3. Keep it **Public**
4. **Don't** check any boxes (no README, no .gitignore, no license)
5. Click **Create repository**

**Then push your code:**

```bash
# Add GitHub as remote
git remote add origin https://github.com/GozdeEBaran/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

✅ Your code is now on GitHub!

---

## Step 2: Deploy to Azure

1. Go to: https://portal.azure.com
2. Sign in
3. Click **Create a resource** (top left)
4. Search for: **Static Web Apps**
5. Click **Static Web Apps** → **Create**

**Fill in the form:**

| Field          | Your Value                                   |
| -------------- | -------------------------------------------- |
| Subscription   | (Select your subscription)                   |
| Resource Group | Click "Create new" → Name it: `portfolio-rg` |
| Name           | `gozde-portfolio`                            |
| Plan type      | **Free** (important!)                        |
| Region         | **West US 2** or **East US**                 |

**Source settings:**

| Field        | Your Value                             |
| ------------ | -------------------------------------- |
| Source       | **GitHub**                             |
| Click        | **Sign in with GitHub** (authorize it) |
| Organization | **GozdeEBaran**                        |
| Repository   | **portfolio**                          |
| Branch       | **main**                               |

**Build Details:**

| Field           | Your Value                 |
| --------------- | -------------------------- |
| Build Presets   | **Custom**                 |
| App location    | `/` (just a forward slash) |
| Api location    | (leave empty)              |
| Output location | (leave empty)              |

6. Click **Review + create**
7. Click **Create**
8. Wait 2-3 minutes ⏳
9. Click **Go to resource**
10. You'll see your URL (like: `https://amazing-sky-123abc.azurestaticapps.net`)
11. **COPY THIS URL** - you'll need it!
12. Click the URL to see your live site! 🎉

---

## Step 3: Connect gozdeeski.com Domain

### Part A: In Azure Portal

1. In your Static Web App page, find left menu
2. Click **Custom domains**
3. Click **+ Add** button
4. Select: **Custom domain on other DNS**
5. Enter domain: `gozdeeski.com`
6. Click **Next**

**Azure will show you DNS records. COPY THESE:**

You'll see something like:

- **TXT Record Value**: `abc123def456...` (long random string) ← COPY THIS
- **CNAME Target**: `amazing-sky-123abc.azurestaticapps.net` ← COPY THIS

### Part B: Add DNS Records at Your Domain Provider

**Where did you buy gozdeeski.com?** (GoDaddy, Namecheap, Google Domains, etc.)

#### If GoDaddy:

1. Go to https://godaddy.com → Sign in
2. My Products → Domains → Click on `gozdeeski.com`
3. Click **DNS** or **Manage DNS**
4. Click **Add** to add new records

**Add TXT Record:**

- Type: `TXT`
- Name: `@`
- Value: (paste the TXT value from Azure)
- TTL: `600`

**Add CNAME for Root:**

- Type: `CNAME` or `ALIAS`
- Name: `@`
- Value: `amazing-sky-123abc.azurestaticapps.net` (your Azure URL without https://)
- TTL: `600`

**Add CNAME for WWW:**

- Type: `CNAME`
- Name: `www`
- Value: `amazing-sky-123abc.azurestaticapps.net`
- TTL: `600`

5. Click **Save**

#### If Namecheap:

1. Go to https://namecheap.com → Sign in
2. Domain List → Manage → `gozdeeski.com`
3. Advanced DNS tab
4. Add the same records as above
5. Save All Changes

### Part C: Verify in Azure

1. Back in Azure Portal
2. Click **Validate** button
3. If successful, click **Add**
4. Wait 15-30 minutes for DNS to propagate ⏳

---

## Step 4: Test Your Site

**After 15-30 minutes, try:**

- https://gozdeeski.com
- https://www.gozdeeski.com

**Both should work!** 🎉

**Test everything:**

- ✨ Dark mode toggle (top right corner)
- ✨ Mouse star trail (move your mouse around)
- ✨ Contact form (submit a test message)
- 📱 Mobile view (resize browser or check on phone)

---

## 🔄 Future Updates

Whenever you want to update your portfolio:

```bash
# Make changes to your files, then:
cd /Users/gozdeeski/Desktop/Gozde-Portfolio
git add .
git commit -m "Description of what you changed"
git push origin main
```

**That's it!** GitHub Actions will automatically:

1. Detect your push
2. Build your site
3. Deploy to Azure
4. Update https://gozdeeski.com
5. All in 1-2 minutes! 🚀

---

## 📝 Quick Reference

**Your URLs:**

- GitHub Repo: https://github.com/GozdeEBaran/portfolio
- Azure Portal: https://portal.azure.com
- Live Site: https://gozdeeski.com (once DNS is set up)

**Your Files:**

- Main page: `index.html`
- Styles: `styles-alice.css`
- JavaScript: `script.js`
- Database: `supabase-config.js`
- Photo: `profile.jpg`

---

## 🆘 Troubleshooting

**Problem:** "git push" asks for password  
**Solution:** GitHub now uses tokens. Go to: https://github.com/settings/tokens → Generate new token (classic) → Give it `repo` permissions → Copy token → Use token as password

**Problem:** Domain doesn't work after 2 hours  
**Solution:** Check DNS propagation at: https://www.whatsmydns.net/#CNAME/gozdeeski.com

**Problem:** Changes not showing  
**Solution:**

1. Check GitHub Actions: https://github.com/GozdeEBaran/portfolio/actions
2. Hard refresh browser: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

**Problem:** Contact form not working  
**Solution:** Check browser console (F12) for errors. Make sure you did the Supabase RLS policy fix from earlier.

---

## 🎯 What's Live on Your Site

✅ Beautiful Alice-style portfolio design  
✅ Your profile photo  
✅ Dark/Light mode toggle  
✅ Magical mouse star trail  
✅ Contact form with Supabase backend  
✅ Responsive design (works on all devices)  
✅ Your GitHub: https://github.com/GozdeEBaran  
✅ Your LinkedIn: https://www.linkedin.com/in/gozdeebaraneski  
✅ Your Email: gozdeski@hotmail.com

---

**Need detailed help?** Check `AZURE-DEPLOYMENT-GUIDE.md` for more info!

**Questions?** Check the Azure portal deployment logs or GitHub Actions logs!

Good luck! 🚀✨
