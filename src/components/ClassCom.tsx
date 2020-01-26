import React, { Component } from 'react'

type Props = {
  title: string;
}
type State = {
  status: string;
}

export default class ClassCom extends Component<Props, State> {

  render() {
    const { title } = this.props;

    console.log(title);
    return (
      <div>
        <h1>{title}</h1>
      </div>
    )
  }
}
