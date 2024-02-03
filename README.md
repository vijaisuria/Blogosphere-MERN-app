# BLOGOSPHERE MERN APPLICATION

## Table of Contents

- [Introduction](#introduction)
- [Key Features](#-key-features)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [Installation Guide](#installation-guide)
- [Contribution](#contribution)
- [Contact Us](#contact-us)

## Introduction

Welcome to **Blogosphere** - your go-to destination for a feature-rich and immersive blogging experience! 🚀 In the vast landscape of the internet, Blogosphere stands out as a meticulously designed blog application created using the MERN stack. Whether you're an avid writer or an enthusiastic reader, Blogosphere is tailored to meet your blogging needs with style and functionality.

## Key Features

🔑 **User Authentication & Authorization:** Blogosphere prioritizes the security and privacy of its users. We've implemented robust authentication and authorization mechanisms using JWT, Bcryptjs, and secure cookies. Your data is safe, and you can enjoy a seamless experience without compromising on security.

📝 **Blog Operations:** Express your thoughts and creativity effortlessly! With Blogosphere, users can create and edit their blogs with an intuitive and dynamic content creation interface. Write, edit, and personalize your content to make it uniquely yours.

📧 **Contact Us Page with Nodemailer:** Communication is key! Blogosphere features a Contact Us page seamlessly integrated with Nodemailer. Reach out to us easily, ask questions, provide feedback, or just say hello. We value your input and are committed to fostering a strong community.

🏠 **Landing Page:** Your journey begins with a captivating landing page designed to leave a lasting impression. Blogosphere's landing page is crafted to engage visitors and provide a glimpse into the rich content that awaits them within the app. Welcome to a world where every visit starts on a positive note!

📱 **Mobile Responsiveness:** Blogosphere is not confined to desktops; it accompanies you wherever you go. Experience the same level of smooth navigation and functionality on various devices, ensuring that Blogosphere is accessible anytime, anywhere. Whether you're on your laptop, tablet, or smartphone, your blogging journey is at your fingertips.

## Technology Stack

⚙️ **Blogosphere is built on the MERN stack:**

- **MongoDB:** For a flexible and scalable database to handle blog data efficiently.
- **Express.js:** For building a robust and scalable backend to manage blog operations.
- **React.js:** For creating a dynamic and interactive user interface.
- **Node.js:** For running the server-side logic and handling backend requests.
- **JWT, Bcryptjs, Cookies:** Ensuring secure user authentication and authorization.
- **Nodemailer:** Facilitating seamless communication through the Contact Us page.

Blogosphere combines these technologies to create a powerful and enjoyable blogging platform. Dive into the world of Blogosphere and let your blogging journey begin! 🌐✨

## File Structure

📂 The front-end part is structured as follows:

```
└── 📁client
    └── .env
    └── .env.example
    └── .gitignore
    └── package-lock.json
    └── package.json
    └── 📁public
        └── blogosphere-logo.png
        └── blogosphere-white-logo.png
        └── index.html
        └── logo.png
        └── manifest.json
        └── robots.txt
    └── 📁src
        └── App.js
        └── 📁css
            └── App.css
            └── contact.css
            └── forms.css
            └── home.css
            └── index.css
        └── index.js
        └── 📁pages
            └── BlogsPage.js
            └── Contact.jsx
            └── CreatePost.js
            └── EditPost.js
            └── IndexPage.jsx
            └── LoginPage.js
            └── PostPage.js
            └── RegisterPage.js
        └── 📁partials
            └── Footer.js
            └── Layout.js
            └── NavBar.js
            └── Post.js
        └── 📁utils
            └── Editor.js
            └── UserContext.js
```

📂 The back-end part is structured as follows:

```
└── 📁server
    └── .env
    └── .gitignore
    └── index.js
    └── 📁models
        └── Post.js
        └── User.js
    └── package-lock.json
    └── package.json
    └── 📁uploads
```

## Installation Guide

🚀 Follow these steps to install and run the Awesome Project:

#### A. Client (Frontend) Installation:

1. **Navigate to the client folder:**

   ```bash
   cd client
   ```

2. **Install Frontend Dependencies:**

   ```bash
   npm install
   ```

3. **Configure Environment Variables:**

   - Rename the `.env.example` file to `.env`.
   - Open the `.env` file and add your server API base link:
     ```env
     REACT_APP_API_BASE_URL=http://your-server-api-link
     ```

4. **Start the Development Server:**
   ```bash
   npm start
   ```
   This will launch the client application on `http://localhost:3000`.

#### B. Server (Backend) Installation:

1. **Navigate to the server folder:**

   ```bash
   cd server
   ```

2. **Install Backend Dependencies:**

   ```bash
   npm install
   ```

3. **Configure Environment Variables:**

   - Rename the `.env.example` file to `.env`.
   - Open the `.env` file and add your MongoDB URI and JWT secret:
     ```env
     MONGO_URI=mongodb://your-mongo-uri
     JWT_SECRET=your-jwt-secret
     ```

4. **Run the Server for Development:**

   ```bash
   npm run dev
   ```

   This will start the server in development mode.

5. **Run the Server for Production:**
   ```bash
   npm start
   ```
   Use this command when deploying the server in a production environment.

Now, both the client and server are installed and running. You can access the frontend on `http://localhost:3000`, and the backend will be running according to your specified configuration (by default on `http://localhost:4000`).

## Contribution

🤝 We welcome contributions! If you'd like to contribute to the Awesome Project, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/new-feature`
3. Make your changes and commit them: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request.

## Contact Us

📬 Feel free to reach out to us on social media:

- Portfolio: [vijaisuria.github.io](https://vijaisuria.github.io)
- LinkedIn: [Your Name](https://www.linkedin.com/in/vijaisuria/)
- Email: vijaisuria87@gmail.com
