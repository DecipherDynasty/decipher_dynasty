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
        image='https://static.vecteezy.com/system/resources/previews/005/276/781/non_2x/stock-market-and-business-charts-up-and-down-movement-stock-market-investment-trading-free-vector.jpg'
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
            <Typography variant='h6'>Investment Scams</Typography>
          </Box>
          <Typography variant='body2' sx={{ marginBottom: 3.25 }}>
            Scammers use convincing marketing and new technology to make their investment sound too good to miss. They
            promise you big payouts with little or no risk and use pressure tactics to get you to act fast, so they can
            steal your money.
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
