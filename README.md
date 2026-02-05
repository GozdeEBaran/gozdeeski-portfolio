# Full-Stack Developer Portfolio

A beautiful, modern, and responsive portfolio website inspired by Alice Zhao's design. Built with clean HTML5, CSS3, and vanilla JavaScript.

## ✨ Features

- **Clean & Modern Design**: Minimalistic layout with bright pastel accents
- **Fully Responsive**: Looks great on desktop, tablet, and mobile devices
- **Smooth Animations**: Elegant scroll animations and hover effects
- **Accessible**: Semantic HTML5 with proper ARIA labels and alt text
- **SEO Optimized**: Proper meta tags and semantic structure
- **Fast Loading**: No heavy frameworks, just pure HTML/CSS/JS

## 🎨 Design Highlights

- Bright yet elegant color palette with pastel accents (soft blue, pink, mint green)
- Clean typography using Google Fonts (Poppins)
- Smooth transitions and hover effects
- Card-based project showcase
- Interactive contact form
- Social media integration

## 📋 Sections

1. **Hero/Landing**: Eye-catching introduction with social links
2. **About Me**: Personal introduction with skills breakdown
3. **Projects**: Showcase of your work with tech stack tags
4. **Contact**: Email and contact form for easy communication

## 🚀 Quick Start

1. **Clone or download** this repository
2. **Open `index.html`** in your browser to view the site
3. **Customize** the content (see Customization Guide below)
4. **Deploy** to your hosting platform of choice

## ✏️ Customization Guide

### 1. Personal Information

**Update in `index.html`:**

- **Line 7-8**: Update meta description and keywords
- **Line 9**: Change the page title
- **Line 30**: Update your name in the hero section
- **Line 32**: Change your role/title
- **Line 33**: Update your tagline
- **Lines 36-63**: Update social media links (GitHub, LinkedIn, Email)
- **Lines 84-90**: Add your profile picture (replace `profile-placeholder.jpg`)
- **Lines 92-94**: Write your personal bio
- **Lines 96-114**: Customize your skills

### 2. Projects

**Update in `index.html` (starting around line 126):**

For each project, update:

- Project title
- Description
- Tech stack tags
- GitHub/demo links
- Project images (replace `project1-placeholder.jpg`, etc.)

To add a new project, copy the entire `<article class="project-card">` block and paste it within the projects grid.

### 3. Contact Information

**Update in `index.html` (around line 252):**

- Update your email address in multiple places
- Update social media links
- Customize the contact form (or integrate with a backend service)

### 4. Colors & Styling

**Update in `styles.css` (lines 10-15):**

```css
--primary-color: #6b9bd1; /* Soft Blue */
--secondary-color: #f4a6d7; /* Pastel Pink */
--accent-color: #a8d8b9; /* Mint Green */
--accent-purple: #b8a8e0; /* Lavender */
--accent-peach: #ffb4a2; /* Peach */
```

Change these hex values to customize your color scheme!

### 5. Images

Replace these placeholder images with your own:

- `profile-placeholder.jpg` - Your profile photo (recommended: 400x400px)
- `project1-placeholder.jpg` - Project screenshots (recommended: 600x400px)
- `project2-placeholder.jpg`
- `project3-placeholder.jpg`
- `project4-placeholder.jpg`

Place your images in the same folder as `index.html` or create an `images/` folder and update the paths accordingly.

### 6. Contact Form Integration with Supabase (Recommended!)

Your portfolio is already integrated with **Supabase** - a modern, free database solution! 🎉

**Quick Setup (5 minutes):**

1. Read the complete guide: `SUPABASE-SETUP.md`
2. Create a free Supabase account
3. Create a database table (copy-paste instructions provided)
4. Add your credentials to `supabase-config.js`
5. Done! Your contact form will save submissions to a database

**Why Supabase?**

- ✅ **Free forever** (50,000 rows, 500MB database)
- ✅ **No backend code needed**
- ✅ **Real-time dashboard** to view messages
- ✅ **Secure** with built-in authentication
- ✅ **Easy to set up** (see SUPABASE-SETUP.md)
- password : HazelB22032019-

**Alternative Options:**

**Option 1: Use Formspree (Simple, no database)**

```html
<form
  action="https://formspree.io/f/YOUR_FORM_ID"
  method="POST"
  class="contact-form"
></form>
```

**Option 2: Use EmailJS (Email forwarding)**

- Sign up at emailjs.com
- Follow their integration guide
- Update the JavaScript in `script.js`

## 🌐 Deployment

### GitHub Pages (Free)

1. Create a new repository on GitHub
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. Go to repository Settings → Pages
4. Select `main` branch as source
5. Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO/`

### Netlify (Free)

1. Sign up at [netlify.com](https://www.netlify.com)
2. Drag and drop your folder to Netlify
3. Your site is live instantly with a custom domain option!

### Vercel (Free)

1. Sign up at [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Deploy with one click!

### Custom Domain

After deploying, you can connect a custom domain through your hosting provider's settings.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🛠️ Technologies Used

- HTML5
- CSS3 (Grid, Flexbox, Custom Properties)
- Vanilla JavaScript
- Google Fonts (Poppins)
- SVG Icons
- **Supabase** (PostgreSQL database for contact form)

## 📝 To-Do After Setup

- [ ] Update all personal information
- [ ] Replace placeholder images
- [ ] Update project details and links
- [ ] **Set up Supabase for contact form** (see SUPABASE-SETUP.md - takes 5 minutes!)
- [ ] Add your resume PDF
- [ ] Test on different devices
- [ ] Deploy to hosting platform
- [ ] Set up custom domain (optional)
- [ ] Add Google Analytics (optional)

## 💡 Tips

1. **Optimize Images**: Compress your images before uploading (use TinyPNG or similar)
2. **Test Responsiveness**: Check your site on different screen sizes
3. **Update Content Regularly**: Keep your projects and skills up to date
4. **SEO**: Update meta descriptions and add relevant keywords
5. **Performance**: Keep the site fast by avoiding heavy scripts

## 🤝 Contributing

Feel free to fork this template and make it your own! If you have suggestions for improvements, open an issue or submit a pull request.

## 📄 License

This template is free to use for personal and commercial projects.

## 🙏 Credits

Design inspiration: [Alice Zhao](https://aliicezhao.com/)

---

**Built with ❤️ by Gozde Eski**

Good luck with your portfolio! 🚀
