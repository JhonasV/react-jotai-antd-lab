import { Input, Form } from "antd";
import { useAddTodoAtom } from "../../jotai/store";
const { Search } = Input;

const TodoForm = () => {
  const [, addTodoAtom] = useAddTodoAtom();

  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      name="basic"
      initialValues={{ message: "" }}
      onFinish={(values) => {
        addTodoAtom(values.message);
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
