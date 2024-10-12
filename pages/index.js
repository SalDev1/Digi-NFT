import { useWeb3 } from "@3rdweb/hooks";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { Drops, Footer, Header, Hero, MidSection } from "../components";
import DigiNFTLogo from "../images/opensea-logo.png";
import { client } from "../lib/sanityClient";
import toast, { Toaster } from "react-hot-toast";

const styles = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen bg-[#3b3d42]`,
  logoWrapper: `flex flex-row items-center py-4 justify-center`,
  logoText: `ml-1.5 text-white font-bold text-3xl`,
  button: `border-[#282b2f] bg-[#2081e2] p-[0.9rem] text-md font-bold rounded-xl cursor-pointer text-white`,
  details: `text-lg text-center text-white font-normal mt-4`,
};

export default function Home() {
  const { address, connectWallet } = useWeb3();
  // This help us in checking whether the user is login or not.

  // I want grab the details of the login user.
  console.log(address);

  // const welcomeUser = (userName, toastHandler = toast) => {
  //   toastHandler.success(
  //     `Welcome ${userName !== "Admin" ? `, ${userName}` : ""} 👋`,
  //     {
  //       style: {
  //         background: "#04111d",
  //         color: "#fff",
  //       },
  //     }
  //   );
  // };

  // useEffect(() => {
  //   if (!address) return;
  //   (async () => {
  //     const userDoc = {
  //       _type: "users",
  //       _id: address,
  //       userName: "Admin",
  //       walletAddress: address,
  //     };

  //     const result = await client.createIfNotExists(userDoc);
  //     console.log(result);
  //     welcomeUser(result.userName);
  //   })();
  // }, [address]);

  //(() => 2)() Immediate Invoke Functional Expressions.

  return (
    <div className={styles.wrapper}>
      <Toaster position='top-center' reverseOrder={false} />
      <>
        <Header />
        <Hero />
        <Drops />
        <MidSection />
        <Footer />
      </>
    </div>
  );
}
