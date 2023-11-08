// ** MUI Imports
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'

const CardSupport = () => {
  return (
    <Card>
      <CardContent
        sx={{
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: theme => `${theme.spacing(9.75, 5, 9.25)} !important`
        }}
      >
        <Avatar
          sx={{ width: 50, height: 50, marginBottom: 2.25, color: 'common.white', backgroundColor: 'primary.main' }}
        >
          <HelpCircleOutline sx={{ fontSize: '2rem' }} />
        </Avatar>
        <Typography variant='h6' sx={{ marginBottom: 2.75 }}>
          Ways to Avoid Phishing:
        </Typography>
        <Typography variant='body2'>1. Check the authenticity of sources</Typography>
        <Typography variant='body2'>2. Be careful with all approvals, transfers and blind signatures</Typography>
        <Typography variant='body2'>3. Segregation of assets</Typography>
        <Typography variant='body2' sx={{ marginBottom: 6 }}>
          4. Install anti-phishing extension
        </Typography>

        <Button variant='contained' sx={{ padding: theme => theme.spacing(1.75, 5.5) }}>
          Learn More
        </Button>
      </CardContent>
    </Card>
  )
}

export default CardSupport
