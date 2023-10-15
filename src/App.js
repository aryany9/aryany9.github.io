import styled, { ThemeProvider } from 'styled-components'
import { device } from './styles/BreakPoints'
import { lightTheme } from './styles/Theme'
import { Homepage } from './pages/homepage'
import "./App.css";

const Title = styled.h1`
  color: ${(props) => props.theme.colors.primaryTextColor};
  font-size: 48px;
  @media ${device.md} {
    font-size: 32px;
  }
`

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Homepage />
    </ThemeProvider>
  )
}

export default App