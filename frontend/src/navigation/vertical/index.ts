import HomeOutline from 'mdi-material-ui/HomeOutline'
import CalendarOutline from 'mdi-material-ui/Calendar'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/dashboard'
    },
    {
      title: 'Event',
      icon: CalendarOutline,
      path: '/events'
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      sectionTitle: 'Demo'
    },
    {
      title: 'Education',
      icon: AccountCogOutline,
      path: '/cards'
    },
    {
      title: 'Web3',
      icon: AccountCogOutline,
      path: './cards-copy'
    }
  ]
}

export default navigation
