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

const CardNavigation = () => {
  // ** State
  const [value, setValue] = useState<string>('1')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Card>
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label='card navigation example'>
          <Tab value='1' label='Loan' />
          <Tab value='2' label='Romance' />
          <Tab value='3' label='Investment' />
        </TabList>
        <CardContent>
          <TabPanel value='1' sx={{ p: 0 }}>
            <Typography variant='h6' sx={{ marginBottom: 2 }}>
              Loan Scam
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: 4 }}>
              One Facebook page I saw an advertisement for was called "Very Fast Loan." I was intrigued and asked for a
              $7000 loan. My request was processed by an officer by the name of Daphne, who made me an offer for a 7000
              SGD loan with 340x24 terms.
            </Typography>
            <Button variant='contained'>FULL STORY</Button>
          </TabPanel>
          <TabPanel value='2' sx={{ p: 0 }}>
            <Typography variant='h6' sx={{ marginBottom: 2 }}>
              Romance Scam
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: 4 }}>
              I met Thomas on the CMB app. He eventually asked to talk to me on WhatsApp or Telegram, and we started
              doing so virtually every day. Occasionally, he would send pictures of food and expressed concern for my
              welfare.
            </Typography>
            <Button variant='contained'>FULL STORY</Button>
          </TabPanel>
          <TabPanel value='3' sx={{ p: 0 }}>
            <Typography variant='h6' sx={{ marginBottom: 2 }}>
              Investment Scam
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: 4 }}>
              I mistakenly replied to a WhatsApp message sent by scammer Andy on August 29, 2023. After that, we started
              having regular conversations. I provided a screenshot of my previous passport and sent SGD $1500 to a
              phoney Standard Chartered bank account after becoming involved in a fraudulent bitcoin trading operation
              within a week.
            </Typography>
            <Button variant='contained'>FULL STORY</Button>
          </TabPanel>
        </CardContent>
      </TabContext>
    </Card>
  )
}

export default CardNavigation
