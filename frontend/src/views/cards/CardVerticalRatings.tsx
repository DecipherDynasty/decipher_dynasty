// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Rating from '@mui/material/Rating'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

const CardVerticalRatings = () => {
  return (
    <Card>
      <CardHeader title='Phishing Scams' />
      <CardContent>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}></Box>
        <Typography variant='body2' sx={{ marginBottom: 3.25 }}>
          You receive a call, text or email soliciting personal information in order to claim a prize, secure your
          online accounts or to help investigate fraudulent transactions.
        </Typography>
        <Typography variant='body2'>
          Fake websites are created to look identical to the official sites of organisations or banks, but with a
          slightly different web address. If you input your personal details, PINs or OTPs in these fake websites, your
          information and money are at risk of being stolen by criminals.
        </Typography>
      </CardContent>
      <CardActions className='card-action-dense'>
        <Button>How to stay safe</Button>
      </CardActions>
    </Card>
  )
}

export default CardVerticalRatings
