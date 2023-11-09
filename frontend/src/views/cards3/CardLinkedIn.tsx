// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import Heart from 'mdi-material-ui/Heart'
import Linkedin from 'mdi-material-ui/Linkedin'
import ShareVariant from 'mdi-material-ui/ShareVariant'

const CardLinkedIn = () => {
  return (
    <Card sx={{ border: 0, boxShadow: 0, color: 'common.white', backgroundColor: 'success.main' }}>
      <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5, 4.5)} !important` }}>
        <Typography
          variant='h6'
          sx={{ display: 'flex', marginBottom: 2.75, alignItems: 'center', color: 'common.white' }}
        >
          Smart Contract Security
        </Typography>
        <Typography variant='body2' sx={{ marginBottom: 3, color: 'common.white' }}>
          A mini course on smart contract security and provides an extensive list of the issues and vulnerabilities that
          tend to recur in Solidity smart contracts.
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardLinkedIn
