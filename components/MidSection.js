import React from "react";
import { BiWallet } from "react-icons/bi";
import { FaShapes } from "react-icons/fa";
import { BsFillImageFill, BsFillTagsFill } from "react-icons/bs";

const MidSection = () => {
  const style = {
    sectionContainer: `flex-column justify-center items-center pt-12 pb-12 bg-white overflow-none`,
  };

  const data = [
    {
      id: 1,
      blockIcon: <BiWallet size={60} color='#1868b7' />,
      title: "Set up your wallet",
      description:
        "Once you’ve set up your wallet of choice, connect it to DigiNFT by clicking the wallet icon in the top right corner. Learn about the wallets we support.",
    },
    {
      id: 2,
      blockIcon: <FaShapes size={60} color='#1868b7' />,
      title: "Create your collection",
      description:
        "Click Collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.",
    },
    {
      id: 3,
      blockIcon: <BsFillImageFill size={60} color='#1868b7' />,
      title: "Add your NFTs",
      description:
        "Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content",
    },
    {
      id: 4,
      blockIcon: <BsFillTagsFill size={60} color='#1868b7' />,
      title: "List them for sale",
      description:
        " You choose how you want to sell your NFTs, and we help you sell them ! Choose between auctions, fixed-price listings, and declining-price listings. ",
    },
  ];

  return (
    <div className={style.sectionContainer}>
      <div className='font-bold text-3xl text-center pb-20'>
        Create and sell your <span className='text-[#1868b7]'>NFTs.</span>
      </div>

      <div className='flex flex-row items-center justify-evenly py-5 md:flex-wrap section_card'>
        {data?.map((data) => (
          <div
            className='flex flex-col justify-center items-center sm:my-6'
            key={data.id}>
            {data?.blockIcon}
            <h4 className='font-semibold py-2 text-xl'>{data?.title}</h4>
            <p className='w-72 text-center text-sm text-[#7c7c7c] font-medium'>
              {data?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MidSection;
