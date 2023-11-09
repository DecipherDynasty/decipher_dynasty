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

  return (
    <Card>
      <CardMedia
        sx={{ height: '14.5625rem' }}
        image='https://8808660.fs1.hubspotusercontent-na1.net/hubfs/8808660/Third-Party%20API%20Integration%20101.png'
      />
      <CardContent>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          Can I integrate your document verification services into my existing workflow?
        </Typography>
        <Typography variant='body2'>
          Absolutely, we offer APIs and integration support, allowing seamless integration of our services into your
          existing systems. Our technical team is available to assist you in the integration process.
        </Typography>
        {/* <Button variant='contained' sx={{ margin: 7 }}>
          Learn More
        </Button> */}
      </CardContent>
    </Card>
  )
}

export default CardWithCollapse
