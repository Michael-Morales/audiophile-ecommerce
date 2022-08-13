import NavBar from "../modules/NavBar";
import Footer from "../modules/Footer";

const Default = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
      <div id="modal" />
    </>
  );
};

export default Default;
