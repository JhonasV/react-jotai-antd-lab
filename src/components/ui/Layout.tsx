import { ReactChild } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Layout as LayoutAntd, Row, Col } from "antd";
interface IProps {
  children: ReactChild;
}

const Layout = ({ children }: IProps) => (
  <LayoutAntd>
    <LayoutAntd.Header>
      <Header />
    </LayoutAntd.Header>
    <LayoutAntd>
      <LayoutAntd.Content>
        <Row justify="center">
          <Col span={18}>{children}</Col>
        </Row>
      </LayoutAntd.Content>
    </LayoutAntd>
    <LayoutAntd.Footer style={{ textAlign: "center" }}>
      <Footer />
    </LayoutAntd.Footer>
  </LayoutAntd>
);

export default Layout;
