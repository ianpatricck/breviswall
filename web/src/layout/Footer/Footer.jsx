/* ---------------------------------
 * Rodapé da aplicação
 * ---------------------------------
 * Layout onde se exibe algumas
 * informações de rodapé em determinadas
 * páginas.
 *
 */

import "./Footer.css";
import { useLocation } from "preact-iso";

export function Footer() {
  const { path } = useLocation();
  if (path == "/dashboard") return;

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
