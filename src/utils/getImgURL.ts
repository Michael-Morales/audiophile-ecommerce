import { buildImageUrl } from "cloudinary-build-url";

const getImgURL = (id: string): string => {
  const url = buildImageUrl(id, {
    cloud: {
      cloudName: "audiophile-cloud",
    },
  });

  return url;
};

export default getImgURL;
