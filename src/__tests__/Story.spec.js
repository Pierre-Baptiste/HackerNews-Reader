import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import { Story } from '../components/Story';
import { singularStory } from '../fixtures/index';
import { getStory } from '../services/hnApi';

beforeEach(() => {
	cleanup();
	jest.resetAllMocks();
});

jest.mock('../services/hnApi', () => ({
	getStory: jest.fn(),
	getStoryIds: jest.fn()
}));

test('renders the story component with content', async () => {
	getStory.mockImplementation(() => Promise.resolve(singularStory));

	const { getByText, queryByTestId } = render(<Story storyId='1' />);
	await waitForElement(() => [
		expect(queryByTestId('story')).toBeTruthy(),
		expect(getByText('Tarnished: Google Responds')).toBeTruthy(),
		expect(queryByTestId('story-by').textContent).toEqual('By: Karl Hadwen')
	]);
});
