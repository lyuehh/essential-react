import React from 'react';

export default class Message extends React.Component {
  constructor(props) {
    super(props)
    this.state = {message: ''}
  }

  componentDidMount() {
    var id = this.props.params.id;
    this.setState({message: 'message id:' + id});
  }

  render() {
    return (
      <div>
        <h3>message page</h3>
        <p>{this.state.message}</p>
      </div>
    )
  }
}
