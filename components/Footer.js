import React from "react";
import Link from "next/link";

const Footer = () => {
  const styles = {
    footerContainer: `bg-[#04111D] text-white p-6`,
    footerSubContainer: `flex flex-row justify-center items-center`,
    footerlink: `font-bold mr-10 cursor-pointer hover:text-[#cfcfcf]`,
    footerheaderline: `w-11/12 opacity-40`,
  };

  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerSubContainer}>
        <Link href='/collections/0xb48d160bAAD486eeAC21f0Df81A2f582FD5D84Fe'>
          <div className={styles.footerlink}>Collections</div>
        </Link>
        <Link href='/stats'>
          <div className={styles.footerlink}>Stats</div>
        </Link>
        <Link href='/resources' className={styles.footerlink}>
          <div className={styles.footerlink}>Resources</div>
        </Link>
        <Link href='/about' className={styles.footerlink}>
          <div className={styles.footerlink}>About</div>
        </Link>
      </div>

      <div className='flex items-center justify-center pt-2 opacity-20 w-100'>
        <hr className={styles.footerheaderline} />
      </div>

      <div className='w-100 flex items-center justify-between mt-3'>
        <div>
          <p className='text-xs font-bold'>@2020 DigiNFT</p>
        </div>

        <div className='flex'>
          <p className='text-xs font-bold mr-5 cursor-pointer'>
            Privacy Policy
          </p>
          <p className='text-xs font-bold cursor-pointer'>
            Terms and Conditions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
