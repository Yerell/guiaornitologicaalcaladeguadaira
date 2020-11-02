import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from "./Header.js"
import Home from "../../pages/Home.js"
import Footer from "./Footer.js"
import Pajaros from "./Pajaros.js"
import Lugares from "./Lugares.js"
import PajaroInfo from "./PajaroInfo.js"


const App = () => {
return (
    <>
      <BrowserRouter>
        <Header/>
        <Switch>
        <Route exact path='/' component={Home} />
                <Route path='/pajaros/:id' component={PajaroInfo} />
        <Route path='/pajaros' component={Pajaros} />
                          <Route path='/lugares' component={Lugares}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </>
  )
}
export default App;