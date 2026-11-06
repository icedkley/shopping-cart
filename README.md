# 🎮 Gaming Cart

A game storefront with a working shopping cart, built with vanilla HTML, CSS, and JavaScript. Browse a catalog of popular games, add them to your cart, and manage your selections — all deployed live on GitHub Pages.

**🔗 Live Demo:** [https://icedkley.github.io/shopping-cart/](https://icedkley.github.io/shopping-cart/)

---

## 📸 Preview

> _Add a screenshot or GIF here (e.g., `assets/preview.gif`) showing the cart in action._
> To add one: drag an image into this README editor on GitHub and it will auto-insert the link.

---

## ✨ Features

- 🕹️ **Game catalog** — 12 popular titles with descriptions and prices
- 🛒 **Shopping cart** — add items, view cart contents, and track item count
- 📱 **Responsive layout** — grid adapts to desktop and mobile screens
- 🧭 **Navigation bar** — Home, Shop, Reviews, Track my order, About
- ⚡ **Zero dependencies** — pure HTML/CSS/JS, no build step required
- 🚀 **Deployed on GitHub Pages**

---

## 🛠️ Tech Stack

| Layer      | Technology |
|------------|------------|
| Markup     | HTML5      |
| Styling    | CSS3       |
| Logic      | Vanilla JavaScript (ES6) |
| Deployment | GitHub Pages |

---

## 📁 Project Structure
shopping-cart/
├── assets/ # Images and media
├── flower.jpg # Hero / decorative image
├── index.html # Main page markup
├── script.js # Cart logic and DOM interactions
├── styles.css # Layout and styling
└── README.md

text

---

## 🚀 Getting Started

### Run locally

1. Clone the repository:
   ```bash
   git clone https://github.com/icedkley/shopping-cart.git
   cd shopping-cart
Open index.html in your browser — that's it. No install, no build step.

Optional: Serve it with a simple local server:

bash
# Python 3
python -m http.server 8000
# Then visit http://localhost:8000
Deploy your own copy
Fork this repository.

Go to Settings → Pages.

Under Source, select the main branch and / (root) folder.

Save — your site will be live at https://<your-username>.github.io/shopping-cart/.

🧠 How It Works
script.js holds the product data and cart state.

Clicking Add to Cart pushes the item into a cart array, updates the item counter in the navbar, and re-renders the cart panel.

The cart panel at the bottom of the page displays selected items and supports removing them.

Adjust the above if your actual logic differs (e.g., if you use localStorage to persist the cart).

🗺️ Roadmap / Known Limitations
□ Persist cart state with localStorage so it survives a page refresh
□ Implement quantity controls (+/–) per item
□ Add a checkout flow or "order summary" step
□ Wire up the Reviews / Track my order / About pages
□ Replace demo pricing with realistic data or a "sample data" disclaimer
🤝 Contributing
This is a personal portfolio project, but suggestions are welcome. Feel free to open an issue or submit a pull request.

📄 License
This project is open source and available under the MIT License.

👤 Author
Kyle Niño (@icedkley)

GitHub: github.com/icedkley

Live Demo: icedkley.github.io/shopping-cart

⭐ If you found this project useful or interesting, consider giving it a star!

text

---

### 📌 After pasting this in, do these 5 things

1. **Add a screenshot/GIF** right under the "Preview" section — this is the single biggest improvement for a pinned repo.
2. **Fill in the repo "About" section** (top-right of the repo page, gear icon):
   - **Description:** `Game storefront with a working cart — HTML, CSS, JS, deployed on GitHub Pages`
   - **Website:** `https://icedkley.github.io/shopping-cart/`
   - **Topics:** `javascript` `html` `css` `shopping-cart` `github-pages` `vanilla-js` `ecommerce`
3. **Delete the placeholder License line** if you don't want to add a `LICENSE` file — or add an actual MIT license (GitHub offers it in one click when creating a new file).
4. **Verify the "How It Works" section** matches your actual `script.js` (especially whether you use `localStorage`).
5. **Pin the repo** to your profile once the README looks good.

Want me to also write the **repo description + topics** in a copy-paste block, or draft a short **profile README** that links to this project?
give me a copy paste version of that
Here's the clean copy-paste block — select everything inside the box and paste it into your README.md:

markdown


Paste the README, fill in the About panel, then pin the repo. That's your profile's new centerpiece.
