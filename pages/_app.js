import '../styles/globals.css';
import {ThirdwebWeb3Provider} from "@3rdweb/hooks";



/*
  The chain Id represents the Rinkeby network
  The injected connector is a web3 connection network used by MetaMask.
*/


// Building our chains;
const supportedChainIds = [4];
// We will be injecting our metamask into this.
const connectors = {
  injected : {},
}

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider 
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  );
}

export default MyApp;
