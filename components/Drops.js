import React from "react";
import BirdImage from "../images/bird.jpg";
import MonkeyImage from "../images/monkey.jpg";
import ItalyImage from "../images/italy.jpg";
import Image from "next/image";

const Drops = () => {
  const styles = {
    container: `pt-36 pb-12 bg-white flex flex-col justify-center items-center`,
    sectionTitle: `flex w-100`,
    dropCardsContainer: `flex flex-row justify-between items-center cursor-pointer drop-shadow-lg`,
    dropCardContent: `border-0 py-4 rounded-bl-2xl rounded-br-2xl bg-[#1868b7] m-0`,
  };

  const drops_data = [
    {
      id: 1,
      title: "JAPES",
      description: "ART3.io James Mollison's limited-edition photographs",
      url: MonkeyImage,
    },
    {
      id: 2,
      description: "Laura Santiago's Jungle of Dreams",
      url: BirdImage,
    },
    {
      id: 3,
      description: "20 Days of Italy",
      url: ItalyImage,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.sectionTitle}>
        <h1 className='font-bold text-3xl text-center pb-14'>
          Notable <span className='text-[#1868b7]'>Drops</span>
        </h1>
      </div>

      <div className={styles.dropCardsContainer}>
        {drops_data?.map((data) => (
          <div className='flex flex-col p-2 flex-wrap' key={data.id}>
            <Image
              src={data.url}
              width='350px'
              height='420px'
              className='sm:w-auto rounded-tl-2xl rounded-tr-2xl'
            />
            <div className={styles.dropCardContent}>
              <p className='pl-2 font-bold text-xs text-white'>
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drops;
