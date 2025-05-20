'use client';
import React from 'react';
import './Home.css';
import { SearchBar } from '../../modules/home/SearchBar';
import { HomeHeader } from '../../modules/home/HomeHeader';
import { Cards } from '../../modules/home/Cards';

export type HomeProps = {
	// types...
};

const Home: React.FC<HomeProps> = ({}) => {
	return (
		<article className='main-container-home'>
			<HomeHeader />
			<SearchBar />
			<Cards />
		</article>
	);
};

export default Home;
