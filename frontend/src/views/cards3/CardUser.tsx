// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import AvatarGroup from '@mui/material/AvatarGroup'

const CardUser = () => {
  return (
    <Card >
      <CardMedia
        sx={{ height: '14.5625rem' }}
        image='https://cdn-icons-png.flaticon.com/512/5300/5300408.png'
      />
      <CardContent>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          Pro
        </Typography>
        <Typography variant='body2' sx={{ marginBottom: 5 }}>
          For business that require higher certificate volume and acess to premium services
        </Typography>
        <Button variant='contained' sx={{ margin: 7 }}>
          Contact Sales ->
        </Button>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          Includes
        </Typography>
        <Typography variant='body1' sx={{ marginBottom: 1 }}>
          - Priority Verification
        </Typography>
        <Typography variant='body1' sx={{ marginBottom: 1 }}>
          - Blockchain Certificate Issurance
        </Typography>
        <Typography variant='body1' sx={{ marginBottom: 1 }}>
          - User-Friendly Dashboard
        </Typography>
        <Typography variant='body1' sx={{ marginBottom: 1 }}>
          - 24/7 Customer Support
        </Typography>
        <Typography variant='body1' sx={{ marginBottom: 1 }}>
          - Training and Workshops
        </Typography>
        <Typography variant='body1' sx={{ marginBottom: 1 }}>
          - Webinar Hub
        </Typography>
        <Typography variant='body1' sx={{ marginBottom: 1 }}>
          - API Access
        </Typography>
        <Typography variant='body1' sx={{ marginBottom: 1 }}>
          - Community Forum Access
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardUser
