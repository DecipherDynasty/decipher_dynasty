import { CircularProgress } from '@mui/material'
import CardMembership from 'src/views/cards/CardMembership'
import { useRouter } from 'next/router'
import { trpc } from 'src/utils/trpc'

const IndividualEventPage = () => {
  const router = useRouter()
  const { data: event, isLoading } = trpc.event.getIndividualEvent.useQuery({
    eventId: router.query.id as string
  })

  if (!router.query.id || isLoading) return <CircularProgress />

  if (!event) router.push('error')

  return (
    <CardMembership
      eventName={event?.eventName}
      eventDescription={event?.eventDescription}
      canApprove={event?.canApprove}
      id={router.query.id as string}
      intendedAmountToRaise={event?.intendedAmountToRaise}
      organisationId={event?.organisationId}
    />
  )
}

export default IndividualEventPage
