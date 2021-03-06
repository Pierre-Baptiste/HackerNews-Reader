import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../services/hnApi';
import { Story } from '../components/Story';
import { Footer } from '../components/Footer';
import {
	GlobalStyle,
	StoriesContainerWrapper
} from '../styles/StoriesContainerStyles';
import { FooterStyles } from '../styles/FooterStyles';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

export const StoriesContainer = () => {
	const { count } = useInfiniteScroll();
	const [storyIds, setStoryIds] = useState([]);

	useEffect(() => {
		getStoryIds().then(data => setStoryIds(data));
	}, []);

	return (
		<>
			<GlobalStyle />
			<StoriesContainerWrapper data-testid='stories-container'>
				{/* <h1 className='headTitle'>Hacker News Stories</h1> */}
				<div id='container'>
					Hacker
					<div id='flip'>
						<div>
							<div>Code</div>
						</div>
						<div>
							<div>Design</div>
						</div>
						<div>
							<div>Business</div>
						</div>
					</div>
					News
				</div>
				{storyIds.slice(0, count).map(storyId => (
					<Story key={storyId} storyId={storyId} />
				))}
			</StoriesContainerWrapper>
			<FooterStyles>
				<Footer />
			</FooterStyles>
		</>
	);
};
