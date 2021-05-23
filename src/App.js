
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import Router from './routes/Router'
import { Container } from './style'

function App() {

  const theme = createMuiTheme ({
    palette: {
      primary: {
        main: '#FFB800',
      },
      secondary: {
        main: '#b28000'
      }
    }
  })
  return (
    <ThemeProvider theme= { theme } >
      <Container>
        <CssBaseline >
          <Router />
        </CssBaseline>
      </Container>
    </ThemeProvider>
  );
}

export default App;
