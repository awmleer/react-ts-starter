import * as React from "react"
import {Hello} from './components/Hello'
import { hot } from 'react-hot-loader'

@hot(module)
export class App extends React.Component<{}, {}> {
  render() {
    return (
      <Hello compiler="TypeScript" framework="React" />
    )
  }
}

