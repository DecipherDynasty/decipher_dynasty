import { forwardRef, useState, useCallback, ChangeEvent, FormEvent, ReactElement } from 'react'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Alert, { AlertColor } from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import DatePicker from 'react-datepicker'
import { trpc } from 'src/utils/trpc'
import { z } from 'zod'
import { createEventFormSchema } from 'src/models/schema/createEventFormSchema'
import CloudUpload from 'mdi-material-ui/CloudUpload'
import { styled } from '@mui/material/styles'
import { storage } from 'src/utils/firebase'
import { type StorageReference, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1
})

const StartDateInput = forwardRef((props, ref) => {
  return <TextField fullWidth {...props} inputRef={ref} label='Start Date' autoComplete='off' />
})

const EndDateInput = forwardRef((props, ref) => {
  return <TextField fullWidth {...props} inputRef={ref} label='End Date' autoComplete='off' />
})

const VerificationForm = () => {
  const { mutateAsync, isLoading } = trpc.event.createEvent.useMutation()
  const [eventName, setEventName] = useState('')
  const [location, setLocation] = useState('')
  const [startDate, setStartDate] = useState<Date | null | undefined>(null)
  const [endDate, setEndDate] = useState<Date | null | undefined>(null)
  const [description, setDescription] = useState('')
  const [intendedAmountToRaise, setIntendedAmountToRaise] = useState(0)
  const [image, setImage] = useState<File>()
  const [toast, setToast] = useState({
    shouldShow: false,
    message: '',
    severity: 'success'
  })

  const handleEventNameChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEventName(e.target.value)
  }, [])

  const handleLocationChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setLocation(e.target.value)
  }, [])

  const handleDescriptionChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value)
  }, [])

  const onIntendedAmountToRaiseChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (isNaN(parseFloat(e.target.value))) return
    setIntendedAmountToRaise(parseFloat(e.target.value))
  }, [])

  const submitForm = useCallback(
    async (e: FormEvent<HTMLElement>) => {
      try {
        e.preventDefault()

        const input = {
          eventDescription: description,
          eventEndDate: endDate,
          eventLocation: location,
          eventName,
          eventStartDate: startDate,
          intendedAmountToRaise: intendedAmountToRaise,
          photoUrl: ''
        }

        const parsed = createEventFormSchema.parse(input)

        if (image) {
          const reference: StorageReference = ref(storage, `images/${eventName}`)
          await uploadBytes(reference, image)
          parsed.photoUrl = await getDownloadURL(reference)
        }

        await mutateAsync(parsed)

        setToast({
          severity: 'success',
          shouldShow: true,
          message: 'Event has been successfully created'
        })
      } catch (e) {
        let errorMessage: string

        if (e instanceof z.ZodError) {
          errorMessage = e.errors[0].message
        } else {
          errorMessage = (e as Error).message
        }

        setToast({
          severity: 'error',
          shouldShow: true,
          message: errorMessage
        })
      }
    },
    [eventName, mutateAsync, location, endDate, startDate, intendedAmountToRaise, description, image]
  )

  return (
    <Card>
      <CardHeader title='Register for verification' titleTypographyProps={{ variant: 'h6' }} />
      <Divider sx={{ margin: 0 }} />
      <form onSubmit={submitForm}>
        <CardContent>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                As part of the registration process, you are required to complete the following form. Our auditors will
                carry out their checks and disseminate the certificate within 5 working business days.
              </Typography>
            </Grid>

            {/* Used to get the organisation name */}
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Event Name' value={eventName} onChange={handleEventNameChange} />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Location' value={location} onChange={handleLocationChange} />
            </Grid>

            <Grid item xs={12} sm={6}>
              <DatePicker
                selected={startDate}
                showYearDropdown
                showMonthDropdown
                placeholderText='MM-DD-YYYY'
                customInput={<StartDateInput />}
                id='form-layouts-separator-date-start'
                onChange={(date: Date) => setStartDate(date)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DatePicker
                selected={endDate}
                showYearDropdown
                showMonthDropdown
                placeholderText='MM-DD-YYYY'
                customInput={<EndDateInput />}
                id='form-layouts-separator-date-end'
                onChange={(date: Date) => setEndDate(date)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Intended Amount To Raise (USD)'
                value={intendedAmountToRaise}
                onChange={onIntendedAmountToRaiseChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                value={description}
                onChange={handleDescriptionChange}
                multiline
                label='Description'
              />
            </Grid>
            <Grid item xs={12}>
              <Button component='label' variant='contained' startIcon={<CloudUpload />}>
                Upload file
                <VisuallyHiddenInput
                  accept='image/*'
                  type='file'
                  onChange={e => {
                    if (!e.target.files) return
                    const file: File = e.target.files[0]
                    setImage(file)
                  }}
                />
              </Button>
            </Grid>
          </Grid>
        </CardContent>
        <Divider sx={{ margin: 0 }} />
        <CardActions>
          <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained' disabled={isLoading}>
            Submit
          </Button>
          <Button size='large' color='secondary' variant='outlined'>
            Cancel
          </Button>
        </CardActions>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          autoHideDuration={3000}
          open={toast.shouldShow}
          onClose={() =>
            setToast({
              ...toast,
              shouldShow: false
            })
          }
        >
          <Alert severity={toast.severity as AlertColor} sx={{ width: '100%' }}>
            {toast.message as unknown as ReactElement<any, any>}
          </Alert>
        </Snackbar>
      </form>
    </Card>
  )
}

export default VerificationForm
