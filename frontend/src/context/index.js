import React, { useContext, createContext } from 'react'

import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
} from '@thirdweb-dev/react'

const StateContext = createContext()

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract('0x108AC7a5b659d5B2a8b7d8D513c8752EC3eF8481')


  const address = useAddress()
  const connect = useMetamask()
  const report = 'App'

  // FUNCTION

  // 1. issueBusinessCertificate()

  const { mutateAsync: issueBusinessCertificate } = useContractWrite(contract, 'issueBusinessCertificate')

  const issueBusinessCertificateFunction = async form => {
    const { certificateID, issuanceDate, businessInfo } = form

    try {
      const data = await issueBusinessCertificate({
        args: [certificateID, issuanceDate, businessInfo]
      })
      console.info('contract call successs', data)
    } catch (err) {
      console.error('contract call failure', err)
    }
  }

  // GET PROPERTIES DATA SECTION

  const getBusinessCertificateInfo = async certificateID => {
    try {
      const data = await contract.call('getBusinessCertificateInfo', [certificateID])
      console.log(data)

      return data
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <StateContext.Provider
      value={{
        address,
        connect,
        contract,
        report,
        issueBusinessCertificateFunction,
        getBusinessCertificateInfo // read
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
