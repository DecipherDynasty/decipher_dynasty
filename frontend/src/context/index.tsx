import React, { createContext } from 'react'
import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
  MetaMaskWallet,
  SmartContract
} from '@thirdweb-dev/react'
import { ethers } from 'ethers'

export const StateContext = createContext<{
  address: string | undefined
  connect: (
    connectOptions?:
      | {
          chainId?: number | undefined
        }
      | undefined
  ) => Promise<MetaMaskWallet>
  contract: SmartContract<ethers.BaseContract> | undefined
  getBusinessCertificateInfo: (certificateID: string) => Promise<Promise<any>> | undefined
  isLoading: boolean
  issueBusinessCertificateFunction: (certificateID: string, issuanceDate: string, businessInfo: string) => Promise<any>
} | null>(null)

/**
 * This state context provider provides a level of abstraction behind the different methods that we will use to interact
 * with the chain, as well as allowing us to use any of these variables or method anywhere in the application.
 */
export const StateContextProvider = ({ children }: { children: JSX.Element }) => {
  // Use environment variable here so that we can change between the different environments easily.
  const { contract } = useContract(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS)
  const { mutateAsync: issueBusinessCertificate, isLoading } = useContractWrite(contract, 'issueBusinessCertificate')
  const address = useAddress()
  const connect = useMetamask()

  /**
   * This method is used to interact with the issueBusinessCertificate method of the contract.
   *
   * @param {string} businessInfo The organisation id.
   * @param {string} issuanceDate The date in ISO8 format.
   * @param {string} certificateID The event id that was generated from the firebase events collection.
   */
  function issueBusinessCertificateFunction(
    certificateID: string,
    issuanceDate: string,
    businessInfo: string
  ): Promise<any> {
    return issueBusinessCertificate({
      args: [certificateID, issuanceDate, businessInfo]
    })
  }

  function getBusinessCertificateInfo(certificateID: string): Promise<Promise<any>> | undefined {
    return contract?.call('getBusinessCertificateInfo', [certificateID])
  }

  return (
    <StateContext.Provider
      value={{
        address,
        connect,
        contract,
        getBusinessCertificateInfo,
        isLoading,
        issueBusinessCertificateFunction
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

