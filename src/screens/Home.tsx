import { Col, Divider, Row } from "antd";
import Margin from "../components/common/Margin";
import TodoForm from "../components/todo/TodoForm";
import TodoList from "../components/todo/TodoList";

const Home = () => {
  return (
    <>
      <Margin top="1rem">
        <Row>
          <Col span={24}>
            <TodoForm />
          </Col>
        </Row>
      </Margin>
      <Divider />
      <Row>
        <Col span={24}>
          <TodoList />
        </Col>
      </Row>
    </>
  );
};

export default Home;
