
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import Home from "./pages/Home/Home";


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
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
