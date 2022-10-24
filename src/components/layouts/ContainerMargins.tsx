type Props = {
  children: JSX.Element;
};

const ContainerMargins = ({ children }: Props) => {
  return (
    <div className="mx-6 overflow-x-hidden sm:mx-10 md:mx-auto md:max-w-[840px] lg:mx-[200px] lg:max-w-none xl:mx-auto xl:max-w-[1110px]">
      {children}
    </div>
  );
};

export default ContainerMargins;
