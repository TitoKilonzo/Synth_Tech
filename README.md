# SynthLink Technologies — Official Website

> **Connecting Systems. Empowering People. Building the Future.**

A modern, responsive, and visually robust static website for **SynthLink Technologies**, a Nairobi-based ICT company. The site features context-aware animations, a clean glassmorphism aesthetic, and a modular component architecture.

![Status](https://img.shields.io/badge/status-active-2EF2A4?style=flat-square) ![License](https://img.shields.io/badge/license-open--source-blue?style=flat-square) ![Built With](https://img.shields.io/badge/built%20with-HTML%20%7C%20Tailwind%20CSS%20%7C%20JavaScript-0E2A47?style=flat-square)

---

## 📂 Project Structure

```
SynthLinkSite/
├── index.html        # Homepage        — Node Connectivity Animation
├── about.html        # About Us        — Data Growth Animation
├── services.html     # Services        — Radar Scan Animation
├── contact.html      # Contact         — Signal Pulse Animation
├── components.js     # Shared Header & Footer (injected via JS)
└── README.md         # Project documentation
```

---

## ✨ Features

- **Glassmorphism Design** — Glowing gradients, frosted glass effects, and crisp typography for a premium feel.
- **Context-Aware Animations** — Each page has a unique background animation relevant to its content:

  | Page     | Animation               | Theme                    |
  |----------|-------------------------|--------------------------|
  | Home     | Node connectivity network | Networking & connectivity |
  | About    | Rising data bars          | Growth & vision           |
  | Services | Scanning radar            | Monitoring & discovery    |
  | Contact  | Pulsing signal            | Communication             |

- **Modular Components** — Header and Footer are injected via `components.js`, ensuring consistency across all pages with zero duplication.
- **Fully Responsive** — Mobile-optimized with a collapsible navigation menu for all screen sizes.

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Page structure and content |
| Tailwind CSS (CDN) | Styling and layout |
| Vanilla JavaScript | Animations and component injection |
| Alpine.js *(optional)* | Reactive UI interactions |
| EmailJS | Contact form email delivery |

---

## 📧 EmailJS Setup (Required for Contact Form)

The contact form uses **EmailJS** to send emails directly from the frontend. To make the contact form functional:

### 1. Create EmailJS Account
- Visit [https://www.emailjs.com/](https://www.emailjs.com/)
- Sign up for a free account

### 2. Set Up Email Service
- Go to **Email Services** → **Add New Service**
- Choose your email provider (Gmail, Outlook, etc.)
- Connect your email account and verify

### 3. Create Email Template
- Go to **Email Templates** → **Create New Template**
- Use this template structure:

```
Subject: {{subject}} - Message from {{from_name}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This message was sent from the SynthLink Technologies website contact form.
```

### 4. Configure contact.html
Replace the placeholder values in `contact.html`:

```javascript
emailjs.init({
    publicKey: "YOUR_PUBLIC_KEY_HERE", // Your EmailJS public key
});

// In the send function:
emailjs.send(
    'YOUR_SERVICE_ID', // Your EmailJS service ID
    'YOUR_TEMPLATE_ID', // Your EmailJS template ID
    templateParams
)
```

### 5. Get Your Keys
- **Public Key**: Dashboard → Account → General → Public Key
- **Service ID**: Email Services → [Your Service] → Service ID
- **Template ID**: Email Templates → [Your Template] → Template ID

### 6. Test the Form
- Fill out the contact form on your deployed site
- Check your email for the test message
- Verify replies go to the sender's email

**Note**: EmailJS free tier allows 200 emails/month. Upgrade for higher limits if needed.

---

## 🚀 Getting Started

### Run Locally

1. **Create a project folder** named `SynthLinkSite` on your desktop.

2. **Create the following files** inside that folder:
   ```
   index.html
   about.html
   services.html
   contact.html
   components.js
   ```

3. **Paste the code** — Copy each file's HTML/JS content into its corresponding file.

4. **Open the site** — Double-click `index.html` to launch it in your browser.

> ⚠️ **Important:** The Header and Footer will **not appear** if `components.js` is missing or placed in a different folder. Always keep all files in the same directory.

---

## 🌐 Deployment

The easiest way to get this site live for free is via **Netlify Drop** — no account required.

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag and drop your entire `SynthLinkSite` folder into the upload area
3. Wait a few seconds for the upload to complete
4. Netlify will generate a live URL (e.g., `synthlink-xyz123.netlify.app`)

---

## 🎨 Customization

### Changing Navigation & Social Links
Open `components.js`. All navigation links and social media URLs (WhatsApp, LinkedIn, X) are defined at the top of the file inside the `headerHTML` and `footerHTML` variables.

### Changing the Color Scheme
Colors are configured in the `tailwind.config` script block inside the `<head>` of each HTML file:

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        brand: {
          dark:   '#05192D',  // Deep Navy (background)
          light:  '#0E2A47',  // Lighter Navy (cards/panels)
          accent: '#2EF2A4',  // Tech Green (highlights & CTAs)
        }
      }
    }
  }
}
```

> To change the accent color, update the hex value for `accent` in **every HTML file**.

### Updating Page Content
Edit text directly in the HTML files:
- Phone number → `contact.html`
- Mission & Vision statements → `about.html`
- Service descriptions → `services.html`
- Hero headline & CTA → `index.html`

---

## 📱 Pages Overview

| Page | File | Key Sections |
|---|---|---|
| **Home** | `index.html` | Hero section with "Start Your Transformation" form |
| **About** | `about.html` | Mission, Vision, and "Why Choose Us" value propositions |
| **Services** | `services.html` | Network Infrastructure, IT Support, Software Dev, Training |
| **Contact** | `contact.html` | Contact form, office location, and social media links |

---

## 📄 License

This project is open source and free to use, modify, and distribute.

---

*Built with ❤️ by Tito Kilonzo — SynthLink Technologies, Nairobi, Kenya*
