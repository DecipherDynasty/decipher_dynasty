import { useState, Fragment, ChangeEvent, MouseEvent, ReactNode, useCallback, FormEvent, ReactElement } from 'react'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
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
import MuiFormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import themeConfig from 'src/configs/themeConfig'
import BlankLayout from 'src/@core/layouts/BlankLayout'
import FooterIllustrationsV1 from 'src/views/pages/auth/FooterIllustration'
import Snackbar from '@mui/material/Snackbar'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from 'src/utils/firebase'
import Alert, { AlertColor } from '@mui/material/Alert'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

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

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(({ theme }) => ({
  marginTop: theme.spacing(1.5),
  marginBottom: theme.spacing(4),
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const RegisterPage = () => {
  const router = useRouter()

  // States
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

  // Methods in the component.
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

        // Attempt to create a user with an email and password.
        await createUserWithEmailAndPassword(auth, email, values.password)

        // Sign out here because we want to use NextAuth rather than the individual auth.
        await signIn('credentials', {
          email,
          password: values.password,
          redirect: false
        })

        setToast({
          shouldShow: true,
          message: 'Successfully created! Logging in now',
          severity: 'success'
        })

        setTimeout(() => router.push('/'), 2000)
      } catch (e) {
        setToast({
          shouldShow: true,
          message: (e as Error).message,
          severity: 'error'
        })
      }
    },
    [email, values, router]
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
              type='email'
              label='Business Email'
              sx={{ marginBottom: 4 }}
              value={email}
              onChange={handleEmailChange}
            />
            <FormControl fullWidth>
              <InputLabel htmlFor='auth-register-password'>Password</InputLabel>
              <OutlinedInput
                label='Password'
                value={values.password}
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
            <FormControlLabel
              control={<Checkbox />}
              label={
                <Fragment>
                  <span>I agree to </span>
                  <Link href='/' passHref>
                    <LinkStyled onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}>
                      privacy policy & terms
                    </LinkStyled>
                  </Link>
                </Fragment>
              }
            />
            <Button fullWidth size='large' type='submit' variant='contained' sx={{ marginBottom: 7 }}>
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
