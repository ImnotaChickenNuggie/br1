import React from 'react';

const button = ({ titulo }) => {
	return (
		<button className='bg-smoky p-3 btn-hexagon'>
			<div className='bg-cultured btn-hexagon-border'>
				<p className='pt-2'>{titulo}</p>
			</div>
		</button>
	);
};

export default button;
