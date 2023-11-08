// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Button from '@mui/material/Button'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const CardNavigationCenter = () => {
  // ** State
  const [value, setValue] = useState<string>('1')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Card>
      <TabContext value={value}>
        <TabList centered onChange={handleChange} aria-label='card navigation example'>
          <Tab value='1' label='Alerts' />
          <Tab value='2' label='Blogs' />
          <Tab value='3' label='Videos' />
        </TabList>
        <CardContent sx={{ textAlign: 'center' }}>
          <TabPanel value='1' sx={{ p: 0 }}>
            <Typography variant='h6' sx={{ marginBottom: 2 }}>
              Scam Alert
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: 4 }}>
              Beware of work-from-offers that are actually "Money Mule" Recruitment Advertisements
            </Typography>
            <Button variant='contained'>Find Out More</Button>
          </TabPanel>
          <TabPanel value='2' sx={{ p: 0 }}>
            <Typography variant='h6' sx={{ marginBottom: 2 }}>
              Beware of Cyber Extortion
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: 4 }}>
              We would like to alert members of the public to cases of cyber extortion. Between January and May 2020,
              the Police have received 49 reports, with total losses amounting to at least $50,000.
            </Typography>
            <Button variant='contained'>Full story</Button>
          </TabPanel>
          <TabPanel value='3' sx={{ p: 0 }}>
            <Typography variant='h6' sx={{ marginBottom: 2 }}>
              Supermarket Malware Scams
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: 4 }}>
              The APK is an app that resembles supermarket apps and contains malware, allowing scammers to steal banking
              credentials
            </Typography>
            <Button variant='contained'>Watch Full Video</Button>
          </TabPanel>
        </CardContent>
      </TabContext>
    </Card>
  )
}

export default CardNavigationCenter
