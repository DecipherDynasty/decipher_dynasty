import { useState, ChangeEvent, MouseEvent, ReactNode, useCallback, FormEvent, ReactElement } from 'react'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled } from '@mui/material/styles'
import MuiCard, { CardProps } from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import themeConfig from 'src/configs/themeConfig'
import BlankLayout from 'src/@core/layouts/BlankLayout'
import FooterIllustrationsV1 from 'src/views/pages/auth/FooterIllustration'
import Snackbar from '@mui/material/Snackbar'
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from 'src/utils/firebase'
import Alert, { AlertColor } from '@mui/material/Alert'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { trpc } from 'src/utils/trpc'
import { createAccountFormSchema } from 'src/models/schema/createAccountFormSchema'
import PhoneInput from 'react-phone-number-input'
import { E164Number } from 'libphonenumber-js/types'
import { isValidPhoneNumber } from 'libphonenumber-js/min'
import 'react-phone-number-input/style.css'

interface State {
  password: string
  showPassword: boolean
}

// ** Styled Components
const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '28rem' }
}))

const LinkStyled = styled('a')(({ theme }) => ({
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const RegisterPage = () => {
  const router = useRouter()
  const { mutateAsync } = trpc.organisation.createOrganisation.useMutation()

  const [organisationName, setOrganisationName] = useState('')
  const [contactNumber, setContactNumber] = useState<E164Number | undefined>()
  const [email, setEmail] = useState('')
  const [values, setValues] = useState<State>({
    password: '',
    showPassword: false
  })
  const [toast, setToast] = useState({
    shouldShow: false,
    message: '',
    severity: 'success'
  })
  const [isLoading, setIsLoading] = useState(false)

  // Methods in the component.
  const handleOrganisationNameChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setOrganisationName(e.target.value)
  }, [])

  const handleEmailChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const email = e.target.value
    setEmail(email)
  }, [])

  const handlePasswordChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, password: event.target.value })
    },
    [values]
  )

  const handleClickShowPassword = useCallback(() => {
    setValues({ ...values, showPassword: !values.showPassword })
  }, [values])

  const handleMouseDownPassword = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }, [])

  const submitRegistration = useCallback(
    async (e: FormEvent<HTMLElement>) => {
      try {
        e.preventDefault()

        if (!contactNumber || !isValidPhoneNumber(contactNumber)) {
          throw Error('Invalid contact number format')
        }

        const parsed = createAccountFormSchema.parse({
          contactNumber,
          email,
          organisationName
        })

        setIsLoading(true)

        // Attempt to create a user with an email and password.
        await createUserWithEmailAndPassword(auth, email, values.password)

        await signOut(auth)

        // Sign out here because we want to use NextAuth rather than the individual auth.
        await Promise.all([
          signIn('credentials', {
            email,
            password: values.password,
            redirect: false
          }),
          mutateAsync(parsed)
        ])

        setToast({
          shouldShow: true,
          message: 'Successfully created! Logging in now',
          severity: 'success'
        })

        router.push('/')
      } catch (e) {
        setToast({
          shouldShow: true,
          message: (e as Error).message,
          severity: 'error'
        })
      } finally {
        setIsLoading(false)
      }
    },
    [email, values, router, organisationName, mutateAsync, contactNumber]
  )

  return (
    <Box className='content-center'>
      <Card sx={{ zIndex: 1 }}>
        <CardContent sx={{ padding: theme => `${theme.spacing(12, 9, 7)} !important` }}>
          <Box sx={{ mb: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography
              variant='h6'
              sx={{
                ml: 3,
                lineHeight: 1,
                fontWeight: 600,
                textTransform: 'uppercase',
                fontSize: '1.5rem !important'
              }}
            >
              🛡️ {themeConfig.templateName}
            </Typography>
          </Box>
          <Box sx={{ mb: 6 }}>
            <Typography variant='body2'>Register an account</Typography>
          </Box>
          <form noValidate autoComplete='off' onSubmit={submitRegistration}>
            <TextField
              fullWidth
              type='text'
              label='Organisation Name'
              sx={{ marginBottom: 4 }}
              value={organisationName}
              onChange={handleOrganisationNameChange}
              required
            />
            <TextField
              fullWidth
              type='email'
              label='Business Email'
              sx={{ marginBottom: 4 }}
              value={email}
              onChange={handleEmailChange}
              required
            />
            <FormControl fullWidth>
              <InputLabel htmlFor='auth-register-password'>Password</InputLabel>
              <OutlinedInput
                label='Password'
                value={values.password}
                required
                id='auth-register-password'
                onChange={handlePasswordChange}
                type={values.showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      edge='end'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      aria-label='toggle password visibility'
                    >
                      {values.showPassword ? <EyeOutline fontSize='small' /> : <EyeOffOutline fontSize='small' />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Box sx={{ marginY: 4 }}>
              <PhoneInput value={contactNumber} onChange={setContactNumber} />
            </Box>
            <Button
              fullWidth
              size='large'
              type='submit'
              variant='contained'
              sx={{ marginBottom: 7 }}
              disabled={isLoading}
            >
              Sign up
            </Button>
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Typography variant='body2' sx={{ marginRight: 2 }}>
                Already have an account?
              </Typography>
              <Typography variant='body2'>
                <Link passHref href='/auth/login'>
                  <LinkStyled>Sign in instead</LinkStyled>
                </Link>
              </Typography>
            </Box>
          </form>
          <Snackbar
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
        </CardContent>
      </Card>
      <FooterIllustrationsV1 />
    </Box>
  )
}

RegisterPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default RegisterPage
