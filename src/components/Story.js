import React, { useState, useEffect, memo } from 'react';
import { getStory } from '../services/hnApi';
import {
	StoryWrapper,
	StoryTitle,
	StoryMeta,
	StoryMetaElement
} from '../styles/StoryStyles';
import { mapTime } from '../mappers/mapTime';

export const Story = memo(function Story({ storyId }) {
	const [story, setStory] = useState({});

	useEffect(() => {
		getStory(storyId).then(data => data && data.url && setStory(data));
	}, []);

	return story && story.url ? (
		<StoryWrapper data-testid='story'>
			<StoryTitle>
				<a href={story.url} target='_blank'>
					{story.title}
				</a>
			</StoryTitle>
			<StoryMeta>
				<span data-testid='story-by'>
					<StoryMetaElement color='#999'>By:</StoryMetaElement>{' '}
					{story.by}
				</span>
				<span data-testid='story-time'>
					<StoryMetaElement color='#999'>Posted:</StoryMetaElement>{' '}
					{mapTime(story.time)} ago
				</span>
			</StoryMeta>
		</StoryWrapper>
	) : null;
});
