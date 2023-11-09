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
          Become A Partner
        </Typography>
        <Typography variant='body2' sx={{ marginBottom: 2 }}>
          Our Platform Network seamlessly connects you to a vast ecosystem of businesses, including fintechs, charities,
          blockchain security and more, spanning the globe.
        </Typography>
        <Typography variant='body2'>
          Enhance your document verification processes, secure your transactions, and forge valuable partnerships
          effortlessly, all under the umbrella of robust scam prevention and cutting-edge security
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardUser
