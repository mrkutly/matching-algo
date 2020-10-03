import { promises as fs } from 'fs';
import { Project } from '../types';

export const loadProject = async (): Promise<Project> => {
	const data = await fs.readFile('./data/project.json', 'utf8');
	return JSON.parse(data);
};
