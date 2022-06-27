import Image from "next/image";

import useViewportWidth from "../../../hooks/useViewportWidth";

import mobileImg from "../../../../public/images/mobile/image-best-gear.jpg";
import tabletImg from "../../../../public/images/tablet/image-best-gear.jpg";
import desktopImg from "../../../../public/images/desktop/image-best-gear.jpg";

import { styles, dynamicStyles } from "./styles";

const DescriptionSection = () => {
  const [width] = useViewportWidth();

  return (
    <>
      <section>
        <div className="img-container">
          <div className="img-wrapper">
            <Image
              src={
                width && width < 600
                  ? mobileImg
                  : width && width < 1240
                  ? tabletImg
                  : desktopImg
              }
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="content">
          <h2>
            bringing you the <span>best</span> audio gear
          </h2>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </section>

      <style jsx>{styles}</style>
      <style jsx>{dynamicStyles}</style>
    </>
  );
};

export default DescriptionSection;
