import "./CreateBoardLayout.css";
import { TextField } from "@/components/TextField/TextField";
import { Button } from "@/components/Button/Button";

export function CreateBoardLayout() {
  return (
    <form className="new-board" method="POST">
      <h2>Create a new board</h2>
      <TextField type="text" name="name" label="Name" placeholder="New name" />
      <TextField
        type="text"
        name="description"
        label="Description"
        placeholder="New description"
      />
      <Button type="submit" variant="primary">
        Create
      </Button>
    </form>
  );
}
