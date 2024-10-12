import React from "react";
import Image from "next/image";
import { Header, Footer } from "../components";
import nft_collection_data from "../data/collection_data";

const Stats = () => {
  const styles = {
    header_title: `flex flex-col items-center justify-center`,
    statsContainer: `py-8 flex flex-row items-center justify-center`,
    statsRightFacts: `w-[60vw] flex flex-row justify-evenly items-center`,
    statsNFTClubsData: `py-8 flex flex-row items-center justify-center border-y`,
    statsLeftFacts: `flex flex-row justify-center items-center`,
  };

  return (
    <div>
      <Header />
      <div className='h-auto bg-white py-10'>
        <div className={styles.header_title}>
          <h1 className='text-[48px] font-bold'>
            Top <span className='text-[#698ee2]'>NFTs</span>
          </h1>
          <h2 className='pt-3 font-bold text-[16px] tracking-wide text-[#999999]'>
            The top NFTs on DigiNFT, ranked by volume, floor price and other
            statistics.
          </h2>
        </div>

        <div className={styles.statsContainer}>
          <div className={styles.statsLeftFacts}>
            <p className='w-96 font-bold text-xl'>Collection</p>
          </div>

          <div className={styles.statsRightFacts}>
            <div className='font-bold text-lg'>Volume</div>
            <div className='font-bold text-lg'>24hVolume</div>
            <div className='font-bold text-lg'>7hVolume</div>
            <div className='font-bold text-lg'>Floor Price</div>
            <div className='font-bold text-lg'>Owners</div>
            <div className='font-bold text-lg'>Items</div>
          </div>
        </div>

        {nft_collection_data.map((data) => (
          <div className={styles.statsNFTClubsData} key={data.id}>
            <div className={styles.statsLeftFacts}>
              <Image
                src={data?.image}
                alt=''
                height={45}
                width={45}
                className='rounded-full'
              />
              <p className='w-96 text-sm pl-3'>
                {data.id} . {data.collection_name}{" "}
              </p>
            </div>
            <div className={styles.statsRightFacts}>
              <div className='font-normal items-start'>
                <p className='font-normal'>{data?.volume} ETH</p>
              </div>
              <div className='font-normal'>{data?.volumeby24}</div>
              <div className='font-normal text-left'>{data?.volumeby7}</div>
              <div className='font-normal'>{data?.floorprice} ETH</div>
              <div className='font-normal'>{data?.owners}</div>
              <div className='font-normal'>{data?.items}</div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Stats;
