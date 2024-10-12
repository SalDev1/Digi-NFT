import React from 'react'

const styles = {
    wrapper : `relative`,
    container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/H-LDthYRKPWJdIKEI3WrZFFpxetO77jl1ALd3t4BJQ3Qj661B3WfopzTJ1iNtjD4JqjsLLqblkfWNtaHEzRUsCcbLsUZEiVGkNGE=s550')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
    contentWrapper : `flex h-screen relative justify-center flex-wrap items-center`,
    copyContainer : `w-1/2`,
    title : `relative text-white text-[46px] font-bold leading-tight`,
    description : `text-[#c9c9c9] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
    ctaContainer : `flex`,
    accentedButton:`relative text-lg font-bold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#1c64ad] cursor-pointer`,
    button : `relative text-lg font-bold px-12 py-4 bg-white rounded-lg mr-5 text-[#04111D] hover:bg-[#dbdbdb] cursor-pointer `,
    cardContainer : `rouded-[3rem]`,
    infoContainer : `h-21 bg-[#04111D] p-4 rounded-b-lg flex items-center text-white border-sm-gray-500`,
    author: `flex flex-col justify-center ml-4`,
    name :`text-white font-bold`,
    infoIcon : `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
}

const Hero = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                <div className={styles.copyContainer}>
                    <div className={styles.title}>
                        Discover, Collect and Sell Extraordinary NFTS.
                    </div>
                    <div className={styles.description}>
                      DigiNFT is the world&apos;s first and largest NFT marketplace.
                    </div>

                    <div className={styles.ctaContainer}>
                        <button className={styles.button}>
                           Explore
                        </button>
                        <button className={styles.accentedButton}>
                            Create
                        </button>
                    </div>
                </div>
                <div className={styles.cardContainer}>
                    <img className='rounded-t-lg' src = "https://lh3.googleusercontent.com/H-LDthYRKPWJdIKEI3WrZFFpxetO77jl1ALd3t4BJQ3Qj661B3WfopzTJ1iNtjD4JqjsLLqblkfWNtaHEzRUsCcbLsUZEiVGkNGE=s550" alt = "/"/>
                    <div className={styles.infoContainer}>
                          <img 
                          className='h-{2.25rem} rounded-full'
                          src = "https://lh3.googleusercontent.com/vlwJvLR-2R2YhO3t8ROoGngbgMaADLCe5FsOrb5hrgbxIW6rhEneeY79pI7GUS1vj_05XDOjke9Da_GdE1jdtyhWgEW71DSBlevsMg=s80"/>

                          <div className={styles.author}>
                              <div className={styles.name}>Dreams</div>
                              <a className='text-[#1868b7] font-bold' href = "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/2682286971963689196555642600990882324412171456684959899575241281247824052230">MedlaVNH</a>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero