import React from "react";
import { Footer, Header } from "../components";
import { BsSearch } from "react-icons/bs";

const Resources = () => {
  const styles = {
    container:
      "w-full h-auto flex flex-col justify-center items-center py-20 bg-white",
    searchInputBar: `w-3/5 flex flex-row justify-center items-center rounded-lg border-2 border-slate-200 px-2 drop-shadow-md`,
    cardsContainer: `w-5/6 flex flex-row justify-evenly item-center md:flex-wrap mt-4`,
  };

  const resources_cards = [
    {
      id: 1,
      title: "Getting Started",
      description:
        "Learn how to create an account , set up your wallet , and what you can do on DigiNFT",
    },
    {
      id: 2,
      title: "Buying",
      description:
        "Learn how to purchase your first NFT and understand gas fees and what's gas fee on DigiNFT",
    },
    {
      id: 3,
      title: "Selling",
      description:
        "Learn how list your NFTs for sale and understand the different ways to list your NFTs",
    },
    {
      id: 4,
      title: "Creating",
      description:
        "Learn how to create your very first NFT and how to create your NFT collections",
    },
    {
      id: 5,
      title: "FAQ",
      description: "Learn answers to frequently asked questions on DigiNFT",
    },
    {
      id: 6,
      title: "User Safety",
      description:
        "Learn how you can partnenr with us to showcase your NFT drops",
    },
  ];

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.searchInputBar}>
          <BsSearch size={24} />
          <input
            size={24}
            type='text'
            className='pl-2 w-full text-black outline-none px-2 py-4 rounded-lg bg-transparent'
          />
        </div>

        <div className={styles.cardsContainer}>
          {resources_cards.map((data) => (
            <div
              className='border-2 border-gray-200 w-1/4 h-72 flex flex-col justify-center items-center rounded-lg m-1 cursor-pointer hover:drop-shadow-lg'
              key={data.id}>
              <h1 className='text-[24px] font-bold text-center text-[#398EE2]'>
                {data?.title}
              </h1>
              <p className='w-2/3 text-center text-[14px]'>
                {data?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resources;
