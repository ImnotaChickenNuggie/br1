import React from 'react';

const layout = ({ children }) => {
	return (
		<div className='w-screen h-screen bg-cultured overflow-x-hidden'>
			{children}
		</div>
	);
};

export default layout;
