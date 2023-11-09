// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Rating from '@mui/material/Rating'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Grid, { GridProps } from '@mui/material/Grid'

// Styled Grid component
const StyledGrid1 = styled(Grid)<GridProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  [theme.breakpoints.down('md')]: {
    paddingTop: '0 !important'
  },
  '& .MuiCardContent-root': {
    padding: theme.spacing(3, 4.75),
    [theme.breakpoints.down('md')]: {
      paddingTop: 0
    }
  }
}))

// Styled Grid component
const StyledGrid2 = styled(Grid)<GridProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.up('md')]: {
    paddingLeft: '0 !important'
  },
  [theme.breakpoints.down('md')]: {
    order: -1
  }
}))

// Styled component for the image
const Img = styled('img')(({ theme }) => ({
  height: '11rem',
  borderRadius: theme.shape.borderRadius
}))

const CardHorizontalRatings = () => {
  return (
    <Card>
      <Grid container spacing={6}>
        <StyledGrid1 item xs={12} md={6} lg={7}>
          <CardContent>
            <Typography variant='h6' sx={{ marginBottom: 2 }}>
              Advisory Services
            </Typography>
            <Box sx={{ mb: 4.75, display: 'flex', alignItems: 'center' }}></Box>
            <Typography variant='body2' sx={{ marginBottom: 4, marginRight: 6 }}>
              Consultation sessions with experienced advisors who can assess an organization's specific needs and
              recommend tailored solutions for document verification and scam prevention.
            </Typography>
          </CardContent>
          <CardActions className='card-action-dense' sx={{ width: '100%' }}></CardActions>
        </StyledGrid1>
        <StyledGrid2 item xs={12} md={6} lg={5}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '40px' }}>
            <Img
              alt='Stumptown Roasters'
              src='data:image/jpeg;base64,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'
            />
          </CardContent>
        </StyledGrid2>
      </Grid>
    </Card>
  )
}

export default CardHorizontalRatings
