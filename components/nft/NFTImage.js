import React from "react";
import { IoMdSnow } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";

const style = {
  topBar: `bg-[#303339] p-2 rounded-t-lg border-[#151c22] border rounded-lg mb-2 w-[50vw]`,
  topBarContent: `flex items-center`,
  likesCounter: `flex-1 flex items-center justify-center`,
};

const NFTImage = ({ selectedNft }) => {
  return (
    <div>
      <div className={style.topBar}>
        <div className={style.topBarContent}>
          <IoMdSnow />
          <div className={style.likesCounter}>
            <AiOutlineHeart />
            2.3K
          </div>
        </div>
      </div>

      <div>
        <img src={selectedNft?.image} alt={selectedNft?.name} />
      </div>
    </div>
  );
};

export default NFTImage;
