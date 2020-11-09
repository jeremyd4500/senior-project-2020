import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentItem from 'react/components/blogcomment/comment-item';

class CommentList extends Component {
	static propTypes = {
		comments: PropTypes.array.isRequired,
		deleteComment: PropTypes.func.isRequired
	};

	render() {
		const { comments, deleteComment } = this.props;
		const display = comments.length === 0 ? 'block' : 'none';
		return (
			<div>
				<h2 className='reply'>Blogs:</h2>
				<h3 style={{ display }}>
					There is no blogs yet. Please post one in here!
				</h3>
				<ul className='list-group'>
					{comments.map((comment, index) => (
						<CommentItem
							comment={comment}
							key={index}
							deleteComment={deleteComment}
							index={index}
						/>
					))}
				</ul>
			</div>
		);
	}
}

export default CommentList;
