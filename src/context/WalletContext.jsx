import React, { createContext, useState, Provider } from 'react'
export const WalletContext= createContext();
export default function WalletProvider({children}) {
    const [walletAddress,setWalletAddress] = useState(()=>{
        const walletAddress = localStorage.getItem('walletAddress');
        if (walletAddress) {
            return walletAddress
        } else {
            return '';
        }
    })
  return (
    <WalletContext.Provider value={{walletAddress, setWalletAddress}}>
        {children}
    </WalletContext.Provider>
  )
}
