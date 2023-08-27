import React from 'react'
import WalletProvider from './WalletContext'
import LoadingProvider from './LoadingContext'

export default function ProviderWrapper({ children }) {
  return (
    <LoadingProvider>
      <WalletProvider>
        {children}
      </WalletProvider>
    </LoadingProvider>
  )
}
