SynthLink Technologies - Official Website
A modern, responsive, and visually robust static website for SynthLink Technologies, a Nairobi-based ICT company. The site features context-aware animations, a DataCamp-inspired split layout, and a clean, professional design using Tailwind CSS.

Project StatusLicense

📂 Project Structure
SynthLinkSite/├── index.html          # Homepage (Network Animation)├── about.html          # About Us (Data Growth Animation)├── services.html       # Services (Radar Scan Animation)├── contact.html        # Contact (Signal Pulse Animation)├── components.js       # Shared Header & Footer Logic└── README.md           # This file
✨ Features
Robust Design: Modern "Glassmorphism" effects, glowing gradients, and crisp typography.
Context-Aware Animations: Each page features a unique background animation relevant to its content:
Home: Node connectivity network.
About: Rising data bars (growth/vision).
Services: Scanning radar (monitoring/discovery).
Contact: Pulsing signal (communication).
Modular Components: Header and Footer are injected via JavaScript (components.js), ensuring uniformity across all pages.
Responsive: Fully mobile-optimized with a collapsible navigation menu.
Tech Stack: HTML5, Tailwind CSS (via CDN), Vanilla JavaScript, Alpine.js (optional).
🚀 Getting Started (Local Run)
To view this website on your computer:

Create a folder named SynthLinkSite on your desktop.
Inside that folder, create the following 5 files:
index.html
about.html
services.html
contact.html
components.js
Paste the code:
Copy the HTML code provided into the .html files.
Copy the JavaScript code provided into components.js.
Open the site:
Double-click index.html. It will open in your default web browser.
⚠️ Important: The Header and Footer will not appear if components.js is missing or placed in a different folder.

🌐 Deployment (Live Website)
The easiest way to deploy this site for free is using Netlify Drop.

Go to app.netlify.com/drop.
Drag and drop your SynthLinkSite folder into the upload area.
Wait a few seconds for the upload to complete.
Netlify will generate a live URL (e.g., silly-jones-12345.netlify.app).
🛠️ Customization
Changing Links
Open components.js. All social media links (WhatsApp, LinkedIn, X) and navigation links are located at the top of the file within the headerHTML and footerHTML variables.

Changing Colors
The color scheme is defined using Tailwind CSS inside the <head> of each HTML file under tailwind.config.

brand.dark: Deep Navy (#05192D)
brand.light: Lighter Navy (#0E2A47)
brand.accent: Tech Green (#2EF2A4)
To change the accent color, update the hex codes in the tailwind.config script in every HTML file.

Updating Content
Simply edit the text inside the HTML files (e.g., changing the phone number in contact.html or the mission statement in about.html).

📱 Pages Overview
Home: Hero section with a "Start Your Transformation" form.
About: Mission, Vision, and "Why Choose Us" value propositions.
Services: Detailed breakdown of Network Infrastructure, IT Support, Software Dev, and Training.
Contact: Contact form, office location, and direct social media links.
📄 License
This project is open source and available for use.