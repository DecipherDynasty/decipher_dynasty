import { ChangeEvent, MouseEvent, ReactNode, useState, useCallback, FormEvent, ReactElement } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
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
import { signIn } from 'next-auth/react'
import Snackbar from '@mui/material/Snackbar'
import Alert, { AlertColor } from '@mui/material/Alert'

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

const LoginPage = () => {
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

  // Methods in the component
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

  const submitSignIn = useCallback(
    async (e: FormEvent<HTMLElement>) => {
      try {
        e.preventDefault()

        // Sign out here because we want to use NextAuth rather than the individual auth.
        const result = await signIn('credentials', {
          email,
          password: values.password,
          redirect: false
        })

        if (result && !result.ok && result.error) throw Error(result.error)

        router.push('/')
      } catch (e) {
        setToast({
          shouldShow: true,
          message: (e as Error).message,
          severity: 'error'
        })
      }
    },
    [email, router, values]
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
              {themeConfig.templateName}
            </Typography>
          </Box>
          <Box sx={{ mb: 6 }}>
            <Typography variant='h5' sx={{ fontWeight: 600, marginBottom: 1.5 }}>
              Welcome to {themeConfig.templateName}! 👋🏻
            </Typography>
            <Typography variant='body2'>Please sign-in to your account to begin</Typography>
          </Box>
          <form noValidate autoComplete='off' onSubmit={submitSignIn}>
            <TextField
              fullWidth
              type='email'
              label='Business Email'
              sx={{ marginBottom: 4 }}
              value={email}
              onChange={handleEmailChange}
            />
            <FormControl fullWidth>
              <InputLabel htmlFor='auth-login-password'>Password</InputLabel>
              <OutlinedInput
                label='Password'
                value={values.password}
                id='auth-login-password'
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
                      {values.showPassword ? <EyeOutline /> : <EyeOffOutline />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Box
              sx={{ mb: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}
            >
              <Link passHref href='/'>
                <LinkStyled onClick={e => e.preventDefault()}>Forgot Password?</LinkStyled>
              </Link>
            </Box>
            <Button fullWidth size='large' variant='contained' sx={{ marginBottom: 7 }} type='submit'>
              Login
            </Button>
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Typography variant='body2' sx={{ marginRight: 2 }}>
                New on our platform?
              </Typography>
              <Typography variant='body2'>
                <Link passHref href='/auth/register'>
                  <LinkStyled>Create an account</LinkStyled>
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

LoginPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default LoginPage
