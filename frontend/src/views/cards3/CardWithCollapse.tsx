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
        image='https://cdn-icons-png.flaticon.com/512/5300/5300408.png'
      />
      <CardContent>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          Enterprise
        </Typography>
        <Typography variant='body2'>
          For enterprises that require custom volume, bespoke implementations and dedicated support services
        </Typography>
        <Button variant='contained' sx={{ margin: 7 }}>
          Contact Sales ->
        </Button>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          Includes
        </Typography>
        <Typography variant='body1' sx={{ marginBottom: 1 }}>
          - Custom Uploads & Global Verification Services
        </Typography>
        <Typography variant='body1' sx={{ marginBottom: 1 }}>
          - Bundled packages and add-ons
        </Typography>
        <Typography variant='body1' sx={{ marginBottom: 1 }}>
          - Dedicated support and premium services
        </Typography>
        <Typography variant='body1' sx={{ marginBottom: 1 }}>
          - Custom Reporting and Analytics
        </Typography>
        <Typography variant='body1' sx={{ marginBottom: 1 }}>
          - Continuous Performance Optimization
        </Typography>
        
      </CardContent>
      
    </Card>
  )
}

export default CardWithCollapse
