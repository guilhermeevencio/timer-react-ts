import { Play } from 'phosphor-react'
import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  Separator,
} from './styles'

const Home = () => {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input id="task" />
          <label htmlFor="minutes-amount">durante</label>
          <input type="number" id="minutes-amount" />
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>
        <Play size={24} />
        <button type="submit">Start!</button>
      </form>
    </HomeContainer>
  )
}

export default Home
