const ContainerMargins = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <div>{children}</div>

      <style jsx>{`
        div {
          margin: 0 2.4rem;
        }

        @media screen and (min-width: 600px) {
          div {
            margin: 0 4rem;
          }
        }

        @media screen and (min-width: 905px) {
          div {
            margin: 0 auto;
            max-width: 840px;
          }
        }

        @media screen and (min-width: 1240px) {
          div {
            margin: 0 200px;
            max-width: unset;
          }
        }

        @media screen and (min-width: 1440px) {
          div {
            margin: 0 auto;
            max-width: 1110px;
          }
        }
      `}</style>
    </>
  );
};

export default ContainerMargins;
