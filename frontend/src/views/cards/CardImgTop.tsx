// ** MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const CardImgTop = () => {
  return (
    <Card>
      <CardMedia
        sx={{ height: '14.5625rem' }}
        image='https://fireapps.io/wp-content/uploads/2020/10/5-best-free-ecommerce-flatform.png'
      />
      <CardContent>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          E-Commerce Scams
        </Typography>
        <Typography variant='body2'>
          Many of these fake sellers may pose as legitimate online sellers on popular marketplaces, create fake
          websites, or even place advertisements on social media to build credibility.
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardImgTop
