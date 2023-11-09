'use client'
import { useState, SyntheticEvent, Fragment, useCallback } from 'react'
import { useRouter } from 'next/router'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import LogoutVariant from 'mdi-material-ui/LogoutVariant'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import WalletOutline from 'mdi-material-ui/WalletOutline'
import { useMetamask, useAddress, useDisconnect } from '@thirdweb-dev/react'
import { signOut } from 'next-auth/react'

const BadgeContentSpan = styled('span')(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: theme.palette.success.main,
  boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
}))

const UserDropdown = () => {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null)
  const router = useRouter()

  // Chain hooks
  const connect = useMetamask()
  const disconnect = useDisconnect()
  const address = useAddress()

  /**
   * The signout logic of our app. When the user clicks on it, he will disconnect from
   * the wallet if he is connected in the first place, and signout of the next auth.
   */
  const signout = useCallback(async () => {
    try {
      // If the user has connected his wallet, we disconnect it first prior to logout from out system.
      if (address !== undefined) await disconnect()

      // We sign the user out of our system
      await signOut({
        redirect: false
      })

      router.push('/')
    } catch (e) {
      alert((e as Error).message)
    }
  }, [])

  const handleDropdownOpen = (event: SyntheticEvent) => {
    setAnchorEl(event.currentTarget)
  }

  const handleDropdownClose = (url?: string) => {
    if (url) {
      router.push(url)
    }
    setAnchorEl(null)
  }

  const styles = {
    py: 2,
    px: 4,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    color: 'text.primary',
    textDecoration: 'none',
    '& svg': {
      fontSize: '1.375rem',
      color: 'text.secondary'
    }
  }

  return (
    <Fragment>
      <Badge
        overlap='circular'
        onClick={handleDropdownOpen}
        sx={{ ml: 2, cursor: 'pointer' }}
        badgeContent={<BadgeContentSpan />}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Avatar
          alt='John Doe'
          onClick={handleDropdownOpen}
          sx={{ width: 40, height: 40 }}
          src='/images/avatars/1.png'
        />
      </Badge>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleDropdownClose()}
        sx={{ '& .MuiMenu-paper': { width: 230, marginTop: 4 } }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Box sx={{ pt: 2, pb: 3, px: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Badge
              overlap='circular'
              badgeContent={<BadgeContentSpan />}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <Avatar alt='John Doe' src='/images/avatars/1.png' sx={{ width: '2.5rem', height: '2.5rem' }} />
            </Badge>
            <Box sx={{ display: 'flex', marginLeft: 3, alignItems: 'flex-start', flexDirection: 'column' }}>
              <Typography sx={{ fontWeight: 600 }}>John Doe</Typography>
              <Typography variant='body2' sx={{ fontSize: '0.8rem', color: 'text.disabled' }}>
                Admin
              </Typography>
            </Box>
          </Box>
        </Box>
        <Divider sx={{ mt: 0, mb: 1 }} />
        {address ? (
          <Box sx={styles}>
            <WalletOutline sx={{ marginRight: 2 }} />
            Connected to {address}
          </Box>
        ) : (
          <MenuItem
            sx={{ p: 0 }}
            onClick={async e => {
              try {
                e.preventDefault()

                // If there is already a wallet connected, we should no longer be attempting a connection.
                if (address) return
                await connect()
              } catch (e) {
                alert((e as Error).message)
              }
            }}
          >
            <Box sx={styles}>
              <AccountOutline sx={{ marginRight: 2 }} />
              Connect
            </Box>
          </MenuItem>
        )}
        <MenuItem sx={{ py: 2 }} onClick={signout}>
          <LogoutVariant sx={{ marginRight: 2, fontSize: '1.375rem', color: 'text.secondary' }} />
          Logout
        </MenuItem>
      </Menu>
    </Fragment>
  )
}

export default UserDropdown
