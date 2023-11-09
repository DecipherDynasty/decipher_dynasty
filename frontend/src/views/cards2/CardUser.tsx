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
    <Card sx={{ position: 'relative' }}>
      <CardMedia
        sx={{ height: '13.2rem' }}
        image='https://www.thedigitalspeaker.com/content/images/2022/07/Five-NFT-Challenges.webp'
      />
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box sx={{ mr: 2, mb: 1, display: 'flex', flexDirection: 'column' }}>
            <Typography variant='h6'>NFT Scams</Typography>
          </Box>
          <Typography variant='body2' sx={{ marginBottom: 3.25 }}>
            Hackers tend to create malicious websites and fake NFT marketplaces aiming to compromise users’ private data
            and steal their funds. Many of those platforms may look legit at first sight but are clones of valid
            websites posing a hacking threat to NFT buyers.
          </Typography>
          {/* <Button variant='contained'>Warning signs</Button> */}
        </Box>
        <Box
          sx={{ gap: 2, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}
        ></Box>
      </CardContent>
    </Card>
  )
}

export default CardUser
