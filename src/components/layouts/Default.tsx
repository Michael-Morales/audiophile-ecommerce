import Footer from "../modules/Footer";

const Default = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <header></header>

      {children}

      <Footer />
    </>
  );
};

export default Default;
