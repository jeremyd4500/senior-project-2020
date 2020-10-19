import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMessages } from 'state/actions';

class InboxView extends Component {
	componentDidMount() {
		this.props.fetchMessages();
	}

	render() {
		return <div className='InboxView'>{this.renderMessages()}</div>;
	}

	renderMessages = () => {
		const {
			messages: { messages }
		} = this.props;
		if (!messages || !messages.results || !messages.results.length) {
			return <p className='InboxView__none'>You have no messages</p>;
		} else {
			return messages.results.map((message, index) => (
				<div className='InboxView__item' key={index}>
					{`Message ${index}`}
					// do something with message data
				</div>
			));
		}
	};
}

const mapStateToProps = (state) => {
	return {
		messages: state.messages
	};
};

const mapDispatchToProps = {
	fetchMessages
};

export default connect(mapStateToProps, mapDispatchToProps)(InboxView);
