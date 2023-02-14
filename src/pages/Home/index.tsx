import { Play } from 'phosphor-react'
import {
  HomeContainer,
  CountdownContainer,
  FormContainer,
  Separator,
} from './styles'

function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input type="task" />
          <label htmlFor="minutesAmount">durante</label>
          <input type="number" />

          <span>Minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <button type="submit">
          <Play size={24} />
          Começa
        </button>
      </form>
    </HomeContainer>
  )
}

export default Home