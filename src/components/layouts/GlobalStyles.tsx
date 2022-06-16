import { globalStyles, dynamicGlobalStyles } from "../../styles/globalStyles";

const GlobalStyles = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      {children}

      <style jsx global>
        {globalStyles}
      </style>
      <style jsx global>
        {dynamicGlobalStyles}
      </style>
    </>
  );
};

export default GlobalStyles;
