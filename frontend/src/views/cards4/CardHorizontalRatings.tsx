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
            <Typography variant='h6'>Scholarship Pogram</Typography>
            <Box sx={{ mb: 4.75, display: 'flex', alignItems: 'center' }}></Box>
            <Typography variant='body2' sx={{ marginBottom: 4, marginRight: 6 }}>
              A diverse talent pool is fast becoming a business imperative. We need a wide variety of different
              experiences, skillsets, and ways of thinking in order to stay ahead of nimble and innovative cyber
              criminals as the financial system evolves.
            </Typography>
          </CardContent>
          <CardActions className='card-action-dense' sx={{ width: '100%' }}></CardActions>
        </StyledGrid1>
        <StyledGrid2 item xs={12} md={6} lg={4}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '40px' }}>
            <Img
              alt='Stumptown Roasters'
              src='https://www.ntu.edu.sg/images/librariesprovider115/graduate/grad-prog_scholarship_16x9.png?sfvrsn=ba0d711a_3'
            />
          </CardContent>
        </StyledGrid2>
      </Grid>
    </Card>
  )
}

export default CardHorizontalRatings
