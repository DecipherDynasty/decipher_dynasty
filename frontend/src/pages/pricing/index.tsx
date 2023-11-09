// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import CardUser2 from 'src/views/cards3/CardUser'
import CardImgTop from 'src/views/cards3/CardImgTop'
import CardMobile from 'src/views/cards3/CardMobile'
import CardSupport from 'src/views/cards3/CardSupport'
import CardTwitter from 'src/views/cards3/CardTwitter'
import CardFacebook from 'src/views/cards3/CardFacebook'
import CardLinkedIn from 'src/views/cards3/CardLinkedIn'
import CardAppleWatch from 'src/views/cards3/CardAppleWatch'
import CardMembership from 'src/views/cards3/CardMembership'
import CardInfluencer from 'src/views/cards3/CardInfluencer'
import CardNavigation from 'src/views/cards3/CardNavigation'
import CardWithCollapse from 'src/views/cards3/CardWithCollapse'
import CardVerticalRatings from 'src/views/cards3/CardVerticalRatings'
import CardNavigationCenter from 'src/views/cards3/CardNavigationCenter'
import CardHorizontalRatings from 'src/views/cards3/CardHorizontalRatings'

const CardBasic = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ paddingBottom: 4 }}>
        <Typography variant='h5'>Select Your Solution</Typography>
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
    </Grid>
  )
}

export default CardBasic
