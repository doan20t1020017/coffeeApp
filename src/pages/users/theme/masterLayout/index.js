import Header from "../header";
import Footer from "../footer";
import { Outlet } from "react-router";

const MasterLayout = ({ children, ...props }) => {
  return (
    <div {...props}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MasterLayout;
