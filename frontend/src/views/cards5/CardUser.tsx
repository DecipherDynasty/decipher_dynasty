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
    <Card>
      <CardMedia sx={{ height: '14.5625rem' }} image='https://www.f2f.ai/wp-content/uploads/2020/12/partners.jpg' />
      <CardContent>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          Who is eligible to become a partner?
        </Typography>
        <Typography variant='body2' sx={{ marginBottom: 2 }}>
          We extend a warm welcome to diverse entities including startups, fintech companies, investment firms, payments
          processors, and cybersecurity organizations. Feel free to access our services, explore partnership
          opportunities, or become a part of our vibrant community.
        </Typography>
        <Typography variant='body2'>
          To become a partner, please submit an application. We understand the importance of timely responses, and our
          approval process is designed to be efficient.
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardUser
