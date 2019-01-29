import React from 'react'
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom'
import CodeTest from 'views/CodeTest'

import styles from '../style/index.css'

// This is show case how you can lazy loading component
// const ExampleRouteHandler = LazyLoading(() => import('views/example'))
// const Header = LazyLoading(() => import('common/components/Header/Header'))

// This show case how you can access routing info in your component
// const HeaderWithRouter = withRouter((props) => <Header {...props} />)

module.exports = (
  <div>
    <Switch>
      <Route path="*" component={CodeTest} />
    </Switch>
  </div>
)
