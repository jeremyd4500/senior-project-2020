import React from 'react';
import Header from 'react/components/Header';
import PropTypes from 'prop-types';

import 'moduleLayout.less';

const ModuleLayout = (props) => {
	const { children, hasHeader, headerTabs } = props;

	return (
		<div className='ModuleLayout'>
			{hasHeader && headerTabs && <Header tabs={headerTabs} />}
			<div className='ModuleLayout__children'>{children}</div>
		</div>
	);
};

ModuleLayout.propTypes = {
	hasHeader: PropTypes.bool,
	headerTabs: PropTypes.array
};

export default ModuleLayout;
