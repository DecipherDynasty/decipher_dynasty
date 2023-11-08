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
        image='https://static.ffbbbdc6d3c353211fe2ba39c9f744cd.com/wp-content-learn/uploads/2021/08/25095000/WhaleFarm-Token-Rug-Pull-1024x521.jpg
      '
      />
      <CardContent>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          Rug Pull Scams
        </Typography>
        <Typography variant='body2'>
          Rug pulls happen when fraudulent developers create a new crypto token, pump up the price and pull as much
          value out of them before abandoning them as their price drops to zero.
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardImgTop
