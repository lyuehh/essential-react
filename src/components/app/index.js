import React from 'react';

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h2>Index</h2>
        { this.props.children || 'welcome to index'}
      </div>
    )
  }
}
