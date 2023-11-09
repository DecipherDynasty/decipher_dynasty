import HomeOutline from 'mdi-material-ui/HomeOutline'
import CalendarOutline from 'mdi-material-ui/Calendar'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import { VerticalNavItemsType } from 'src/@core/layouts/types'
import {
  AccountGroup,
  AccountMultiple,
  AccountMultipleOutline,
  BellBadge,
  CurrencyUsd,
  Ethereum,
  FrequentlyAskedQuestions
} from 'mdi-material-ui'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      sectionTitle: 'Platform'
    },
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
      sectionTitle: 'Blog & Resources'
    },
    {
      title: 'Scams',
      icon: BellBadge,
      path: '/scams'
    },
    {
      title: 'Web3',
      icon: Ethereum,
      path: './web3'
    },
    {
      sectionTitle: 'About Us'
    },
    {
      title: 'Pricing',
      icon: CurrencyUsd,
      path: './pricing'
    },
    {
      title: 'Partnerships',
      icon: AccountMultipleOutline,
      path: './partnerships'
    },
    {
      title: 'FAQs',
      icon: FrequentlyAskedQuestions,
      path: './faqs'
    }
  ]
}

export default navigation
