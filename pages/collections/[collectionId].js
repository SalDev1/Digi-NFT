import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useWeb3 } from "@3rdweb/hooks";
import { ThirdwebSDK } from "@3rdweb/sdk";
import { client } from "../../lib/sanityClient";
import { Footer, Header, NFTCard } from "../../components";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { HiDotsVertical } from "react-icons/hi";

const style = {
  bannerImageContainer: `h-[20vh] w-screen overflow-hidden flex justify-center items-center`,
  bannerImage: `w-full object-cover`,
  infoContainer: `h-full w-screen px-4`,
  midRow: `w-full flex justify-center text-white mt-2`,
  endRow: `flex justify-end text-white`,
  profileImg: `w-40 h-40 object-cover rounded-full border-2 border-[#202225] mt-[-4rem]`,
  socialIconsContainer: `flex text-3xl mb-[-2rem]`,
  socialIconsWrapper: `w-44`,
  socialIconsContent: `flex container justify-between text-[1.4rem] border-2 rounded-lg px-2  flex-column-reverse`,
  socialIcon: `lg:m-3 cursor-pointer sm:m-1`,
  divider: `border-r-2`,
  title: `text-5xl font-bold leading-0`,
  createdBy: `text-lg mb-4`,
  statsContainer: `w-[90vw] md:w-[80vw] lg:w-[60vw] flex justify-between py-4 border border-white rounded-xl mb-4`,
  collectionStat: `w-1/4`,
  statValue: `text-3xl font-bold w-full flex items-center justify-center`,
  ethLogo: `h-6 mr-2`,
  statName: `text-lg w-full text-center mt-1`,
  description: `text-[#8a939b] text-xl w-max-1/4 flex-wrap mt-4`,
  // midSection: `flex flex-row justify-center`,
};

