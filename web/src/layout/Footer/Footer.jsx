import "./Footer.css";

export function Footer() {
  return (
    <footer>
      <nav>
        <small>
          Developed by <b>Ian Patrick</b>
        </small>

        <div className="footer__socials">
          <a href="#" target="_blank">
            LinkedIn
          </a>
          <a href="#" target="_blank">
            Github
          </a>
          <a href="#" target="_blank">
            Website
          </a>
        </div>
      </nav>
    </footer>
  );
}
