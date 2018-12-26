import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Refresh from '../containers/Refresh'
import Home from './Home'
import Vendors from '../containers/Vendors'
import Accounts from '../containers/Accounts'
import Download from './Download'

const App = () =>
  <Router>
    <div>
      <Refresh />
      <Route path='/' exact component={Home} />
      <Route path='/vendors' exact component={Vendors} />
      <Route path='/accounts' exact component={Accounts} />
      <Route path='/download' exact component={Download} />
    </div>
  </Router>
export default App
