import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import TrendingUp from 'mdi-material-ui/TrendingUp'
import StarOutline from 'mdi-material-ui/StarOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'
import CardMedia from '@mui/material/CardMedia'
import React, { useCallback } from 'react'

// Styled Box component
const StyledBox = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}))

const CardMembership: React.FC<{
  eventDescription?: string
  eventName?: string
  intendedAmountToRaise?: number
}> = ({ eventName, eventDescription, intendedAmountToRaise }) => {
  /**
   * This method will attempt to upload the data into the chain.
   * If it is successful, we will get the address to store in the
   * database so that we can reference it in the future.
   *
   * TODO: Pending by Tze Loong
   */
  const approveEvent = useCallback(async () => {
    if (typeof window.ethereum === 'undefined') {
      alert('You do not have metamask installed')

      return
    }

    // Get all the accounts associated with the metamask
    await window.ethereum.request({ method: 'eth_requestAccounts' })
  }, [])

  return (
    <Card>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={7}>
          <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5.75, 6.25)} !important` }}>
            <Typography variant='h6' sx={{ marginBottom: 2.75 }}>
              Best Practices and Security Measures
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: 2.75 }}></Typography>
            <Typography variant='body2' sx={{ marginBottom: 2.75 }}>
              Multi-Party Computation (MPC) - The private key is broken up into shares, encrypted, and divided among
              multiple parties.
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: 2.75 }}>
              Hardware Security Modules (HSM) - Single purpose, isolated physical device computer, capable of decrypting
              and signing keys internally.
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: 2.75 }}>
              Smart Contract Wallets - Wallet is controlled by contract code instead of a private key and can be
              equipped with capabilities such as social recovery.
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          sm={5}
          xs={12}
          sx={{ paddingTop: ['0 !important', '1.5rem !important'], paddingLeft: ['1.5rem !important', '0 !important'] }}
        >
          <CardContent
            sx={{
              height: '100%',
              display: 'flex',
              textAlign: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'action.hover'
            }}
          >
            <Box>
              <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img width={250} height={270} src='https://cdn-icons-png.flaticon.com/512/2810/2810114.png' />
              </CardContent>
              {/* <Typography variant='body2' sx={{ mb: 13.75, display: 'flex', flexDirection: 'column' }}>
                <span>5 Tips For Offshore</span>
                <span>Software Development</span>
              </Typography> */}
              <Button variant='contained' onClick={approveEvent}>
                Find Out More
              </Button>
            </Box>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}

export default CardMembership
