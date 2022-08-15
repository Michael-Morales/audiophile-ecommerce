import NextImage from "next/image";

import getImgURL from "../../../utils/getImgURL";

type Props = {
  mobile: string;
  tablet: string;
  desktop: string;
  alt: string;
  priority?: boolean;
  width: number | undefined;
};

const Image = ({ alt, priority, width, mobile, tablet, desktop }: Props) => {
  return (
    <NextImage
      src={
        width && width < 600
          ? getImgURL(mobile)
          : width && width < 1240
          ? getImgURL(tablet)
          : getImgURL(desktop)
      }
      alt={alt}
      layout="fill"
      objectFit="cover"
      placeholder="blur"
      blurDataURL={
        width && width < 600
          ? getImgURL(mobile, "blur")
          : width && width < 1240
          ? getImgURL(tablet, "blur")
          : getImgURL(desktop, "blur")
      }
      priority={priority}
    />
  );
};

export default Image;
