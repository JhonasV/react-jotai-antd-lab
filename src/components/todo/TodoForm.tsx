import { Input, Form } from "antd";
import { useAddTodoAtom, useAddTodoCallback } from "../../jotai/store";
const { Search } = Input;

const TodoForm = () => {
  const [, setAddTodo] = useAddTodoAtom();
  const [, addTodoCallback] = useAddTodoCallback();

  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      name="basic"
      initialValues={{ message: "" }}
      onFinish={(values) => {
        setAddTodo(values.message);
        addTodoCallback();
        form.resetFields();
      }}
    >
      <Form.Item
        name="message"
        rules={[{ required: true, message: "Pleas input your Message!" }]}
      >
        <Search
          placeholder="What to do!"
          enterButton="Add"
          name="message"
          autoComplete="off"
        />
      </Form.Item>
    </Form>
  );
};

export default TodoForm;
