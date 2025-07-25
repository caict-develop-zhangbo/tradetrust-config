import { CHAIN_ID } from "@tradetrust-tt/tradetrust-utils/constants/supportedChains";

// addresses exists as txt-records in respective domains
export const buildData = [
  // Stability testnet
  {
    chainId: "20180427" as CHAIN_ID,
    documentStoreAddress: "0x71D28767662cB233F887aD2Bb65d048d760bA694",
    tokenRegistryAddress: "0xA594f6e10564e87888425c7CC3910FE1c800aB0B",
    dnsVerifiable: "example.tradetrust.io",
    dnsTransferableRecord: "example.tradetrust.io",
    dnsDid: "example.tradetrust.io",
  },
  // Stability mainnet
  {
    chainId: "101010" as CHAIN_ID,
    documentStoreAddress: "0xA594f6e10564e87888425c7CC3910FE1c800aB0B",
    tokenRegistryAddress: "0x71D28767662cB233F887aD2Bb65d048d760bA694",
    dnsVerifiable: "example.tradetrust.io",
    dnsTransferableRecord: "example.tradetrust.io",
    dnsDid: "example.tradetrust.io",
  },
  // XDC Apothem Testnet
  {
    chainId: "51" as CHAIN_ID,
    documentStoreAddress: "0x93092C2B449712281008112870063fF439367C00",
    tokenRegistryAddress: "0x71D28767662cB233F887aD2Bb65d048d760bA694",
    dnsVerifiable: "example.tradetrust.io",
    dnsTransferableRecord: "example.tradetrust.io",
    dnsDid: "example.tradetrust.io",
  },
  // Sepolia
  {
    chainId: "11155111" as CHAIN_ID,
    documentStoreAddress: "0x71D28767662cB233F887aD2Bb65d048d760bA694",
    tokenRegistryAddress: "0x142Ca30e3b78A840a82192529cA047ED759a6F7e",
    dnsVerifiable: "example.tradetrust.io",
    dnsTransferableRecord: "example.tradetrust.io",
    dnsDid: "example.tradetrust.io",
  },
  // Local
  {
    chainId: "1337" as CHAIN_ID, // local network will skip dns verifier
    documentStoreAddress: "0x63a223e025256790e88778a01f480eba77731d04",
    tokenRegistryAddress: "0x9Eb613a88534E2939518f4ffBFE65F5969b491FF",
    dnsVerifiable: "example.com",
    dnsTransferableRecord: "example.com",
    dnsDid: "example.com",
  },
  // Amoy
  {
    chainId: "80002" as CHAIN_ID,
    documentStoreAddress: "0x93092C2B449712281008112870063fF439367C00",
    tokenRegistryAddress: "0x71D28767662cB233F887aD2Bb65d048d760bA694",
    dnsVerifiable: "example.tradetrust.io",
    dnsTransferableRecord: "example.tradetrust.io",
    dnsDid: "example.tradetrust.io",
  },
  // Astron
  {
    chainId: "1338" as CHAIN_ID,
    documentStoreAddress: "0xc98d993271a997384889dd39c14cec0c1e0206c2",
    tokenRegistryAddress: "0x18bc0127Ae33389cD96593a1a612774fD14c0737",
    dnsVerifiable: "astronlayer2.bitfactory.cn",
    dnsTransferableRecord: "astronlayer2.bitfactory.cn",
    dnsDid: "astronlayer2.bitfactory.cn",
  },
  // AstronTestnet
  {
    chainId: "21002" as CHAIN_ID,
    documentStoreAddress: "0x4B50C321ef50A304b0A6DDd668D0527EbECb2b04",
    tokenRegistryAddress: "0x5c982da631104Dd6C1E2784e4545511F231d5d31",
    dnsVerifiable: "example.tradetrust.io",
    dnsTransferableRecord: "example.tradetrust.io",
    dnsDid: "example.tradetrust.io",
  },
];
