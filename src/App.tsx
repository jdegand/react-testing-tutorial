//import { Application } from './components/application/Application'
//import { Counter } from './components/counter/Counter'
import { MuiMode } from './components/mui/MuiMode'
import { AppProviders } from './providers/AppProviders'
import './App.css'

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
      </div>
    </AppProviders>
  )
}

export default App
