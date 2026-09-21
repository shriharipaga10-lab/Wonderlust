# 🌍 Wanderlust

Wanderlust is a full-stack travel platform that lets users explore, list, and share their favourite destinations — complete with image uploads, secure authentication, and interactive maps.

**🔗 Live Demo:** [wanderlust-hub.vercel.app](https://wanderlust-hub.vercel.app/)

---

## 📖 Table of Contents

- [About the Project](#about-the-project)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

---

## 📌 About the Project

Wanderlust is built on the **MERN stack** (MongoDB, Express.js, React.js, Node.js) and brings together several real-world features commonly found in production travel/listing platforms — image storage, geolocation, authenticated user sessions, and a clean, responsive UI.

---

## ✨ Key Features

- **Listings** — Create, edit, and delete travel destination listings
- **Reviews** — Leave and view reviews for destinations
- **Search & Filter** — Quickly find listings based on preferences
- **User Authentication** — Secure sign-up, login, and logout via Passport.js
- **Image Upload** — Upload and manage listing images with Multer + Cloudinary
- **Interactive Maps** — View destination locations with Mapbox
- **Error Handling** — Graceful error handling for a smooth user experience

---

## 🛠 Tech Stack

**Core Stack**
- Node.js
- Express.js
- MongoDB
- React.js

**Libraries & Tools**
- Multer — image upload handling
- Cloudinary — image storage & delivery
- Passport.js — authentication
- Mapbox — interactive maps
- Bootstrap — responsive UI design

---

## 🚀 Getting Started

Follow these steps to run Wanderlust locally.

### 1. Clone the repository
```bash
https://github.com/shriharipaga10-lab/Wonderlust.git
```

### 2. Install dependencies
```bash
cd Wanderlust
npm install
```

### 3. Configure environment variables
Create a `.env` file in the root directory (see [Environment Variables](#environment-variables) below).

### 4. Run the application
```bash
node app.js
```

Then visit **http://localhost:3000** in your browser.

---

## 🔑 Environment Variables

Create a `.env` file in the root directory with the following:

```env
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
MAPBOX_TOKEN=your_mapbox_token
SESSION_SECRET=your_session_secret
```

> ⚠️ Never commit your `.env` file — make sure it's included in `.gitignore`.

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m "Add your feature"`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

Feel free to open an issue for bugs, suggestions, or feature requests.

---

## 📄 License

This project is open source and available for learning and contribution. Add a license file (e.g., MIT) if you'd like to formalize usage terms.

---

### 🙌 Acknowledgements

Built as a learning project to explore full-stack development, authentication flows, and third-party API integration within the MERN ecosystem.
