import React from 'react';

const menuLateral = () => {
	return (
		<div className='static flex flex-col gap-y-10 mt-40'>
			<a className='text-2xl cursor-pointer ease-in duration-200 hover:scale-110 hover:after:content-[".:"] after:fixed after:ml-1 after:mt-2'>
				Ln
			</a>
			<a className='text-2xl cursor-pointer ease-in duration-200 hover:scale-110 hover:after:content-[".:"] after:fixed after:ml-1 after:mt-2'>
				Cp
			</a>
			<a className='text-2xl cursor-pointer ease-in duration-200 hover:scale-110 hover:after:content-[".:"] after:fixed after:ml-1 after:mt-2'>
				Bh
			</a>
			<a className='text-2xl cursor-pointer ease-in duration-200 hover:scale-110 hover:after:content-[".:"] after:fixed after:ml-1 after:mt-2'>
				Gh
			</a>
		</div>
	);
};

export default menuLateral;
