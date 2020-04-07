import React, { useState, useEffect } from "react"
import "./App.css"
import { Route, Switch } from "react-router-dom"

import Homepage from "./pages/homepage/homepage.component"
import ShopPage from "./pages/shop/shop.component"
import Header from "./components/header/header-component"
import SignInAndSignUpComponent from "./pages/sign-in-sign-up-form/sign-in-sign-up-component"
import { auth } from "./firebase/firebase.utils"

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    let unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
    })
    return () => {
      unsubscribeFromAuth()
    }
  }, [])

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSignUpComponent} />
        {/* <Route exact path="/hats" component={HatsPage} /> */}
      </Switch>
    </div>
  )
}

export default App
