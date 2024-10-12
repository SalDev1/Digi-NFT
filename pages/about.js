import React from "react";
import { Footer, Header } from "../components";
import DigiNFTAbout from "../images/diginft_about_logo.png";
import Image from "next/image";

const About = () => {
  const styles = {
    aboutContainer: `w-full h-auto bg-white flex flex-row justify-center items-center py-40 px-20`,
    aboutSectionLeft: `flex-col justify-start items-center`,
    aboutSectionRight: `w-full h-full`,
  };

  return (
    <div>
      <Header />
      <div className={styles.aboutContainer}>
        <div className={styles.aboutSectionLeft}>
          <h1 className='text-5xl pb-10 w-2/3 font-semibold'>
            Building an Open Digital Economy
          </h1>
          <p className='w-2/3'>
            {" "}
            At DigiNFT, we're excited about a brand new type of digital good
            called a non-fungible token, or NFT. NFTs have exciting new
            properties: they’&re unique, provably scarce, tradeable, and usable
            across multiple applications. Just like physical goods, you can do
            whatever you want with them! You could throw them in the trash, gift
            them to a friend across the world, or go sell them on an open
            marketplace. But unlike physical goods, they're armed with all the
            programmability of digital goods.
          </p>
          <p className='w-2/3 pt-3'>
            A core part of our vision is that open protocols like Ethereum and
            interoperable standards like ERC-721 and ERC-1155 will enable
            vibrant new economies. We're building tools that allow consumers to
            trade their items freely, creators to launch new digital works, and
            developers to build rich, integrated marketplaces for their digital
            items. We’re proud to be the first and largest marketplace for NFTs.
          </p>
        </div>
        <div className={styles.aboutSectionRight}>
          <Image src={DigiNFTAbout} alt='' className='object-cover' />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
