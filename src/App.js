import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// import Homepage from './pages/homepage/homepage';
// import Shoppage from './pages/shoppage/shoppage';
// import Loginpage from './pages/loginpage/loginpage';
// import CheckoutPage from './pages/checkoutpage/checkoutpage';
// import Productpage from './pages/productpage/productpage';
 
import Header from './components/header/header';
import Footer from './components/footer/footer';

import { auth, createUserProfileDocument } from './firebase/utils';
import { setCurrentUser } from './redux/user/user-actions';
import { selectCurrentUser } from './redux/user/user-selectors';

const Homepage = lazy(()=> import('./pages/homepage/homepage'));
const Loginpage = lazy(()=> import('./pages/loginpage/loginpage'));
const Shoppage = lazy(()=> import('./pages/shoppage/shoppage'));
const CheckoutPage = lazy(()=> import('./pages/checkoutpage/checkoutpage'));
const Productpage = lazy(()=> import('./pages/productpage/productpage'));


class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });

        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){

    return (
      <>
        <Header />
        <div className="wholePage">
          <Switch>
            <Suspense fallback={<div>loading...</div>}>
              <Route exact path="/" component={Homepage} />
              <Route path="/shop" component={Shoppage} />
              <Route exact path="/login" render={()=> this.props.currentUser ? (<Redirect to="/"  />) : (<Loginpage />)} />
              <Route exact path="/checkout" component={CheckoutPage}></Route>
              <Route exact path="/:id" component={Productpage}></Route>
            </Suspense>
          </Switch>
        </div>   
        <Footer />
      </>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);