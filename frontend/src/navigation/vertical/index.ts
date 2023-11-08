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
      sectionTitle: 'Education'
    },
    {
      title: 'Scams',
      icon: AccountCogOutline,
      path: '/scams'
    },
    {
      title: 'Web3',
      icon: AccountCogOutline,
      path: './web3'
    }
  ]
}

export default navigation
