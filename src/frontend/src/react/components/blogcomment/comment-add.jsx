import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentAdd extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			username: '',
			title: '',
			content: ''
		};
	}

	static propTypes = {
		addComment: PropTypes.func.isRequired
	};

	handleSubmit = () => {
		const comment = this.state;
		this.props.addComment(comment);
		this.setState({
			username: '',
			title: '',
			content: ''
		});
	};

	handleNameChange = (event) => {
		const username = event.target.value;
		this.setState({ username });
	};

	handleTitleChange = (event) => {
		const title = event.target.value;
		this.setState({ title });
	};

	handleContentChange = (event) => {
		const content = event.target.value;
		this.setState({ content });
	};

	render() {
		const { username, title, content } = this.state;
		return (
			<div className='col-md-4'>
				<form className='form-horizontal'>
					<div className='form-group'>
						<label>Username: </label>
						<input
							type='text'
							className='form-user'
							placeholder='username'
							value={username}
							onChange={this.handleNameChange}
						/>
					</div>
					<br></br>
					<div className='form-group'>
						<label>Title: </label>
						<input
							type='text'
							className='form-user'
							placeholder='title'
							value={title}
							onChange={this.handleTitleChange}
						/>
					</div>
					<br></br>
					<div className='form-group'>
						<label>Content: </label>
						<br></br>
						<textarea
							className='form-control'
							placeholder='content'
							value={content}
							onChange={this.handleContentChange}
						></textarea>
					</div>
					<br></br>
					<div className='form-group'>
						<div className='col-sm-offset-2 col-sm-10'>
							<button
								type='button'
								className='btn'
								onClick={this.handleSubmit}
							>
								Submit
							</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default CommentAdd;
