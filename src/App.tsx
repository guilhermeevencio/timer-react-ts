import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
    <div className="App">
      <h1>Hello World!</h1>
    </div>
    </ThemeProvider>
  )
}

export default App
