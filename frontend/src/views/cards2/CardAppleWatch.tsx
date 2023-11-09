// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const CardAppleWatch = () => {
  return (
    <Card>
      <CardMedia
        sx={{ height: '9.375rem' }}
        image='https://media.licdn.com/dms/image/D5612AQHiX4Vjs1N8hw/article-cover_image-shrink_720_1280/0/1680274722255?e=2147483647&v=beta&t=S_0F_3COkY_QKJr2iLg3SNXrlDyC_z5-3k_tshzjScg'
      />
      <CardContent sx={{ padding: theme => `${theme.spacing(3, 5.25, 4)} !important` }}>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          Malicious Trojan
        </Typography>
        <Typography variant='body2'>
          RedLine Stealer is designed to steal information such as saved credentials, autocomplete data, and credit card
          information from a browser. It is known to specifically scan for cryptocurrency wallet directories and wallet
          files.
        </Typography>
      </CardContent>
      <Button variant='contained' sx={{ py: 2.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
        Protect Yourself
      </Button>
    </Card>
  )
}

export default CardAppleWatch
