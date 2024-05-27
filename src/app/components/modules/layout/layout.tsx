import Layout from "../../elements/layout/layout";
import Header from "../header/header";
import Footer from "../footer/footer";
import { store } from "@/app/redux/store";
import { Provider } from "react-redux";

const LayoutComponent = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
          <Header />
          <Layout>{children}</Layout>
          <Footer />
        </Provider>
      );
    };
    
    export default LayoutComponent;
    