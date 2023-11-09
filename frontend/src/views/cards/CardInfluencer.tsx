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
      <CardHeader title='Impersonation Scams' />
      <CardContent>
        <Typography variant='body2' sx={{ marginBottom: 3.25 }}>
          Scammers trick you into thinking they are from organisations such as the police, government, banks, and
          well-known businesses. They can even pretend to be your friend or family member.
        </Typography>
        <Typography variant='body2'>
          Scammers use technology to make their call appear to come from a legitimate phone number. Their texts appear
          in the same conversation thread as genuine messages from an organisation.
        </Typography>
      </CardContent>
      <CardActions className='card-action-dense'>
        <Button>Read More</Button>
      </CardActions>
    </Card>
  )
}

export default CardInfluencer
