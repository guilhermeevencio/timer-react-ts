import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import { LayoutContainer } from './styles'

const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}

export default DefaultLayout
