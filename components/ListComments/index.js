import React from 'react'
import Comment from '../Comment'

export default class extends React.Component {
  renderComments() {
    const { comments } = this.props

    return comments.map((item, i) => <Comment key={i} item={item} />)
  }

  render() {
    return (
      <div>
        {this.renderComments()}
      </div>
    )
  }
}
