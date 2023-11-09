// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const CardAppleWatch = () => {
  return (
    <Card>
      <CardMedia
        sx={{ height: '9.375rem' }}
        image='https://images.ctfassets.net/lzny33ho1g45/social-media-for-business-p-img/6e7a2eaf201bf90656f821319ff46f13/file.png?w=1520&fm=jpg&q=30&fit=thumb&h=760'
      />
      <CardContent sx={{ padding: theme => `${theme.spacing(3, 5.25, 4)} !important` }}>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          Social Media Scams
        </Typography>
        <Typography variant='body2'>
          Scammers can also learn a lot about you from details you share on your social media accounts. They create
          quizzes or posts designed to deceive you into sharing personal information and target you with other scams.
        </Typography>
      </CardContent>
      <Button variant='contained' sx={{ py: 2.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
        Protect Yourself
      </Button>
    </Card>
  )
}

export default CardAppleWatch
