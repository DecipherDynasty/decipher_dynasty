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
        image='https://previews.123rf.com/images/rubelhossain/rubelhossain2011/rubelhossain201101490/159401151-149-dollar-month-149-usd-monthly-sticker.jpg
      '
      />
      <CardContent>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          Starter
        </Typography>
        <Typography variant='body2'>
          For startups and business to securely upload their documents and obtain blockchain-backed certificates.
        </Typography>
        <Button variant='contained' sx={{ margin: 7 }}>
          Get Started ->
        </Button>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          Includes
        </Typography>
        <Typography variant='body1' sx={{ marginBottom: 1 }}>
          - Document Upload & Verification
        </Typography>
        <Typography variant='body1' sx={{ marginBottom: 1 }}>
          - Blockchain Certificate Issurance
        </Typography>
        <Typography variant='body1' sx={{ marginBottom: 1 }}>
          - User-Friendly Dashboard
        </Typography>
        <Typography variant='body1' sx={{ marginBottom: 1 }}>
          - Customer Support
        </Typography>
        <Typography variant='body1' sx={{ marginBottom: 1 }}>
          - Limited Number of Documents
        </Typography>
        <Typography variant='body1' sx={{ marginBottom: 1 }}>
          - API Access
        </Typography>
        <Typography variant='body1'>
          - Community Forum Access
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardImgTop
