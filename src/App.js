import styled, { ThemeProvider } from 'styled-components'
import { device } from './styles/BreakPoints'
import { lightTheme } from './styles/Theme'
import { Homepage } from './pages/homepage'

const Title = styled.h1`
  color: ${(props) => props.theme.colors.primaryTextColor};
  font-size: 48px;
  @media ${device.md} {
    font-size: 32px;
  }
`

function App() {

  console.log(process.env.FIREBASE_APIKEY)
  console.log(process.env.FIREBASE_AUTHDOMAIN)
  console.log(process.env.FIREBASE_PROJECTID)
  console.log(process.env.FIREBASE_STORAGEBUCKET)
  console.log(process.env.FIREBASE_MESSAGINGSENDERID)
  console.log(process.env.FIREBASE_APPID)
  return (
    <ThemeProvider theme={lightTheme}>
      <Homepage />
    </ThemeProvider>
  )
}

export default App