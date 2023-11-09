// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Collapse from '@mui/material/Collapse'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

// ** Icons Imports
import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'

const CardWithCollapse = () => {
  // ** State
  const [collapse, setCollapse] = useState<boolean>(false)

  const handleClick = () => {
    setCollapse(!collapse)
  }

  return (
    <Card>
      <CardMedia
        sx={{ height: '14.5625rem' }}
        image='https://www.iheartradio.ca/image/policy:1.12360570:1588934438/am800-news-jobs-employment-unemployment.jpg?f=default&$p$f=f181c44'
      />
      <CardContent>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          Jobs & Employment Scams
        </Typography>
        <Typography variant='body2'>
          Scammers pretend to be hiring on behalf of high-profile companies and online shopping platforms. They also
          impersonate well-known recruitment agencies.
        </Typography>
      </CardContent>
      <CardActions className='card-action-dense'>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Button onClick={handleClick}>Details</Button>
          <IconButton size='small' onClick={handleClick}>
            {collapse ? <ChevronUp sx={{ fontSize: '1.875rem' }} /> : <ChevronDown sx={{ fontSize: '1.875rem' }} />}
          </IconButton>
        </Box>
      </CardActions>
      <Collapse in={collapse}>
        <Divider sx={{ margin: 0 }} />
        <CardContent>
          <Typography variant='body2'>
            Scammers may trick you by giving you a small payment for completing a job or task. Never send your own
            money, you won’t get it back. Know who you are dealing with. Contact recruitment agency representatives via
            phone numbers you have sourced yourself online.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default CardWithCollapse
