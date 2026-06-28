export interface TaskDAG {
  taskId: string;
  dependencies: string[];
  description: string;
}

export class PlannerAgent {
  decomposeGoal(goal: string): TaskDAG[] {
    return [
      { taskId: 'step_1', dependencies: [], description: `Analyze prerequisites for: ${goal}` },
      { taskId: 'step_2', dependencies: ['step_1'], description: `Formulate execution strategy` },
      { taskId: 'step_3', dependencies: ['step_2'], description: `Generate verified output` }
    ];
  }
}
