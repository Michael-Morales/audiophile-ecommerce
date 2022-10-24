import type {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
} from "next";

import ContainerMargins from "../../src/components/layouts/ContainerMargins";
import ProductPage from "../../src/components/templates/ProductPage";
import SEO from "../../src/components/modules/SEO";

import { prisma } from "../../lib/prisma";

import getImgURL from "../../src/utils/getImgURL";

const Product: NextPage = ({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <SEO
        title={product.name}
        description={product.description}
        image={getImgURL(product.image.desktop)}
        url={`https://audiophile-morales.netlify.app/product/${product.slug}`}
      />

      <ContainerMargins>
        <ProductPage product={product} />
      </ContainerMargins>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await prisma.product.findMany({
    select: {
      slug: true,
    },
  });

  const paths = slugs.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = await prisma.product.findUnique({
    where: {
      slug: params?.slug as string | undefined,
    },
    include: {
      category: {
        select: { name: true },
      },
      categoryImg: {
        select: {
          mobile: true,
          tablet: true,
          desktop: true,
        },
      },
      image: {
        select: {
          mobile: true,
          tablet: true,
          desktop: true,
        },
      },
      gallery: {
        select: {
          first: {
            select: {
              mobile: true,
              tablet: true,
              desktop: true,
            },
          },
          second: {
            select: {
              mobile: true,
              tablet: true,
              desktop: true,
            },
          },
          third: {
            select: {
              mobile: true,
              tablet: true,
              desktop: true,
            },
          },
        },
      },
      includes: {
        select: {
          quantity: true,
          item: {
            select: {
              name: true,
            },
          },
        },
      },
      others: {
        select: {
          other: {
            select: {
              name: true,
              slug: true,
              image: {
                select: {
                  mobile: true,
                  tablet: true,
                  desktop: true,
                },
              },
            },
          },
        },
      },
    },
  });

  return { props: { product } };
};

export default Product;
