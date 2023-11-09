// ** MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'

const CardImgTop = () => {
  return (
    <Card>
      <CardMedia
        sx={{ height: '14.5625rem' }}
        image='https://thenewageparents.com/wp-content/uploads/2023/08/2024-Calendar-Singapore-Key-Dates-Holidays-and-Events.jpg
      '
      />
      <CardContent>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          Upcoming 2024 Events
        </Typography>
        <Typography variant='body2' sx={{ marginBottom: 4 }}>
          We are pleased to confirm some of the large event dates for next year. Be sure to save the date and join us in
          the upcoming Summits and events, it is going to be a busy and exciting year!
        </Typography>
        {/* <Button variant='contained' sx={{ margin: 7 }}>
          Get Started ->
        </Button>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          The Global Anti-Scam Summit 2023
        </Typography> */}
        <Typography variant='body1' sx={{ marginBottom: 1 }}>
          - Global Anti-Scam Summit 2024
        </Typography>
        <Typography variant='body1' sx={{ marginBottom: 1 }}>
          - Singapore Fintech Festival 2024
        </Typography>
        <Typography variant='body1' sx={{ marginBottom: 1 }}>
          - GovWare Conference & Exhibition 2024
        </Typography>
        <Typography variant='body1' sx={{ marginBottom: 1 }}>
          - Asia Tech x Singapore (ATxSG) 2024
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardImgTop
