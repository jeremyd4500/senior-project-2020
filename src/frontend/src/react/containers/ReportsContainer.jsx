import React, { Component } from 'react';
import ContainerView from 'react/components/ContainerView';
import ModuleLayout from 'react/components/ModuleLayout';

class ReportsContainer extends Component {
	render() {
		//...

		return (
			<ModuleLayout hasHeader>
				<ContainerView>
					<div className='ReportsContainer'>
						<h1>Hello</h1>
					</div>
				</ContainerView>
			</ModuleLayout>
		);
	}
}

export default ReportsContainer;
