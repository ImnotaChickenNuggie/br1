import React from 'react';
import { Header, Footer } from './index';

const layout = ({ children }) => {
	return (
		<div className='w-screen h-screen bg-cultured overflow-x-hidden'>
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default layout;
