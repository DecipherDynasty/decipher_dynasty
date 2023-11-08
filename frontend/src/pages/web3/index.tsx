// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import CardUser2 from 'src/views/cards2/CardUser'
import CardImgTop from 'src/views/cards2/CardImgTop'
import CardMobile from 'src/views/cards2/CardMobile'
import CardSupport from 'src/views/cards2/CardSupport'
import CardTwitter from 'src/views/cards2/CardTwitter'
import CardFacebook from 'src/views/cards2/CardFacebook'
import CardLinkedIn from 'src/views/cards2/CardLinkedIn'
import CardAppleWatch from 'src/views/cards2/CardAppleWatch'
import CardMembership from 'src/views/cards2/CardMembership'
import CardInfluencer from 'src/views/cards2/CardInfluencer'
import CardNavigation from 'src/views/cards2/CardNavigation'
import CardWithCollapse from 'src/views/cards2/CardWithCollapse'
import CardVerticalRatings from 'src/views/cards2/CardVerticalRatings'
import CardNavigationCenter from 'src/views/cards2/CardNavigationCenter'
import CardHorizontalRatings from 'src/views/cards2/CardHorizontalRatings'

const CardBasic = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ paddingBottom: 4 }}>
        <Typography variant='h5'>Navigating Web3</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardImgTop />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardUser2 />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardWithCollapse />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CardMobile />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CardHorizontalRatings />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardAppleWatch />
      </Grid>
      <Grid item xs={12} md={8}>
        <CardMembership />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardInfluencer />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardVerticalRatings />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardSupport />
      </Grid>
      <Grid item xs={12} sx={{ pb: 4, pt: theme => `${theme.spacing(17.5)} !important` }}>
        <Typography variant='h5'>Learn More</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardTwitter />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardFacebook />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardLinkedIn />
      </Grid>
    </Grid>
  )
}

export default CardBasic
