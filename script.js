// ===================================
// Smooth Scrolling for Anchor Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href === "#") return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const navbar = document.querySelector(".navbar");
      const navHeight = navbar ? navbar.offsetHeight : 0;
      const targetPosition = target.offsetTop - navHeight;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  });
});

// ===================================
// Navbar Scroll Effect (if navbar exists)
// ===================================
const navbar = document.querySelector(".navbar");
if (navbar) {
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    navbar.style.boxShadow =
      currentScroll > 50
        ? "0 4px 16px rgba(0, 0, 0, 0.1)"
        : "0 2px 8px rgba(0, 0, 0, 0.05)";
  });
}

// ===================================
// Contact Form Submission with Supabase
// ===================================
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    // Get the submit button
    const submitBtn = contactForm.querySelector(".submit-btn");
    const originalBtnText = submitBtn.textContent;

    // Disable button and show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
    submitBtn.style.opacity = "0.7";

    // Get form data
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    try {
      // Check if Supabase is configured
      if (
        window.supabaseConfig &&
        window.supabaseConfig.isSupabaseConfigured()
      ) {
        // Submit to Supabase
        const result = await window.supabaseConfig.submitContactForm(formData);

        if (result.success) {
          // Show success message
          showNotification(
            "Thank you for your message! I'll get back to you soon.",
            "success",
          );
          // Reset form
          contactForm.reset();
        } else {
          throw new Error(result.error);
        }
      } else {
        // Fallback: Log to console and show warning
        console.log("Form submitted (Supabase not configured):", formData);
        showNotification(
          "Form submitted! (Note: Supabase not configured yet)",
          "warning",
        );
        contactForm.reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      const errorMsg = error.message || "Unknown error";
      showNotification(
        "Error: " + errorMsg + " (Check console for details)",
        "error",
      );
    } finally {
      // Re-enable button
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
      submitBtn.style.opacity = "1";
    }
  });
}

// ===================================
// Notification System
// ===================================
function showNotification(message, type = "success") {
  // Remove any existing notifications
  const existingNotification = document.querySelector(".notification");
  if (existingNotification) {
    existingNotification.remove();
  }

  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;

  // Add to body
  document.body.appendChild(notification);

  // Trigger animation
  setTimeout(() => {
    notification.classList.add("show");
  }, 10);

  // Remove after 5 seconds
  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 5000);
}

// ===================================
// Scroll Reveal Animation
// ===================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const animateElements = document.querySelectorAll(
    ".project-card, .skill-category",
  );

  animateElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});

// ===================================
// Active Navigation Link
// ===================================
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveLink() {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", updateActiveLink);

// ===================================
// Dynamic Year in Footer
// ===================================
const yearElement = document.querySelector(".footer p");
if (yearElement) {
  const currentYear = new Date().getFullYear();
  yearElement.textContent = yearElement.textContent.replace(
    "2026",
    currentYear,
  );
}

// ===================================
// Particle Effect on Hero (Optional)
// ===================================
// Uncomment if you want a subtle particle effect in the hero section
/*
const hero = document.querySelector('.hero');
const particlesCount = 30;

for (let i = 0; i < particlesCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: var(--primary-color);
        border-radius: 50%;
        opacity: 0.3;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: float ${5 + Math.random() * 10}s infinite ease-in-out;
    `;
    hero.appendChild(particle);
}
*/

// ===================================
// Console Message
// ===================================
console.log(
  "%c👋 Hi there!",
  "font-size: 20px; font-weight: bold; color: #6B9BD1;",
);
console.log(
  "%cInterested in how this site was built? Check out the code or reach out!",
  "font-size: 14px; color: #5A6C7D;",
);

// ===================================
// Dark Mode Toggle 🌙
// ===================================
(function initDarkMode() {
  const toggle = document.getElementById("darkModeToggle");
  const body = document.body;

  // Check for saved preference or default to light mode
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
  }

  // Toggle dark mode on button click
  toggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Save preference
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
})();

// ===================================
// Magical Mouse Star Trail Effect ✨
// ===================================
class StarTrail {
  constructor() {
    this.stars = [];
    this.maxStars = 20;
    this.init();
  }

  init() {
    document.addEventListener("mousemove", (e) => this.createStar(e));
    this.animate();
  }

  createStar(e) {
    if (this.stars.length > this.maxStars) {
      const oldStar = this.stars.shift();
      if (oldStar && oldStar.element.parentNode) {
        oldStar.element.remove();
      }
    }

    const star = document.createElement("div");
    star.className = "star-trail";
    star.style.left = e.pageX + "px";
    star.style.top = e.pageY + "px";

    // Random star style
    const size = Math.random() * 8 + 4;
    const rotation = Math.random() * 360;
    const colors = ["#6B9BD1", "#F4A6D7", "#A8D8B9", "#B8A8E0", "#FFB4A2"];
    const color = colors[Math.floor(Math.random() * colors.length)];

    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.background = color;
    star.style.transform = `rotate(${rotation}deg)`;

    document.body.appendChild(star);

    this.stars.push({
      element: star,
      life: 1,
      x: e.pageX,
      y: e.pageY,
    });
  }

  animate() {
    this.stars.forEach((star, index) => {
      star.life -= 0.02;

      if (star.life <= 0) {
        star.element.remove();
        this.stars.splice(index, 1);
      } else {
        star.element.style.opacity = star.life;
        const scale = star.life;
        star.element.style.transform += ` scale(${scale})`;
      }
    });

    requestAnimationFrame(() => this.animate());
  }
}

// Initialize star trail effect
new StarTrail();
