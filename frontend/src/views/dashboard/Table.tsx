import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import CircularProgress from '@mui/material/CircularProgress'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import { trpc } from 'src/utils/trpc'
import dayjs from 'dayjs'
import Link from 'next/link'

const DashboardTable = () => {
  const { data, isLoading } = trpc.event.getEventsForOrganisation.useQuery()

  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Event Name</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <CircularProgress />
            ) : (
              data?.map(event => (
                <TableRow hover key={event.id} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                  <TableCell>
                    <Link href={`/events/${event.id}`}>{event.eventName}</Link>
                  </TableCell>
                  <TableCell>{dayjs(event.eventStartDate).format('D MMMM YYYY')}</TableCell>
                  <TableCell>{dayjs(event.eventEndDate).format('D MMMM YYYY')}</TableCell>
                  <TableCell>
                    <Chip
                      label={
                        event.status === 'approved'
                          ? 'Verified'
                          : event.status === 'pending'
                          ? 'Pending Approval'
                          : 'Rejected'
                      }
                      color={event.status === 'approved' ? 'success' : event.status === 'pending' ? 'info' : 'error'}
                      sx={{
                        height: 24,
                        fontSize: '0.75rem',
                        textTransform: 'capitalize',
                        '& .MuiChip-label': { fontWeight: 500 }
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default DashboardTable
