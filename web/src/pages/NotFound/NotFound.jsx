/* ---------------------------------
 * Not Found 404
 * ---------------------------------
 * Página exibida quando não se encontra
 * nenhuma rota ou recurso na plataforma.
 *
 */

import "./NotFound.css";

export function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found__content">
        <h1>404</h1>
        <h2>Resource could not be found</h2>
      </div>
    </main>
  );
}
