import React, { Component } from 'react';
import ContainerView from 'react/components/ContainerView';
import ModuleLayout from 'react/components/ModuleLayout';
import thePDF from 'images/Logo.png';

class ReportsContainer extends Component {
	render() {
		//...

		return (
			<ModuleLayout hasHeader>
					<div className = 'ReportsContainer'>
						
					</div>
					<label className = 'textBasedReport'> Report Data </label>
					<div className = 'bottomContainer'>
						<div className = 'withinBottomContainer'>
							<table className = 'reportDataTable'>
								<tr>
									<td id = 'waistField'>
										Waist: 
									</td>
									<td id = 'heightField'>
										Height: 
									</td>
								</tr>
								<td id = 'weightField'>
									Weight: 
								</td>
								<td id = 'FNField'>
									First Name: 
								</td>
								<td id = 'LNField'>
									Last Name: 
								</td>
							</table>
						</div>
					</div>

				

			</ModuleLayout>
		);
	}
}

export default ReportsContainer;
