import {
  ShyftSdk,
  Network,
  signAndSendTransaction,
  signAndSendTransactionWithPrivateKeys,
} from "@shyft-to/js";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import { clusterApiUrl, Connection, Transaction } from "@solana/web3.js";
import { Buffer } from "buffer";



const shyft = new ShyftSdk({
  apiKey: import.meta.env.VITE_PRIVATE_KEY,
  network: Network.Devnet,
});

export const ShyftService = {
  getBalance: async (walletAddress) =>
    await shyft.wallet.getTokenBalance({
      wallet: walletAddress,
      token: import.meta.env.VITE_TOKEN_ADDRESS,
    }),
  airdrop: async () => {
    const res = await shyft.token.airdrop({
      network: Network.Devnet,
      fromAddress: "EbGWwCXS4YqRp2Kq7cYPuFmJsboPwJv4KeoyrV3cW45m",
      tokenAddress: "5Ab6Q8TL2qgzEQNnnbYYk4SLeKTiV5qRYyoaJ7bCc2v6",
      transferTo: [
        {
          toAddress: "2EDW3poG156KuZxN9jdgGVsLkKvBjnaRyod2ymxDRALd",
          amount: 1,
        },
      ],
    });
    return res;
  },
  getActiveListings: async (size = 6, page = 1) =>
    await shyft.marketplace.listing.active({
      network: Network.Devnet,
      marketplaceAddress: import.meta.env.VITE_MARKET_ADDRESS,
      sortBy: "price",
      sortOrder: "desc",
      page: page,
      size: size,
    }),
  getDetailNFTOfMarket: async (id) => {
    return await shyft.marketplace.listing.detail({
      network: Network.Devnet,
      marketplaceAddress: import.meta.env.VITE_MARKET_ADDRESS,
      listState: id,
    });
  },
  createNFT: async (data, walletAddress) => {
    const nftCreate = await shyft.nft.createV2({
      network: Network.Devnet,
      creatorWallet: walletAddress,
      ...data,
    });
    console.log(nftCreate);
    const { encoded_transaction } = await shyft.marketplace.listing.list({
      marketplaceAddress: import.meta.env.VITE_MARKET_ADDRESS,
      nftAddress: "7Ros6azxoYakj3agxZetDwTWySftQeYXRXAKYWgXTWvw",
      price: price,
      sellerWallet: walletAddress,
      isGasLess: true,
    });
    return encoded_transaction;
  },
  getNftbyMint: async (id) => await shyft.nft.getNftByMint({ mint: id }),
  signContract: async (encodedTransaction) => {
    const wallet = new PhantomWalletAdapter();
    await wallet.connect();
    const rpcUrl = clusterApiUrl("devnet");
    const connection = new Connection(rpcUrl, "confirmed");
    const recoveredTransaction = Transaction.from(
      Buffer.from(encodedTransaction, "base64")
    );
    const signedTx = await wallet.signTransaction(recoveredTransaction);
    const confirmTransaction = await connection.sendRawTransaction(
      signedTx.serialize()
    );
    return confirmTransaction;
  },
  signWithPrivate: async (encodedTransaction) => {
    const network = Network.Devnet;
    const privateKeys = [import.meta.env.VITE_PRIVATE_WAL_KEY];
    return await signAndSendTransactionWithPrivateKeys(
      network,
      encodedTransaction,
      privateKeys
    );
  },
  getList: async () => {
    return await shyft.wallet.getPortfolio({ wallet: 'CkJ5zFJEvmbCLXR3trcYgKYg1BQ6nPEX1aiowz37rkqF' })
  }
};

