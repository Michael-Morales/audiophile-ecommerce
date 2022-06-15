import type { NextPage } from "next";
import Link from "next/link";

const Hero: NextPage = () => {
  return (
    <div>
      <p>new product</p>
      <h1>XX99 mark II headphones</h1>
      <p>
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <Link href="/">see product</Link>
    </div>
  );
};

export default Hero;
