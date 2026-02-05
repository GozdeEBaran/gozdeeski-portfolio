# ⚡ Quick Start Guide

Get your portfolio up and running in 10 minutes!

## Step 1: Customize Your Content (3 minutes)

Open `index.html` and find/replace:

- `Gozde Eski` → **Your Name**
- `gozde@example.com` → **Your Email**
- `https://github.com/gozdeeski` → **Your GitHub URL**
- `https://www.linkedin.com/in/gozde-eski/` → **Your LinkedIn URL**

## Step 2: Set Up Supabase Database (5 minutes)

### Option A: Use the Table Editor (Easy - No SQL needed!)

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Create a new project (wait 1-2 minutes for setup)
3. Go to **Table Editor** → **Create new table**
4. Name it: `contact_submissions`
5. Add these columns:

   | Column       | Type        | Default | Primary | Required |
   | ------------ | ----------- | ------- | ------- | -------- |
   | id           | int8        | Auto    | ✓       | ✓        |
   | name         | text        | -       | -       | ✓        |
   | email        | text        | -       | -       | ✓        |
   | message      | text        | -       | -       | ✓        |
   | submitted_at | timestamptz | now()   | -       | ✓        |
   | status       | text        | 'new'   | -       | -        |

6. Enable **Row Level Security** (toggle ON)
7. Click **Save**

8. Go to **Authentication** → **Policies** → **contact_submissions**
9. Click **Create Policy** → **Create a policy from scratch**:
   - Policy name: `Allow public insert`
   - Policy command: `INSERT`
   - Target roles: `anon`
   - USING: `true`
   - WITH CHECK: `true`
   - Click **Save**

### Option B: Use SQL (Fastest!)

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Create a new project
3. Go to **Database** → **SQL Editor**
4. Copy the entire content from `supabase-table-sql.sql` file
5. Paste and click **Run**
6. Done! ✅

### Get Your Credentials

1. Go to **Settings** → **API**
2. Copy:
   - **Project URL** (looks like: `https://abc123.supabase.co`)
   - **anon public key** (long string starting with `eyJ...`)

### Update Your Portfolio

1. Open `supabase-config.js`
2. Replace:

   ```javascript
   const SUPABASE_URL = "YOUR_SUPABASE_URL";
   const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";
   ```

   With your actual values:

   ```javascript
   const SUPABASE_URL = "https://abc123.supabase.co";
   const SUPABASE_ANON_KEY = "eyJhbGc...your-actual-key";
   ```

3. Save the file

## Step 3: Test Your Portfolio (2 minutes)

1. Open `index.html` in your browser (or keep using http://localhost:8000)
2. Scroll to the contact form
3. Fill it out and click "Send Message"
4. You should see a success notification! 🎉

### View Your Submissions

1. Go to your Supabase dashboard
2. Click **Table Editor** → **contact_submissions**
3. You'll see your test message!

## Step 4: Add Your Images (Optional)

Replace these placeholder images:

- `profile-placeholder.jpg` - Your photo (400x400px)
- `project1-placeholder.jpg` - Project screenshots (600x400px each)
- `project2-placeholder.jpg`
- `project3-placeholder.jpg`
- `project4-placeholder.jpg`

## Step 5: Deploy Your Portfolio

### Option 1: Netlify (Easiest)

1. Go to [netlify.com](https://www.netlify.com)
2. Drag and drop your entire folder
3. Your site is live instantly! 🚀

### Option 2: GitHub Pages

1. Create a GitHub repository
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```
3. Go to Settings → Pages → Select `main` branch
4. Your site will be live at `username.github.io/repo-name`

### Option 3: Vercel

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Click Deploy
4. Done! ✨

## 🎉 You're Done!

Your portfolio is now:

- ✅ Fully functional with a working contact form
- ✅ Connected to a database
- ✅ Ready to share with the world

## 📚 Next Steps

- [ ] Share your portfolio on LinkedIn
- [ ] Add it to your resume
- [ ] Keep it updated with new projects
- [ ] Check Supabase dashboard for messages
- [ ] Add Google Analytics (optional)

## 🆘 Need Help?

Check these files for detailed guides:

- `SUPABASE-SETUP.md` - Complete Supabase guide
- `SETUP-CHECKLIST.md` - Detailed customization checklist
- `README.md` - Full documentation

---

**Enjoying your new portfolio?** Share it with me! I'd love to see what you've built. 🌟
