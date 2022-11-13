import './App.css';
import { ThemeProvider,createGlobalStyle } from 'styled-components';
import StyledButton, { FancyButton, SubmitButton, DarkButton } from './components/button/Button'
import logo from './logo.svg'
import AnimatedLogo from './components/image/Image';

const theme = {
  dark: {
    primary: '#000',
    text: '#fff'
  },
  light: {
    primary: '#fff',
    text: '#000'
  },
  fontFamily:'Segoe UI'
}
const GlobalStyle = createGlobalStyle`
  button {
    font-family: ${(props)=> props.theme.fontFamily};
  }
`
function App() {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle/>
          <div className="App">
            {/* <button>Button</button> */}
            <AnimatedLogo src={logo} alt='logo' />
            <StyledButton type='submit'>Button</StyledButton>
            <div><br /></div>
            <StyledButton variant='outline'>Button</StyledButton>
            <div><br /></div>
            <FancyButton as='a'>Fancy Button</FancyButton>
            <div><br /></div>
            <SubmitButton>Submit</SubmitButton>
            <div><br /></div>
            <DarkButton>Dark</DarkButton>
          </div>
    </ThemeProvider>
  );
}

export default App;