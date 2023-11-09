// ** MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'

const CardImgTop = () => {
  return (
    <Card>
      <CardMedia
        sx={{ height: '14.5625rem' }}
        image='https://ce1.uicdn.net/4ff/72b1099cc8ee1928140fd63893e9f/webapp/34325-n-stage-footer_it_security-front-int.png
      '
      />
      <CardContent>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          Is my information secure on your platform?
        </Typography>
        <Typography variant='body2' sx={{ marginBottom: 4 }}>
          Yes, we prioritize the security and confidentiality of your information. We employ advanced encryption methods
          and adhere to strict security protocols to safeguard your data at every stage of the verification process.
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardImgTop
