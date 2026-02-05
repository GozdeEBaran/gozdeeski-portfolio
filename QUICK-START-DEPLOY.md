# 🚀 Quick Start: Deploy to Azure in 10 Minutes

Super quick guide to get your portfolio live on `gozdeeski.com`!

---

## Step 1: Push to GitHub (5 minutes)

Open Terminal and run these commands:

```bash
# Navigate to your project
cd /Users/gozdeeski/Desktop/Gozde-Portfolio

# Initialize Git
git init

# Add your files
git add index.html styles-alice.css script.js supabase-config.js profile.jpg .gitignore
git commit -m "Initial commit: My portfolio"

# Create a new repository on GitHub first, then:
# Replace YOUR-USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

**First time using Git?**

- Go to [github.com/new](https://github.com/new)
- Create a repository named `portfolio`
- Keep it public
- Don't initialize with anything
- Then run the commands above

---

## Step 2: Create Azure Static Web App (3 minutes)

1. Go to [portal.azure.com](https://portal.azure.com)
2. Click **Create a resource**
3. Search for **Static Web Apps** → Click **Create**

**Fill in:**

- Resource Group: Create new → `portfolio-rg`
- Name: `gozde-portfolio`
- Plan: **Free**
- Region: Choose closest to you
- Source: **GitHub**
- Click **Sign in with GitHub** and authorize
- Select your `portfolio` repository
- Branch: `main`
- Build Presets: **Custom**
- App location: `/`
- Leave other fields empty

4. Click **Review + create** → **Create**
5. Wait 2-3 minutes
6. Click **Go to resource**
7. Copy your URL (looks like: `https://happy-ocean-123456.azurestaticapps.net`)
8. Visit it to see your live site! 🎉

---

## Step 3: Connect Your Domain (2 minutes + waiting time)

### In Azure:

1. In your Static Web App, click **Custom domains** (left menu)
2. Click **+ Add**
3. Select **Custom domain on other DNS**
4. Enter: `gozdeeski.com`
5. Click **Next**
6. **COPY** the DNS records shown (TXT and CNAME values)

### At Your Domain Registrar:

**Where did you buy gozdeeski.com?** (GoDaddy, Namecheap, etc.)

1. Sign in to your domain registrar
2. Go to DNS settings for `gozdeeski.com`
3. Add these records:

**TXT Record:**

- Type: `TXT`
- Name: `@` (or `gozdeeski.com`)
- Value: (paste from Azure)

**CNAME for root:**

- Type: `CNAME` (or `ALIAS`)
- Name: `@` (or blank)
- Value: `your-site-name.azurestaticapps.net` (from Azure)

**CNAME for www:**

- Type: `CNAME`
- Name: `www`
- Value: `your-site-name.azurestaticapps.net`

4. Save changes

### Back in Azure:

1. Click **Validate** → **Add**
2. Wait 15-30 minutes for DNS propagation
3. Your site will be live at `https://gozdeeski.com`! 🎉

---

## ✅ Done!

Your portfolio is now live with:

- ✨ Dark mode toggle
- ✨ Mouse star trail
- ✨ Contact form with Supabase
- 🔒 HTTPS (SSL certificate - automatic)
- 🚀 Auto-deploy on every Git push

---

## 🔄 Making Updates

Whenever you want to update your site:

```bash
# Make your changes to files
# Then commit and push:
git add .
git commit -m "Updated content"
git push origin main
```

Your site updates automatically in 1-2 minutes! 🚀

---

## 📞 Need Help?

Check the full guide: `AZURE-DEPLOYMENT-GUIDE.md`

Common issues:

- **GitHub username needed**: Use your actual GitHub username in commands
- **Domain not working**: Wait 30 minutes for DNS propagation
- **Changes not showing**: Check GitHub Actions tab in your repo
