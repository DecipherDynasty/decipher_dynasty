// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import CardUser2 from 'src/views/cards4/CardUser'
import CardImgTop from 'src/views/cards4/CardImgTop'
import CardMobile from 'src/views/cards4/CardMobile'
import CardSupport from 'src/views/cards4/CardSupport'
import CardTwitter from 'src/views/cards4/CardTwitter'
import CardFacebook from 'src/views/cards4/CardFacebook'
import CardLinkedIn from 'src/views/cards4/CardLinkedIn'
import CardAppleWatch from 'src/views/cards4/CardAppleWatch'
import CardMembership from 'src/views/cards4/CardMembership'
import CardInfluencer from 'src/views/cards4/CardInfluencer'
import CardNavigation from 'src/views/cards4/CardNavigation'
import CardWithCollapse from 'src/views/cards4/CardWithCollapse'
import CardVerticalRatings from 'src/views/cards4/CardVerticalRatings'
import CardNavigationCenter from 'src/views/cards4/CardNavigationCenter'
import CardHorizontalRatings from 'src/views/cards4/CardHorizontalRatings'

const CardBasic = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ paddingBottom: 4 }}>
        <Typography variant='h5'>Why Partner with ScanGuard?</Typography>
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
