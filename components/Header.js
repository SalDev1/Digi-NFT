import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import DigiNFTLogo from "../images/opensea-logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { useWeb3 } from "@3rdweb/hooks";
import toast, { Toaster } from "react-hot-toast";
import { client } from "../lib/sanityClient";

//Tailwind css styling
const styles = {
  wrapper: `bg-[#04111d] w-screen px-[1.2rem] py-[0.8rem] flex`,
  logoContainer: `flex items-center cursor-pointer`,
  logoText: ` ml-[0.8rem] text-white font-bold text-2xl`,
  searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
  searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
  headerItems: ` flex items-center justify-end`,
  headerItem: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
  headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
  navboxlink_1: `font-bold py-3 px-3 cursor-pointer`,
  navboxlink_2: `font-bold py-3 px-3 cursor-pointer`,
};

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { address, disconnectWallet, connectWallet } = useWeb3();

  const isOpen = () => {
    setToggle(!toggle);
  };

  const welcomeUser = (userName, toastHandler = toast) => {
    toastHandler.success(
      `Welcome ${userName !== "Admin" ? `, ${userName}` : ""} 🚀`,
      {
        style: {
          background: "#04111d",
          color: "#fff",
        },
      }
    );
  };

  const disconnectingUser = (userName, toastHandler = toast) => {
    disconnectWallet();

    toastHandler.error(`Disconnected`, {
      style: {
        background: "#04111d",
        color: "#fff",
      },
    });
  };

  const connectingUserWallet = () => {
    connectWallet("injected");

    welcomeUser("");
  };

  useEffect(() => {
    if (!address) return;
    (async () => {
      const userDoc = {
        _type: "users",
        _id: address,
        userName: "Admin",
        walletAddress: address,
      };

      const result = await client.createIfNotExists(userDoc);
      console.log(result);
      welcomeUser(result.userName);
    })();
  }, [address]);

  return (
    <div className={styles.wrapper}>
      <Link href='/'>
        <div className={styles.logoContainer}>
          <Image src={DigiNFTLogo} height={40} width={40} />
          <div className={styles.logoText}>
            Digi<span className=' text-[#398ee2]'>NFT</span>
          </div>
        </div>
      </Link>

      <div className={styles.searchBar}>
        <div className={styles.searchIcon}>
          <AiOutlineSearch />
        </div>

        <input
          className={styles.searchInput}
          placeholder='Search Items , collections and accounts'
        />
      </div>

      <div className={styles.headerItems}>
        <Link href='/collections/0xb48d160bAAD486eeAC21f0Df81A2f582FD5D84Fe'>
          <div className={styles.headerItem}> Collections</div>
        </Link>
        <Link href='/stats'>
          <div className={styles.headerItem}> Stats </div>
        </Link>
        <Link href='/resources'>
          <div className={styles.headerItem}> Resources </div>
        </Link>
        <Link href='/about'>
          <div className={styles.headerItem}> About </div>
        </Link>

        <div className={styles.headerIcon} onClick={isOpen}>
          <CgProfile />
        </div>

        <div className={styles.headerIcon}>
          <MdOutlineAccountBalanceWallet />
        </div>
      </div>

      {toggle ? (
        <div className='absolute justify-center items-center w-auto h-auto bg-[#04111D] text-white right-10 top-16 rounded-md z-50'>
          <p className={styles.navboxlink_1} onClick={connectingUserWallet}>
            Connect
          </p>
          <hr className='border-slate-500' />
          <p className={styles.navboxlink_2} onClick={disconnectingUser}>
            Disconnect
          </p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
