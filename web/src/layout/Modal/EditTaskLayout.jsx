/* ---------------------------------
 * Layout para editar uma tarefa
 * ---------------------------------
 * Formulário EditTaskLayout para
 * editar propriedades da task ou
 * excluir.
 *
 */

import "./EditTaskLayout.css";
import { TextField } from "@/components/TextField/TextField";
import { Button } from "@/components/Button/Button";
import { TextArea } from "@/components/TextArea/TextArea";
import { useState } from "preact/hooks";

export function EditTaskLayout() {
  const [deleteAction, setDeleteAction] = useState(false);

  return (
    <form className="edit-task" method="POST">
      <div className="menu">
        <h2>Edit task</h2>
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
            Do you really want to delete this task?
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
        name="title"
        label="Title"
        placeholder="New title"
      />

      <TextArea />

      <Button type="submit" variant="blue">
        Update
      </Button>
    </form>
  );
}
