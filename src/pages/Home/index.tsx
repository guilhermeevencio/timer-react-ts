import { Play } from 'phosphor-react'
import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountDownButton,
  TaskInput,
} from './styles'

const Home = () => {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            placeholder="Nome do projeto"
            list="task-sugestions"
          />

          <datalist id="task-sugestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Projeto 4" />
            <option value="Projeto 5" />
          </datalist>

          <label htmlFor="minutes-amount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutes-amount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartCountDownButton type="submit" disabled>
          <Play size={24} />
          Start!
        </StartCountDownButton>
      </form>
    </HomeContainer>
  )
}

export default Home
