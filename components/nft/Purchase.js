import React from "react";
import { useEffect, useState, useMemo } from "react";
import { HiTag } from "react-icons/hi";
import { IoMdWallet } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";

const style = {
  button: `mr-8 flex items-center py-2 px-12 rounded-lg cursor-pointer`,
  buttonIcon: `text-xl`,
  buttonText: `ml-2 text-lg font-semibold`,
};

const Purchase = ({ isListed, selectedNft, listings, marketPlaceModule }) => {
  const [selectedMarketNft, setSelectedMarketNft] = useState();
  const [enableButton, setEnableButton] = useState(true);

  console.log(isListed);

  // console.log(selectedNft);
  // console.log(selectedMarketNft);

  useEffect(() => {
    if (!selectedNft) return;
    if (!listings || isListed === "false") return;

    (async () => {
      setSelectedMarketNft(
        listings.find((marketNft) => marketNft.asset?.id === selectedNft?.id)
      );
    })();
  }, []);

  useEffect(() => {
    if (!selectedMarketNft || !selectedNft) return;

    setEnableButton(true);
  }, [selectedMarketNft, selectedNft]);

  // Toaster Notification
  const confirmPurchase = (toastHandler = toast) => {
    toastHandler.success("Purchase successful", {
      style: {
        background: "#04111d",
        color: "#fff",
      },
    });
  };

  const buyItem = async (
    listingId = selectedNft?.id,
    quantityDesired = 1,
    module = marketPlaceModule
  ) => {
    console.log(listingId, quantityDesired, module);

    try {
      await module
        .buyoutDirectListing({
          listingId,
          quantityDesired,
        })
        .catch((error) => console.error(error));

      confirmPurchase();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='bg-[#303339] h-20 w-full flex items-center px-12 rounded-lg border-[#151c22]'>
      <Toaster position='top-center' reverseOrder={false} />
      {isListed === "true" ? (
        <>
          <div
            onClick={() => {
              enableButton
                ? buyItem(selectedMarketNft?.id, 1, marketPlaceModule)
                : null;
            }}
            className={`${style.button} bg-[#2081e2] hover:bg-[#42a0ff]`}>
            <IoMdWallet className={style.buttonIcon} />
            <div className={style.buttonText}>Buy Now</div>
          </div>

          <div
            className={`${style.button} border border-[#151c22] bg-[#363840] hover:bg-[#4c505c]`}>
            <HiTag className={style.buttonIcon} />
            <div className={style.buttonText}>Make Offer</div>
          </div>
        </>
      ) : (
        <div className={`${style.button} bg-[#2081e2] hover:bg-[#42a0ff]`}>
          <IoMdWallet className={style.buttonIcon} />
          <div className={style.buttonText}>List Item</div>
        </div>
      )}
    </div>
  );
};

export default Purchase;
