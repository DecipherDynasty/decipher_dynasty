import Grid from '@mui/material/Grid'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import Table from 'src/views/dashboard/Table'
import { withAuth } from 'src/hooks/withAuth'
import React from 'react'
import { Session } from 'next-auth'

const Dashboard: React.FC<{
  session: Session
}> = ({ session }) => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Table session={session} />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default withAuth(Dashboard)
