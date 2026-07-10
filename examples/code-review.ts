import { PlannerAgent } from '../src/roles/planner';
import { CriticAgent } from '../src/roles/critic';

const planner = new PlannerAgent();
const critic = new CriticAgent();
console.log('Running collaborative code review simulation...');
