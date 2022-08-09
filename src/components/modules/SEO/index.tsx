import Head from "next/head";

type Props = {
  title: string;
  description: string;
  image: string;
  url: string;
};

const SEO = ({ title, description, image, url }: Props) => {
  return (
    <Head>
      <title>Audiophile | {title}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={`Audiophile | ${title}`} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={image} />
      <meta name="og:url" content={url} />
      <link rel="canonical" href={url} />
    </Head>
  );
};

export default SEO;
