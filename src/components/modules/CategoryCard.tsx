import Button from "../elements/Button";

import { colors } from "../../styles/theme";

const CategoryCard = () => {
  return (
    <>
      <div>
        <div />
        <h6>headphones</h6>
        <Button title="shop" route="/" secondary />
      </div>

      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 165px;
          border-radius: 8px;
        }
      `}</style>
      <style jsx>{`
        div {
          background-color: ${colors.grey};
        }
      `}</style>
    </>
  );
};

export default CategoryCard;
