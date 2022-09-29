import React from 'react';
import Icon from '../images/icon-dark-mode.svg';

const header = () => {
	return (
		<div className='sticky top-0 z-50 flex flex-row justify-between backdrop-blur-sm'>
			<div className='p-2'>
				<a
					className='text-2xl tracking-[-0.08em] font-medium'
					href='#!'
				>
					BR1
				</a>
			</div>
			<div className='flex flex-row gap-x-5 items-center pr-4'>
				<a
					className='text-xl transition duration-200 ease-in hover:scale-110'
					href='#!'
				>
					Inicio
				</a>
				<a
					className='text-xl transition duration-200 ease-in hover:scale-110'
					href='#!'
				>
					Sobre de mi
				</a>
				<a
					className='text-xl transition duration-200 ease-in hover:scale-110'
					href='#!'
				>
					Proyectos
				</a>
				<a
					className='text-xl transition duration-200 ease-in hover:scale-110'
					href='#!'
				>
					Contacto
				</a>
				<a
					className='text-xl transition duration-200 ease-in hover:scale-110'
					href='#!'
				>
					<Icon />
				</a>
			</div>
		</div>
	);
};

export default header;
