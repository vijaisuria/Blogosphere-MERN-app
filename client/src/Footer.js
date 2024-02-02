const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/blogs">Blogs</a>
        </li>
        <li>
          <a href="/login">Account</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
    <p className="developer-credits">
      Developed by: <a href="https://vijaisuria.github.io">Vijai Suria</a>
      <span className="social-icons">
        <a
          href="https://github.com/vijaisuria"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://linkedin.com/in/vijaisuria"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://twitter.com/vijaisuria"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
      </span>
    </p>
  </footer>
);

export default Footer;
