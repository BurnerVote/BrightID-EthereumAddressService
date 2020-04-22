import Web3 from "web3";
import Web3Modal from "web3modal";
// @ts-ignore
import WalletConnectProvider from '@walletconnect/web3-provider';
import Authereum from 'authereum';
// @ts-ignore
// import { createKeccakHash } from 'keccak';

const providerOptions = {
  walletconnect: {
      package: WalletConnectProvider,
      options: {
      infuraId: 'f1d9de7ebcd04578b9f5696f04760115'
      }
  },
  authereum: {
      package: Authereum,
      options: {}
  },
};

export const getWeb3 = (): Promise<Web3> => (
    new Promise(async(resolve, reject) => {
      try {
        const web3Modal = new Web3Modal({
          network: 'mainnet',
          theme: {
            background: "#214564",
            main: "#dd866c",
            secondary: "#FFFFFF",
            border: "rgba(195, 195, 195, 0.14)",
            hover: "rgb(39, 49, 56)"
          },
          providerOptions
        })
  
        const provider = await web3Modal.connect()
        let web3 = new Web3(provider)
  
        resolve(web3)
      } catch(e){
        reject(e)
      }
    })
  );

// export const toChecksumAddress = (address: string) => {
//   address = address.toLowerCase().replace('0x', '')
//   let hash = createKeccakHash('keccak256').update(address).digest('hex')
//   let ret = '0x'

//   for (let i = 0; i < address.length; i++) {
//     if (parseInt(hash[i], 16) >= 8) {
//       ret += address[i].toUpperCase()
//     } else {
//       ret += address[i]
//     }
//   }

//   return ret
// }