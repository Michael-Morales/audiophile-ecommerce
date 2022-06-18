import Image from "next/image";

import { colors } from "../../styles/theme";

const DescriptionSection = () => {
  return (
    <>
      <section>
        <div className="img-wrapper">
          <Image
            src="/images/mobile/image-best-gear.webp"
            alt=""
            width={654}
            height={600}
          />
        </div>
        <h3>
          bringing you the <span>best</span> audio gear
        </h3>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </section>

      <style jsx>{`
        section {
          margin: 12rem 2.4rem;
          text-align: center;
        }

        .img-wrapper {
          margin-bottom: 4rem;
          height: 300px;
          border-radius: 8px;
          overflow: hidden;
        }

        h3 {
          margin-bottom: 3.2rem;
        }

        p {
          opacity: 0.5;
        }
      `}</style>
      <style jsx>{`
        span {
          color: ${colors.primary};
        }
      `}</style>
    </>
  );
};

export default DescriptionSection;
