import React, { useState, useEffect } from 'react'

import { useStateContext } from 'src/context'

const ConnectWallet = () => {
  const { connect, contract } = useStateContext()

  return (
    <div>
      <button onClick={() => connect()}>Connect</button> {/* for metamask */}
    </div>
  )
}

export default ConnectWallet
