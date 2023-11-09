// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

const CardInfluencer = () => {
  return (
    <Card>
      <CardHeader title='SIM Swap Attack' />
      <CardContent>
        <Typography variant='body2' sx={{ marginBottom: 3.25 }}>
          A SIM swap attack happens when a bad actor has your SIM card information transferred from your phone onto
          theirs. Although this can happen if they have stolen your phone and removed the SIM card, more often this is
          done remotely.
        </Typography>
        <Typography variant='body2'>
          On Sept. 9, Vitalik’s X account was taken over by scammers who posted a fake NFT giveaway prompting users to
          click a malicious link, which resulted in victims collectively losing over $691,000.
        </Typography>
      </CardContent>
      <CardActions className='card-action-dense'>
        <Button>Read More</Button>
      </CardActions>
    </Card>
  )
}

export default CardInfluencer
