import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentItem extends Component {
	static propTypes = {
		comment: PropTypes.object.isRequired,
		deleteComment: PropTypes.func.isRequired,
		index: PropTypes.number.isRequired
	};

	handleClick = () => {
		const { comment, deleteComment, index } = this.props;
		if (window.confirm('Are you sure delete the comment?')) {
			deleteComment(index);
		}
	};

	render() {
		const { comment } = this.props;
		return (
			<p className='list-group-item'>
				<div className='handle'>
					<a href='javascript:;' onClick={this.handleClick}>
						Delete
					</a>
				</div>

				<p className='username'>
					<span>{comment.username} </span>
					<span>post:</span>
				</p>
				<p className='title'>
					<span>{comment.title} </span>
				</p>
				<p className='sentence'>{comment.content}</p>
			</p>
		);
	}
}

export default CommentItem;
