import Image from "next/image";

import Button from "../../elements/Button";

import getImgURL from "../../../utils/getImgURL";

const PrimaryShowcaseCard = () => {
  return (
    <div className="flex flex-col items-center gap-12 overflow-hidden rounded-lg bg-orange py-[3.438rem] px-6 text-white sm:pt-[3.25rem] sm:pb-16 lg:h-[560px] lg:flex-row lg:justify-between lg:gap-[8.75rem] lg:pl-[7.5rem] lg:pr-[5.938rem]">
      <div className="relative w-[53%] max-w-[200px] before:absolute before:top-1/2 before:left-1/2 before:h-[324%] before:w-[324%] before:-translate-x-1/2 before:-translate-y-1/2 before:bg-[url('/images/pattern-circles.svg')] before:bg-100% before:bg-center before:bg-no-repeat sm:before:h-[472%] sm:before:w-[472%] lg:-bottom-[75px] lg:w-full lg:max-w-[375px] lg:before:h-[250%] lg:before:w-[250%]">
        <Image
          src={getImgURL("shared/image-speaker-zx9")}
          alt="a speaker"
          width={756}
          height={918}
          priority
          placeholder="blur"
          blurDataURL={getImgURL("shared/image-speaker-zx9", "blur")}
        />
      </div>
      <div className="z-[2] flex max-w-[349px] flex-col items-center text-center lg:items-start lg:text-left">
        <h2 className="mb-6 text-[2.25rem] leading-[2.5rem] tracking-3 sm:text-5xl sm:leading-4xl sm:tracking-6">
          zx9 <br /> speaker
        </h2>
        <p className="mb-6 opacity-75 sm:mb-10">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button title="see product" route="/product/zx9-speaker" type="dark" />
      </div>
    </div>
  );
};

export default PrimaryShowcaseCard;
