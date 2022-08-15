import { buildImageUrl } from "cloudinary-build-url";

const getImgURL = (id: string, option?: string): string => {
  const url =
    option === "blur"
      ? buildImageUrl(id, {
          cloud: {
            cloudName: "audiophile-cloud",
          },
          transformations: {
            effect: {
              name: "blur",
              value: 1000,
            },
          },
        })
      : buildImageUrl(id, {
          cloud: {
            cloudName: "audiophile-cloud",
          },
        });

  return url;
};

export default getImgURL;
