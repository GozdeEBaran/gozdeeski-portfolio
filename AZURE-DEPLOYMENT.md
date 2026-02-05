# 🚀 Deploy Your Portfolio to Azure Static Web Apps

Complete step-by-step guide to deploy your portfolio to Azure using your existing Azure account.

---

## 📋 Prerequisites

- ✅ Azure account (you already have this!)
- ✅ Your portfolio files ready
- ✅ GitHub account (you have: https://github.com/GozdeEBaran)

---

## 🎯 Option 1: Deploy via Azure Portal (Easiest - No Command Line!)

### Step 1: Create a GitHub Repository

1. Go to https://github.com/new
2. Fill in:
   - **Repository name**: `portfolio` or `gozdeeski-portfolio`
   - **Description**: "My Full-Stack Developer Portfolio"
   - **Public** (so it's accessible)
   - ✅ Check "Add a README file"
3. Click **"Create repository"**

### Step 2: Upload Your Files to GitHub

**Option A: Using GitHub Web Interface (Easiest)**

1. In your new repository, click **"Add file"** → **"Upload files"**
2. Drag and drop ALL files from your `Gozde-Portfolio` folder:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `supabase-config.js`
   - `profile.jpg`
   - `gozde.jpg`
   - All other files
3. Write a commit message: "Initial portfolio upload"
4. Click **"Commit changes"**

**Option B: Using Git (If you prefer command line)**

```bash
cd /Users/gozdeeski/Desktop/Gozde-Portfolio

# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio upload"

# Add remote (replace USERNAME with GozdeEBaran)
git remote add origin https://github.com/GozdeEBaran/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Create Azure Static Web App

1. **Go to Azure Portal**: https://portal.azure.com
2. **Sign in** with your Azure account
3. Click **"Create a resource"** (+ icon in top left)
4. Search for **"Static Web App"**
5. Click **"Create"**

### Step 4: Configure Static Web App

Fill in the following details:

#### **Basics Tab:**

| Field              | Value                                              |
| ------------------ | -------------------------------------------------- |
| Subscription       | Select your subscription                           |
| Resource Group     | Create new: `portfolio-rg`                         |
| Name               | `gozdeeski-portfolio`                              |
| Plan type          | **Free** (0 USD/month)                             |
| Region             | Choose closest to you (e.g., East US, West Europe) |
| Deployment details | **GitHub**                                         |

#### **GitHub Configuration:**

1. Click **"Sign in with GitHub"**
2. Authorize Azure to access your repositories
3. After authorization:
   - **Organization**: Select your GitHub username (GozdeEBaran)
   - **Repository**: Select `portfolio` (or whatever you named it)
   - **Branch**: `main`

#### **Build Details:**

| Field           | Value                      |
| --------------- | -------------------------- |
| Build Presets   | **Custom**                 |
| App location    | `/` (just a forward slash) |
| Api location    | _(leave empty)_            |
| Output location | _(leave empty)_            |

### Step 5: Deploy!

1. Click **"Review + create"**
2. Review your settings
3. Click **"Create"**
4. Wait 2-3 minutes for deployment ⏳

### Step 6: Get Your Live URL

1. Once deployment completes, click **"Go to resource"**
2. You'll see your **URL** at the top (looks like: `https://gentle-beach-xxx.azurestaticapps.net`)
3. Click on it to see your live portfolio! 🎉

---

## 🌐 Option 2: Add Custom Domain (gozdeeski.com)

Once your site is deployed, you can add your custom domain:

### Step 1: Configure Domain in Azure

1. In your Static Web App resource, click **"Custom domains"** in the left menu
2. Click **"+ Add"**
3. Choose **"Custom domain on other DNS"**
4. Enter: `gozdeeski.com` and `www.gozdeeski.com`
5. Azure will show you DNS records to add

### Step 2: Update Your Domain DNS Settings

1. Go to your domain registrar (where you bought gozdeeski.com)
2. Find DNS settings / DNS management
3. Add the records that Azure provided:

**For Root Domain (gozdeeski.com):**

- Type: `TXT`
- Name: `@` or leave empty
- Value: (copy from Azure)

- Type: `A` or `ALIAS`
- Name: `@`
- Value: (copy from Azure - usually an IP address)

**For WWW Subdomain:**

- Type: `CNAME`
- Name: `www`
- Value: (copy from Azure - your azurestaticapps.net URL)

4. Save DNS changes
5. Wait 10-30 minutes for DNS propagation
6. Go back to Azure and click **"Validate"**

**Note:** If you haven't purchased gozdeeski.com yet, you can:

- Buy it from providers like Namecheap, GoDaddy, Google Domains
- Or use the free Azure subdomain for now!

---

## 🔧 Option 3: Deploy with VS Code (Alternative Method)

If you have VS Code installed:

### Step 1: Install Azure Extension

1. Open VS Code
2. Go to Extensions (Cmd+Shift+X or Ctrl+Shift+X)
3. Search for **"Azure Static Web Apps"**
4. Install the extension

### Step 2: Deploy

1. Open your portfolio folder in VS Code
2. Click the Azure icon in the sidebar
3. Sign in to Azure
4. Click **"+"** to create a new Static Web App
5. Follow the prompts:
   - Name: `gozdeeski-portfolio`
   - Region: Choose closest
   - Build preset: Custom
   - App location: `/`
   - Leave others empty
6. VS Code will deploy automatically!

---

## 📊 Managing Your Site

### View Deployment Status

1. Go to Azure Portal → Your Static Web App
2. Click **"GitHub Action"** in the left menu
3. See deployment history and status

### Update Your Site

**Every time you update files on GitHub, Azure automatically redeploys!**

1. Make changes to your local files
2. Push to GitHub:
   ```bash
   git add .
   git commit -m "Updated projects"
   git push
   ```
3. Azure detects the change and redeploys (takes 2-3 minutes)
4. Your site is automatically updated!

### View Logs

1. In Azure Portal → Your Static Web App
2. Click **"GitHub Action"**
3. Click on any deployment to see logs

---

## 💰 Pricing

**Azure Static Web Apps Free Tier Includes:**

- ✅ **Free bandwidth**: 100 GB/month
- ✅ **Free hosting**: Unlimited sites
- ✅ **Free SSL certificate** (HTTPS)
- ✅ **Custom domains**: Free
- ✅ **Automatic deployments**: Free
- ✅ **Global CDN**: Free

**Perfect for a portfolio!** You won't pay anything unless you exceed these generous limits (very unlikely for a portfolio).

---

## 🎯 Quick Comparison: Azure vs Other Options

| Feature           | Azure Static Web Apps | Netlify  | Vercel   | GitHub Pages |
| ----------------- | --------------------- | -------- | -------- | ------------ |
| Free Tier         | 100 GB bandwidth      | 100 GB   | 100 GB   | 1 GB         |
| Custom Domain     | ✅ Free               | ✅ Free  | ✅ Free  | ✅ Free      |
| Auto Deploy       | ✅                    | ✅       | ✅       | ✅           |
| SSL/HTTPS         | ✅                    | ✅       | ✅       | ✅           |
| Build Time        | ~2-3 min              | ~1-2 min | ~1-2 min | ~1 min       |
| Azure Integration | ✅ Native             | ❌       | ❌       | ❌           |

**Since you already have Azure, it's the perfect choice!**

---

## 🐛 Troubleshooting

### Issue: "Build failed"

**Solution:**

- Make sure `index.html` is in the root of your repository
- Check that all file references are correct (no broken links)
- View build logs in Azure Portal → GitHub Action

### Issue: "Site shows 404"

**Solution:**

- Verify `index.html` exists in the root folder
- Check the "App location" is set to `/`
- Wait a few minutes for deployment to complete

### Issue: "Images not loading"

**Solution:**

- Make sure image files are committed to GitHub
- Check image file names match exactly (case-sensitive)
- Use relative paths: `profile.jpg` not `/profile.jpg`

### Issue: "Custom domain not working"

**Solution:**

- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct
- Try clearing browser cache
- Check domain registrar's DNS settings

---

## ✅ Deployment Checklist

Before deploying, make sure:

- [ ] All personal information is updated (name, email, links)
- [ ] Profile picture (`profile.jpg`) is in the folder
- [ ] Supabase credentials are configured in `supabase-config.js`
- [ ] All project links are working
- [ ] Contact form is tested locally
- [ ] No sensitive information in code
- [ ] All files are committed to GitHub

---

## 🎉 After Deployment

### Share Your Portfolio:

1. **LinkedIn**: Update your profile with portfolio URL
2. **GitHub**: Add portfolio link to your README
3. **Resume**: Add your live URL
4. **Email signature**: Include your portfolio link

### Monitor Your Site:

- Check Azure Portal for usage stats
- Set up alerts for any issues
- Monitor contact form submissions in Supabase

---

## 📞 Need Help?

### Resources:

- **Azure Documentation**: https://docs.microsoft.com/azure/static-web-apps/
- **Azure Support**: Available in Azure Portal
- **Community**: Stack Overflow, Azure forums

### Common Azure Portal Locations:

- **Create resources**: Top left "+" button
- **All resources**: Left sidebar
- **Resource groups**: Left sidebar
- **Cost Management**: Monitor your free tier usage

---

## 🚀 Ready to Deploy?

Follow these steps:

1. ✅ Push code to GitHub
2. ✅ Create Azure Static Web App
3. ✅ Connect to GitHub repository
4. ✅ Deploy and get your URL
5. ✅ (Optional) Add custom domain
6. ✅ Share your portfolio with the world!

**Your portfolio will be live at a URL like:**

- Free: `https://gozdeeski-portfolio.azurestaticapps.net`
- Custom: `https://gozdeeski.com` (once domain is configured)

---

**Good luck with your deployment! Your portfolio looks amazing! 🌟**
