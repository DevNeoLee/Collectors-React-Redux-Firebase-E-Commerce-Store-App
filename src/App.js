import Homepage from './pages/homepage/homepage'
import { Switch, Route } from 'react-router-dom'
import Shoppage from './pages/shop/shop'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/shop" component={Shoppage} />
    </Switch>
  )
}

export default App