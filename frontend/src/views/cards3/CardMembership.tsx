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
              Request A Demo
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: 2.75 }}></Typography>
            <Typography variant='body2' sx={{ marginBottom: 2.75 }}>
              A comprehensive walk-through – At ScanGuard, we understand that every business has unique needs. That’s
              why we offer customized demos that highlight aspects of our platform that will best suit your business’
              requirements.
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: 2.75 }}>
              Q&A session – Speak to a ScanGuard expert and get immediate answers and insights for how ScanGuard can
              best serve your business needs.
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: 2.75 }}>
              Interactive discussion – This is not simply a demo. We want to have a conversation with you to learn more
              about your business and how we can work with you to get the most out of the ScanGuard platform.
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
                <img
                  width={310}
                  height={300}
                  src='https://classplusapp.com/growth/wp-content/uploads/2022/05/5-Tips-for-teachers-to-make-best-demo-lectures-for-their-coaching-centre.jpg'
                />
              </CardContent>
              {/* <Typography variant='body2' sx={{ mb: 13.75, display: 'flex', flexDirection: 'column' }}>
                <span>5 Tips For Offshore</span>
                <span>Software Development</span>
              </Typography> */}
              <Button variant='contained' onClick={approveEvent}>
                Request Demo
              </Button>
            </Box>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}

export default CardMembership
