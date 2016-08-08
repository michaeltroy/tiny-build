import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory, Router, Route, Link, History } from 'react-router'

// import NotFound from './ui/404'

import HelloWorld from './ui/hello-world'

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('content')
);
