// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import CardUser2 from 'src/views/cards5/CardUser'
import CardImgTop from 'src/views/cards5/CardImgTop'
import CardMobile from 'src/views/cards5/CardMobile'
import CardSupport from 'src/views/cards5/CardSupport'
import CardTwitter from 'src/views/cards5/CardTwitter'
import CardFacebook from 'src/views/cards5/CardFacebook'
import CardLinkedIn from 'src/views/cards5/CardLinkedIn'
import CardAppleWatch from 'src/views/cards5/CardAppleWatch'
import CardMembership from 'src/views/cards5/CardMembership'
import CardInfluencer from 'src/views/cards5/CardInfluencer'
import CardNavigation from 'src/views/cards5/CardNavigation'
import CardWithCollapse from 'src/views/cards5/CardWithCollapse'
import CardVerticalRatings from 'src/views/cards5/CardVerticalRatings'
import CardNavigationCenter from 'src/views/cards5/CardNavigationCenter'
import CardHorizontalRatings from 'src/views/cards5/CardHorizontalRatings'

const CardBasic = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ paddingBottom: 4 }}>
        <Typography variant='h5'>Frequently Asked Questions</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardUser2 />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardImgTop />
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <CardWithCollapse />
      </Grid>
    </Grid>
  )
}

export default CardBasic
