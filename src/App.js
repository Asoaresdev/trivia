
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import Router from './routes/Router'

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
      <div>
        <CssBaseline >
          <Router />
        </CssBaseline>
      </div>
    </ThemeProvider>
  );
}

export default App;
