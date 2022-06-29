import Button from "../../elements/Button";

import { styles, dynamicStyles } from "./styles";

const CartModal = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <p>cart (3)</p>
          <button>remove all</button>
        </div>
        <ul></ul>
        <div className="footer">
          <p>total</p>
          <p className="price">5396 €</p>
        </div>
        <Button title="checkout" route="/checkout" />
      </div>

      <style jsx>{styles}</style>
      <style jsx>{dynamicStyles}</style>
    </>
  );
};

export default CartModal;
