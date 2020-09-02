
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import History from '../pages/History'
import TranslationShow from '../pages/TranslationShow'

export default (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/:id' component={ TranslationShow } />
            <Route path='/history' component={ History } />
        </Switch>
    </BrowserRouter>
)

