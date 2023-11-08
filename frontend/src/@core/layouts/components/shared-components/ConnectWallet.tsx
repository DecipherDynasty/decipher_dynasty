import React from 'react'
import { useStateContext } from 'src/context'

const ConnectWallet = () => {
  const { connect } = useStateContext()

  return (
    <div>
      <button onClick={connect}>Connect</button> {/* for metamask */}
    </div>
  )
}

export default ConnectWallet
