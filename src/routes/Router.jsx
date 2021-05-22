import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from '../components/Header/Header'
import Error from '../pages/Erro/Error'
import Home from '../pages/Home/Home'
import Result from '../pages/Result/Result'
import StartTrivia from '../pages/StartTrivia/StartTrivia'


const Router = () => {
    return(
        <main>
            <Header />
            <BrowserRouter>
                <Switch>
                    <Route exact path={'/'}>
                        <Home />
                    </Route>
                    <Route exact path={'/trivia/:number'}>
                        <StartTrivia />
                    </Route>
                    <Route exact path={'/result'}>
                        <Result />
                    </Route>
                    <Route >
                        <Error />
                    </Route>
                </Switch>
            </BrowserRouter>
        </main>
    )
}
export default Router