import axios from 'axios';
import {
	getStoryIds,
	getStory,
	newStoriesUrl,
	storyUrl
} from '../services/hnApi';
import { singularStory, storyIds, emptySingularStory } from '../fixtures/index';

jest.mock('axios');

describe('Hackernews Api', () => {
	beforeEach(() => {
		jest.resetAllMocks();
	});

	describe('getStory functionnality', () => {
		it('requests and gets story from HN Api', async () => {
			axios.get.mockImplementation(() =>
				Promise.resolve({ data: singularStory })
			);

			const entity = await getStory(1);

			expect(axios.get).toHaveBeenCalledTimes(1);
			expect(axios.get).toHaveBeenCalledWith(`${storyUrl + 1}.json`);
			expect(entity).toEqual(singularStory);
		});
	});
});
