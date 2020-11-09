import React, { Component } from 'react';
import CommentAdd from 'react/components/blogcomment/comment-add';
import CommentList from 'react/components/blogcomment/comment-list';
import ContainerView from 'react/components/ContainerView';
import ModuleLayout from 'react/components/ModuleLayout';

class BlogContainer extends Component {
	state = {
		comments: [
			{
				username: 'Somebody',
				title: 'Here is a title',
				content: 'Hey How are you?'
			}
		]
	};

	addComment = (comment) => {
		const { comments } = this.state;
		comments.unshift(comment);
		this.setState({ comments });
	};

	deleteComment = (index) => {
		const { comments } = this.state;
		comments.splice(index, 1);
		this.setState({ comments });
	};

	render() {
		const { comments } = this.props;
		return (
			<ModuleLayout hasHeader>
				<ContainerView>
					<div className='BlogContainer'></div>
					<div className='row'>
						<h1>Create your blog</h1>
					</div>

					<CommentAdd addComment={this.addComment} />
					<CommentList
						comments={this.state.comments}
						deleteComment={this.deleteComment}
					/>
				</ContainerView>
			</ModuleLayout>
		);
	}
}

export default BlogContainer;
