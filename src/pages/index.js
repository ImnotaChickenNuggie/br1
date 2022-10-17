import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import Icon from '../images/rotate-dots.svg';
import { Layout, MenuLateral } from '../components/index';

const IndexPage = () => {
	return (
		<Layout>
			<section className='h-full bg-cultured'>
				<div className='mx-auto flex'>
					<MenuLateral />
				</div>
			</section>
			<section className='h-full bg-emerald-400'></section>
			<StaticImage alt='' src='../images/build.png' />
		</Layout>
	);
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
