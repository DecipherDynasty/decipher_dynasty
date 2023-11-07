import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import { trpc } from 'src/utils/trpc'
import { CircularProgress } from '@mui/material'

const AdminTable = () => {
  const { data: unapprovedEvents, isLoading } = trpc.event.getEventsForOrganisation.useQuery()

  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow></TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <CircularProgress />
            ) : (
              unapprovedEvents?.map(event => {
                return (
                  <TableRow
                    hover
                    key={event.id}
                    sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}
                  >
                  </TableRow>
                )
              })
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default AdminTable
