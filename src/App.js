import React from 'react';
import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import CheckoutPage from './pages/checkout-page/checkout-page.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

class App extends React.Component {

  //property que le seteo yo
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    //onAuthStateChanged --> me devuele el user que acaba de loggear y permite su persistencia, manteniendo su sesion siempre abierta
    // devuelve una funcion que la llama cuando cierra la sesion y la guarda en la property que creamos
    auth.onAuthStateChanged( async userAuth => {
      //si el usuario esta signing in
      //(cuando cierra sesion devuelve null)
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot( snapShot => {
          setCurrentUser ({
              id:snapShot.id,
              ...snapShot.data()
            })
          })
      } else { //cuando el usuario esta signing out
        setCurrentUser(userAuth) //cuerrent user null
      }
    })
  }

  componentWillUnmount() {
    //invocar la unsubcription
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route 
            exact 
            path='/signin'
            render = {() => 
              this.props.currentUser?
              (<Redirect to='/' />)
              : (<SignInAndSignUp />)
            } 
          />
          <Route exact path='/checkout' component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
