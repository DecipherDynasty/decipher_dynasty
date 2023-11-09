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
        image='https://blog.zoom.us/wp-content/uploads/2021/01/Elevate-marketing-with-webinar.png'
      />
      <CardContent sx={{ padding: theme => `${theme.spacing(3, 5.25, 4)} !important` }}>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          Webinar Hub
        </Typography>
        <Typography variant='body2'>
          Monthly webinar topics related to document verification, blockchain technology, cybersecurity, scam prevention
          strategies, industry-specific challenges, and compliance updates.
        </Typography>
      </CardContent>
      <Button variant='contained' sx={{ py: 2.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
        Sign Up Now
      </Button>
    </Card>
  )
}

export default CardAppleWatch
