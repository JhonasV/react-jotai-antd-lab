import { Col, Row } from "antd";
import Margin from "../common/Margin";
import TodoItem from "./TodoItem";
import { useTodosAtom } from "../../jotai/store";

const TodoList = () => {
  const [todos] = useTodosAtom();
  return (
    <Row>
      {todos.length === 0 ? (
        <h3>No todos added yet!</h3>
      ) : (
        todos.map((item) => (
          <Margin left=".25rem" right=".25rem" bottom=".5rem">
            <Col key={item.id.toString()} span={4}>
              <TodoItem todo={item} />
            </Col>
          </Margin>
        ))
      )}
    </Row>
  );
};

export default TodoList;
