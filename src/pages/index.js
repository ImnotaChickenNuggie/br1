import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import Icon from '../images/rotate-dots.svg';
import Layout from '../components/layout';

const IndexPage = ({ children }) => {
	return (
		<Layout>
			<div className=' ml-20 w-10 h-10 bg-gold-500 '>
				<p className='font-ichiji'>DeV</p>
			</div>
			{/* <Icon /> */}
			<StaticImage alt='' src='../images/build.png' />
			<p className='ml-20'>lorem ipsum</p>
		</Layout>
	);
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
