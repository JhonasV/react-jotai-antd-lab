import Layout from "./components/ui/Layout";
import Home from "./screens/Home";
const App = () => {
  return (
    <Layout>
      <div style={{ height: "84vh" }}>
        <Home />
      </div>
    </Layout>
  );
};

export default App;
