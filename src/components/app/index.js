import React from 'react';

import AMUIReact from 'amazeui-react';
var Button = AMUIReact.Button;

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h2>Index</h2>
        <Button>Default</Button>
        { this.props.children || 'welcome to index'}
      </div>
    )
  }
}
