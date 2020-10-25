import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModuleLayout from 'react/components/ModuleLayout';
import { fetchMessages, fetchUsers } from 'state/actions';

class InboxContainer extends Component {
	componentDidMount() {
		const {
			fetchMessages,
			fetchUsers,
			info: { role }
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
	}

	render() {
		console.log('##########################');
		console.log('##########################');
		console.log(this.props);
		console.log('##########################');
		console.log('##########################');
		return (
			<ModuleLayout hasHeader>
				<div className='container-wrapper'>
					<div className='InboxContainer'>Hello There</div>
				</div>
			</ModuleLayout>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		info: state.user.info,
		messages: state.messages.messages,
		users: state.user.users
	};
};

const mapDispatchToProps = {
	fetchMessages,
	fetchUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(InboxContainer);
