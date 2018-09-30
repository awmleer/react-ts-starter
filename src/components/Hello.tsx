import * as React from "react"
import {Button} from 'antd'
import styled from 'react-emotion'

interface Props { compiler: string; framework: string; }

const PinkText = styled('p')`
  color: hotpink;
`;

// 'Props' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<Props, {}> {
  x(y: any) {
    console.log(y)
  }

  render() {
    return (
      <div>
        <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
        <PinkText>emotional text</PinkText>
        <Button type="primary">Test Button 2</Button>
      </div>
    )
  }
}
