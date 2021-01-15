import Homepage from './pages/homepage/homepage'
import { Switch, Route } from 'react-router-dom'
import Shoppage from './pages/shop/shop'
import Header from './components/header/header'

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shoppage} />
      </Switch>
    </>
  )
}

export default App