const Collection = () => {
  // You can exract params from the URL using this.
  const router = useRouter();
  const { provider } = useWeb3();
  const { collectionId } = router.query;
  const [collection, setCollection] = useState([]);
  const [nfts, setNFts] = useState([]);
  const [listings, setListings] = useState([]);

  console.log(nfts);
  // console.log(listings);
  // console.log(collection);

  //useMemo ===> very similar to the useEffect,
  /*
    Pass a “create” function and an array of dependencies. useMemo will only recompute the memoized 
    value when one of the dependencies has changed. 
   */
  const nftModule = useMemo(() => {
    if (!provider) return;

    //Getting the NFT Collection.
    const sdk = new ThirdwebSDK(
      provider.getSigner(),
      "https://eth-rinkeby.alchemyapi.io/v2/X5mLgFxafWh2mq_Jf3OmII6ifqmPXN6U"
    );
    return sdk.getNFTModule(collectionId);
  }, [provider]);

  // Getting all the nfts in the collection
  useEffect(() => {
    if (!nftModule) return;

    (async () => {
      const nfts = await nftModule.getAll();

      setNFts(nfts);
    })();
  }, [nftModule]);

  //MarketPlace Code
  const marketPlaceModule = useMemo(() => {
    if (!provider) return;

    //Getting the NFT MarketPlace.
    const sdk = new ThirdwebSDK(
      provider.getSigner(),
      "https://eth-rinkeby.alchemyapi.io/v2/X5mLgFxafWh2mq_Jf3OmII6ifqmPXN6U"
    );

    return sdk.getMarketplaceModule(
      `${process.env.NEXT_PUBLIC_MARKETPLACE_ADDRESS}`
    );
  }, [provider]);

  // get all listings in the collection
  useEffect(() => {
    if (!marketPlaceModule) return;

    (async () => {
      try {
        setListings(await marketPlaceModule.getAllListings());
      } catch (error) {}
    })();
  }, [marketPlaceModule]);

  // const query = `
  // *[_type == "marketItems" && contractAddress == "0xb48d160bAAD486eeAC21f0Df81A2f582FD5D84Fe"]
  //  {
  //    "imageUrl" : profileImage.asset->url,
  //    "bannerImageUrl": bannerImage.asset->url,
  //    volumeTraded,
  //    createdBy,
  //    contractAddress,
  //    "creator":createdBy->userName,
  //    title , floorPrice,
  //    "allOwners":owners[]->,
  //    description,
  //  }`;

  //  Getting our collection data or market_items from sanity CMS database.
  const fetchCollectionData = async (sanityClient = client) => {
    const query = `
  *[_type == "marketItems" && contractAddress == "${collectionId}"]
   {
     "imageUrl" : profileImage.asset->url,
     "bannerImageUrl": bannerImage.asset->url,
     volumeTraded,
     createdBy,
     contractAddress,
     "creator":createdBy->userName,
     title , floorPrice,
     "allOwners":owners[]->,
     description,
   }`;
    //We are passing the query in the next line of code.
    const collectionData = await sanityClient.fetch(query);

    console.log(collectionData);
    await setCollection(collectionData[1]);
  };

  useEffect(() => {
    fetchCollectionData();
  }, [collectionId]);

  console.log(listings);

  return (
    <div className='overflow-hidden'>
      <Header />
      <div className={style.bannerImageContainer}>
        <img
          className={style.bannerImage}
          src={
            collection?.bannerImageUrl
              ? collection?.bannerImageUrl
              : "https://via.placeholder.com/200"
          }
        />
      </div>

      <div className={style.infoContainer}>
        <div className={style.midRow}>
          <img
            className={style.profileImg}
            src={
              collection?.imageUrl
                ? collection?.imageUrl
                : "https://via.placholder.com/200"
            }
            alt='profile image'
          />
        </div>

        <div className={style.midSection}>
          <div className={style.endRow}>
            <div className={style.socialIconsContainer}>
              <div className={style.socialIconsContent}>
                <div className={style.socialIcon}>
                  <CgWebsite />
                </div>

                <div className={style.divider} />
                <div className={style.socialIcon}>
                  <AiOutlineInstagram />
                </div>

                <div className={style.divider} />
                <div className={style.socialIcon}>
                  <AiOutlineTwitter />
                </div>

                <div className={style.divider} />
                <div className={style.socialIcon}>
                  <HiDotsVertical />
                </div>
              </div>
            </div>
          </div>

          <div className={style.midRow}>
            <div className={style.title}>{collection?.title}</div>
          </div>

          <div className={style.midRow}>
            <div className={style.createdBy}>Created By {``}</div>
            <span className='text-[#2081e2] text-center text-lg ml-1'>
              {collection?.creator}
            </span>
          </div>
        </div>

        <div className={style.midRow}>
          <div className={style.statsContainer}>
            <div className={style.collectionStat}>
              <div className={style.statValue}>{nfts.length}</div>
              <div className={style.statName}>items</div>
            </div>

            <div className={style.collectionStat}>
              <div className={style.statValue}>
                {collection?.allOwners ? collection?.allOwners.length : ""}
              </div>
              <div className={style.statName}>owners</div>
            </div>

            <div className={style.collectionStat}>
              <div className={style.statValue}>
                <img
                  src='https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg'
                  alt='eth'
                  className={style.ethLogo}
                />
                {collection?.floorPrice}
              </div>

              <div className={style.statName}>Floor Price</div>
            </div>

            <div className={style.collectionStat}>
              <div className={style.statValue}>
                <img
                  src='https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg'
                  alt='eth'
                  className={style.ethLogo}
                />
                {collection?.volumeTraded}.5K
              </div>

              <div className={style.statName}>Volume Traded</div>
            </div>
          </div>
        </div>

        <div className={style.midRow}>
          <div className={style.description}>{collection?.description}</div>
        </div>
      </div>

      <div className='flex flex-wrap'>
        {nfts.map((nftitem, id) => (
          <NFTCard
            key={id}
            nftItem={nftitem}
            title={collection?.title}
            listings={listings}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Collection;
