import Homepage from './pages/homepage/homepage'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />

    </Switch>
  )
}

export default App