import React from 'react';
import Dots from '../images/dots_pattern.svg';

const footer = () => {
	return (
		<div>
			<div className='flex flex-row justify-between items-center border-t-2 border-smoky'>
				<div className='flex flex-row p-4 gap-x-12 ml-6'>
					<a href='#!' className='font-medium text-xl'>
						LinkedIn
					</a>
					<a href='#!' className='font-medium text-xl'>
						Codepen
					</a>
					<a href='#!' className='font-medium text-xl'>
						Behance
					</a>
					<a href='#!' className='font-medium text-xl'>
						Github
					</a>
				</div>
				<div>
					<Dots className='w-24 mr-6' />
				</div>
			</div>
			<div className='bg-smoky'>
				<p className='text-cultured text-md text-center p-4'>
					Diseñado con ❤️ desarrollado con ☕️
				</p>
			</div>
		</div>
	);
};

export default footer;
