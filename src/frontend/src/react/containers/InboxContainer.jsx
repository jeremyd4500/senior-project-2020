import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModuleLayout from 'react/components/ModuleLayout';
import ContainerView from 'react/components/ContainerView';
import MessageListView from 'react/components/inbox/MessageListView';
import NewMessageView from 'react/components/inbox/NewMessageView';
import {
	clearThreadMessages,
	fetchMessages,
	fetchThreadMessages,
	fetchThreadMessagesList,
	fetchUsers,
	sendMessage,
	setCurrentThread
} from 'state/actions';
import { formatDate } from 'utils';

class InboxContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loadedThreads: false,
			messageBoxView: 'none',
			newMessage: {
				to: null,
				subject: null,
				message: null
			},
			recipients: []
		};
	}

	componentDidMount() {
		const {
			current_thread_id,
			fetchMessages,
			fetchUsers,
			role
		} = this.props;
		switch (role) {
			case 0: {
				fetchUsers(0, true);
				fetchUsers(1, true);
				fetchUsers(2, true);
				break;
			}
			case 1: {
				fetchUsers(1, true);
				fetchUsers(2, true);
				break;
			}
			case 2: {
				fetchUsers(1);
				break;
			}
			default: {
				fetchUsers(0, true);
				fetchUsers(1, true);
				fetchUsers(2, true);
			}
		}
		fetchMessages();
		if (current_thread_id) {
			fetchThreadMessages(current_thread_id);
			this.setState({
				messageBoxView: 'viewMessage'
			});
		}
	}

	componentDidUpdate(prevProps, prevState) {
		const {
			props: { current_thread_id, fetchThreadMessages, users },
			state: { recipients }
		} = this;
		if (users && users.length) {
			if (recipients.length !== users.length) {
				const stateUsers = users.map((user, index) => ({
					id: user.id,
					name: `${user.first_name} ${user.last_name}`,
					username: user.username
				}));
				this.setState({ recipients: stateUsers });
			}
		}

		if (
			current_thread_id &&
			prevProps.current_thread_id !== current_thread_id
		) {
			fetchThreadMessages(current_thread_id);
			this.setState({
				messageBoxView: 'viewMessage'
			});
		}
	}

	render() {
		console.log('##########################');
		console.log('##########################');
		console.log(this.props);
		console.log(this.state);
		console.log('##########################');
		console.log('##########################');
		return (
			<ModuleLayout hasHeader>
				<ContainerView>
					<div className='InboxContainer'>
						<div className='InboxContainer__interface'>
							<div className='InboxContainer__inbox-list'>
								{this.renderInboxList()}
							</div>
							<div className='InboxContainer__message-box'>
								{this.renderMessageBox()}
							</div>
						</div>
						<div className='InboxContainer__footer'>
							{this.renderFooter()}
						</div>
					</div>
				</ContainerView>
			</ModuleLayout>
		);
	}

	renderFooter = () => (
		<button
			className='button InboxContainer__footer-button'
			disabled={
				this.state.messageBoxView !== 'none' &&
				this.state.messageBoxView !== 'viewMessage'
			}
			onClick={() => this.setState({ messageBoxView: 'newMessage' })}
		>
			New Message
		</button>
	);

	renderInboxList = () => {
		const {
			clearThreadMessages,
			fetchThreadMessagesList,
			messages = [],
			setCurrentThread,
			thread_messages = {}
		} = this.props;

		if (!messages || !messages.length) {
			return <p className='InboxView__none'>You have no messages</p>;
		} else {
			if (!this.state.loadedThreads) {
				this.setState(
					{
						loadedThreads: true
					},
					() => {
						clearThreadMessages();
						messages.forEach((message) => {
							fetchThreadMessagesList(message.uuid);
						});
					}
				);
			} else {
				return messages.map((message, index) => (
					<MessageListView
						content={this.showThreadInfo(
							thread_messages,
							message.uuid
						)}
						date={formatDate(message.sent_at)}
						handleSelect={() => setCurrentThread(message.uuid)}
						key={index}
						subject={message.subject}
					/>
				));
			}
		}
	};

	renderMessageBox = () => {
		if (
			!this.props.current_thread &&
			this.state.messageBoxView === 'none'
		) {
			return (
				<div className='InboxContainer__message-box-no-selection'>
					<p>
						Select a message from the left panel to view it. Or you
						can click "New Message" at the bottom to write a new
						message.
					</p>
				</div>
			);
		} else if (this.state.messageBoxView === 'newMessage') {
			return (
				<NewMessageView
					setRecipient={(recipient) =>
						this.setState({
							newMessage: {
								...this.state.newMessage,
								to: recipient
							}
						})
					}
					setSubject={(subject) =>
						this.setState({
							newMessage: {
								...this.state.newMessage,
								subject: subject
							}
						})
					}
					setMessage={(message) =>
						this.setState({
							newMessage: {
								...this.state.newMessage,
								message: message
							}
						})
					}
					recipient={this.state.newMessage.to}
					recipients={this.state.recipients}
					canSubmit={() => {
						if (
							this.state.newMessage.to &&
							this.state.newMessage.subject &&
							this.state.newMessage.message
						) {
							return true;
						} else {
							return false;
						}
					}}
					handleSubmit={() => {
						this.props.sendMessage(
							{
								subject: this.state.newMessage.subject,
								message: this.state.newMessage.message
							},
							this.state.newMessage.to.value
						);
					}}
					handleCancel={() => {
						this.setState({
							messageBoxView: 'none',
							newMessage: {
								to: null,
								subject: null,
								message: null
							}
						});
					}}
				/>
			);
		} else if (this.state.messageBoxView === 'viewMessage') {
			return (
				<div
					style={{
						padding: '10px'
					}}
				>
					<b>Subject: </b>
					{this.props.current_thread
						? this.props.current_thread.subject
						: ''}
					<br />
					<br />
					<b>Messages:</b>
					{this.props.current_thread
						? this.props.current_thread.messages.map(
								(message, index) => {
									const date = formatDate(message.sent_at);
									return (
										<div key={index}>
											<hr />
											<b>Sent by: </b>{' '}
											{message.sender.display_name}
											<br />
											<b>Sent on: </b>{' '}
											{`${date.date} at ${date.time}`}
											<br />
											<b>Content: </b>
											{message.content}
										</div>
									);
								}
						  )
						: ''}
				</div>
			);
		}
	};

	setCurrentMessage = (data) => {
		this.setState({
			currentMessage: {
				content: data.content,
				subject: data.subject
			}
		});
	};

	showThreadInfo = (thread_messages, uuid) => {
		if (thread_messages && uuid) {
			if (thread_messages[uuid] && thread_messages[uuid].length) {
				return {
					sender: thread_messages[uuid][0].sender.display_name,
					message: thread_messages[uuid][0].content
				};
			}
		}
	};
}

const mapStateToProps = (state) => {
	return {
		role: state.user.info.role,
		messages: state.messages.messages,
		thread_messages: state.messages.thread_messages,
		current_thread_id: state.messages.current_thread_id,
		current_thread: state.messages.thread,
		users: state.user.users
	};
};

const mapDispatchToProps = {
	clearThreadMessages,
	fetchMessages,
	fetchThreadMessages,
	fetchThreadMessagesList,
	fetchUsers,
	sendMessage,
	setCurrentThread
};

export default connect(mapStateToProps, mapDispatchToProps)(InboxContainer);
