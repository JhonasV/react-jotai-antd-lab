import { ITodo } from "../../models/todo";
import { Button, Card } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import { useRemoveTodoAtom, useUpdateTodoAtom } from "../../jotai/store";
interface IProps {
  todo: ITodo;
}
const TodoItem = ({ todo }: IProps) => {
  const [, removeTodoAtom] = useRemoveTodoAtom();

  const [, updateTodoAtom] = useUpdateTodoAtom();

  const cardStyle = {
    width: "325px",
    height: "192px",
    borderRadius: "16px",
    marginRight: "24px",
    boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
    backgroundColor: todo.completed ? "#2ecc71" : "white",
    cursor: "pointer",
    color: todo.completed ? "white" : "#2ecc71",
  };

  const paragrathStyle = {
    textDecoration: todo.completed ? "line-through" : "none",
  };

  return (
    <Card
      style={cardStyle}
      title={`Todo #${todo.id}`}
      onClick={() => {
        updateTodoAtom(todo.id);
      }}
      extra={
        <>
          <Button onClick={() => removeTodoAtom(todo.id)}>
            <DeleteFilled /> Remove
          </Button>{" "}
        </>
      }
    >
      <p style={paragrathStyle}>{todo.message}</p>
    </Card>
  );
};

export default TodoItem;
