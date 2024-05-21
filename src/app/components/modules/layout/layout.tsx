import Layout from "../../elements/layout/layout";
import Header from "../header/header";
import Footer from "../footer/footer";

const LayoutComponent = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
          <Header />
          <Layout>{children}</Layout>
          <Footer />
        </div>
      );
    };
    
    export default LayoutComponent;
    