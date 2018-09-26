import * as React from "react"
import {Button} from 'antd'

interface Props { compiler: string; framework: string; }

// 'Props' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<Props, {}> {
  x(y: any) {
    console.log(y)
  }

  render() {
    console.log(this.x`123`)
    return (
      <div>
        <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
        <Button type="primary">Test Button 2</Button>
      </div>
    )
  }
}
