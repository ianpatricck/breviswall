/* ---------------------------------
 * Layout para editar um card
 * ---------------------------------
 * Formulário EditCardLayout para
 * editar propriedades do card ou
 * excluir.
 *
 */

import "./EditCardLayout.css";
import { TextField } from "@/components/TextField/TextField";
import { Button } from "@/components/Button/Button";
import { useState } from "preact/hooks";

export function EditCardLayout() {
  const [deleteAction, setDeleteAction] = useState(false);

  return (
    <form className="edit-card" method="POST">
      <div className="menu">
        <h2>Edit card</h2>
        <Button
          type="button"
          variant="red"
          onClick={() => setDeleteAction(true)}
        >
          Delete
        </Button>
      </div>

      {deleteAction && (
        <div className="warning-delete">
          <p className="warning__ask">
            Do you really want to delete this card?
          </p>
          <p className="warning__message">This action cannot be undone</p>

          <div className="btn-group">
            <Button type="button" variant="red">
              Continue
            </Button>
            <Button
              type="button"
              variant="gray"
              onClick={() => setDeleteAction(false)}
            >
              Close
            </Button>
          </div>
        </div>
      )}

      <TextField
        type="text"
        name="name"
        label="Name"
        placeholder="New name"
      />

      <Button type="submit" variant="blue">
        Update
      </Button>
    </form>
  );
}
