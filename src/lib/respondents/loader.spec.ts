import { loadTopRespondents } from './loader';
import * as factory from '../utils/factory';

const cities = [factory.NYC()];
const industries = ['Financial Services', 'Computer Software'];
const jobTitles = ['AI/ML Scientist', '.NET Developer'];

describe('Top Respondents Loader', () => {
	test('loads and ranks the top respondents', async () => {
		const project = factory.project({
			numberOfParticipants: 4,
			professionalIndustry: industries,
			professionalJobTitles: jobTitles,
			cities
		});
		const topRespondents = await loadTopRespondents(project);
		expect(topRespondents.every(r => r.city === 'New York, NY, USA')).toBe(true);
		expect(topRespondents.every(r => {
			const jobMatch = jobTitles.includes(r.jobTitle);
			const industryMatch = industries.some(i => r.industry.includes(i));
			return jobMatch || industryMatch;
		})).toBe(true);
	});
});