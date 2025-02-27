import {
  GeneralDetails,
  Header,
  ItemActivity,
  NFTImage,
  Purchase,
} from "../../components";
import React, { useState, useEffect, useMemo } from "react";
import { useWeb3 } from "@3rdweb/hooks";
import { ThirdwebSDK } from "@3rdweb/sdk";
import { useRouter } from "next/router";

const style = {
  wrapper: `flex flex-col items-center container-lg  text-[#e5e8cb]`,
  container: `container p-6`,
  topContent: `flex`,
  nftImgContainer: `flex-1  mr-4`,
};

const Nft = () => {
  const { provider } = useWeb3();
  const [selectedNft, setSelectedNft] = useState();
  const [listings, setListings] = useState([]);
  const router = useRouter();

  const nftModule = useMemo(() => {
    if (!provider) return;

    //Getting the NFT Collection.
    const sdk = new ThirdwebSDK(
      provider.getSigner(),
      "https://eth-rinkeby.alchemyapi.io/v2/X5mLgFxafWh2mq_Jf3OmII6ifqmPXN6U"
    );
    return sdk.getNFTModule(`${process.env.NEXT_PUBLIC_NFT_CLUB}`);
  }, [provider]);

  useEffect(() => {
    if (!nftModule) return;

    (async () => {
      const nfts = await nftModule.getAll();

      const selectedNFTItem = nfts.filter(
        (nft) => nft?.id === router?.query?.nftId
      );

      setSelectedNft(selectedNFTItem[0]);
    })();
  }, [nftModule]);

  const marketPlaceModule = useMemo(() => {
    if (!provider) return;
    //Getting the NFT MarketPlace.
    const sdk = new ThirdwebSDK(
      provider.getSigner(),
      "https://eth-rinkeby.alchemyapi.io/v2/X5mLgFxafWh2mq_Jf3OmII6ifqmPXN6U"
    );
    const marketplace = sdk.getMarketplaceModule(
      `${process.env.NEXT_PUBLIC_MARKETPLACE_ADDRESS}`
    );
    return marketplace;
  }, [provider]);

  useEffect(() => {
    if (!marketPlaceModule) return;
    (async () => {
      setListings(await marketPlaceModule.getAllListings());
    })();
  }, [marketPlaceModule]);

  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.topContent}>
            <div className={style.nftImgContainer}>
              <NFTImage selectedNft={selectedNft} />
            </div>
            <div className={style.detailsContainer}>
              <GeneralDetails selectedNft={selectedNft} />
              <Purchase
                isListed={router.query.isListed}
                selectedNft={selectedNft}
                listings={listings}
                marketPlaceModule={marketPlaceModule}
              />
            </div>
          </div>
          <ItemActivity />
        </div>
      </div>
    </div>
  );
};

export default Nft;
