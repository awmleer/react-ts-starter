import * as React from "react";
import {Button} from 'antd';
// import Button from 'antd/es/button/button';
import 'antd/es/button/style/css';

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
  render() {
    return (
      <div>
        <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
        <Button type="primary">Test Button</Button>
      </div>
    );
  }
}
