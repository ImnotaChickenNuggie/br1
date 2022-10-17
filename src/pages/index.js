import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import Icon from '../images/rotate-dots.svg';
import Layout from '../components/layout';

const IndexPage = ({ children }) => {
	return (
		<Layout>
			<section className='h-full bg-cultured'>
				<div className='mx-auto flex'>
					<div className='mx-auto mt-12'></div>
				</div>
			</section>
			<section className='h-full bg-emerald-400'></section>
			{/* <Icon /> */}
			<StaticImage alt='' src='../images/build.png' />
			<p className='ml-20'>lorem ipsum</p>
		</Layout>
	);
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
