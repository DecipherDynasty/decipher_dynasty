// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import Heart from 'mdi-material-ui/Heart'
import Twitter from 'mdi-material-ui/Twitter'
import ShareVariant from 'mdi-material-ui/ShareVariant'

const CardTwitter = () => {
  return (
    <Card sx={{ border: 0, boxShadow: 0, color: 'common.white', backgroundColor: 'info.main' }}>
      <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5, 4.5)} !important` }}>
        <Typography
          variant='h6'
          sx={{ display: 'flex', marginBottom: 2.75, alignItems: 'center', color: 'common.white' }}
        >
          Zero-Knowledge Proofs
        </Typography>
        <Typography variant='body2' sx={{ marginBottom: 3, color: 'common.white' }}>
          Zero-knowledge proofs can be used to verify the authenticity of data without revealing the underlying data to
          other parties. This can ensure the privacy of sensitive information, such as personal data.
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardTwitter
