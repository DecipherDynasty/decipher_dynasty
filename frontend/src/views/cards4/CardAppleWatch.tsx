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
        image='https://blog-assets.lightspeedhq.com/img/2020/09/92e3ffa9-bags-of-money-scaled-1.jpg'
      />
      <CardContent sx={{ padding: theme => `${theme.spacing(3, 5.25, 4)} !important` }}>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          Grants
        </Typography>
        <Typography variant='body2'>
          Our platform actively seeks grant opportunities to support research, education, and innovative technologies in
          cybersecurity and scam prevention. We also provide grants and resources to individuals, startups, and
          organizations working towards similar goals in these fields.
        </Typography>
      </CardContent>
      <Button variant='contained' sx={{ py: 2.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
        Apply Now
      </Button>
    </Card>
  )
}

export default CardAppleWatch
