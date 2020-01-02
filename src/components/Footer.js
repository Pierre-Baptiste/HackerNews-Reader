import React from 'react';

export const Footer = () => {
	return (
		<div className='footer'>
			© Website created with{' '}
			<span role='img' aria-label='superman'>
				🦸‍♂️
			</span>{' '}
			by{' '}
			<a
				href='https://www.pbdupire.com/'
				target='_blank'
				rel='noopener noreferrer'>
				Pierre-Baptiste Dupire
			</a>{' '}
			with the help of{' '}
			<a
				href='https://www.youtube.com/watch?v=7DLRJj1YjvQ&t=2s'
				target='_blank'
				rel='noopener noreferrer'>
				Karl Hadwen's tutorial
			</a>
		</div>
	);
};
