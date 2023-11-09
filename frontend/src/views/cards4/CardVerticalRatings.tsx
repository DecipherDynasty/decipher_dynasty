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
      <CardHeader title='Web3 Security Statistics ' />
      <CardContent>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}></Box>
        <Typography variant='body2' sx={{ marginBottom: 3.25 }}>
          Many of the issues in DeFi come down to a lack of investment in security, with developers prioritize growth
          over all else and directing funds to attract users
        </Typography>
        <Typography variant='body2' sx={{ marginBottom: 3.25 }}>
          As of Q2 2023, there has been a loss of $265,481,519 across the web3 ecosystem* according to security services
          platform immunefi.
        </Typography>
        <Typography variant='body2'>
          According to Chainalysis, about $3.8 billion, more than in any other year, was stolen from various services
          and protocols in 2022.
        </Typography>
      </CardContent>
      <CardActions className='card-action-dense'>
        <Button>How to stay safe</Button>
      </CardActions>
    </Card>
  )
}

export default CardVerticalRatings
