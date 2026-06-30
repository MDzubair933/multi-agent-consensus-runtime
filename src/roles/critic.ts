export interface Critique {
  issue: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  confidence: number;
}

export class CriticAgent {
  evaluateProposal(proposal: string): Critique[] {
    const critiques: Critique[] = [];
    if (proposal.length < 20) {
      critiques.push({ issue: 'Proposal lacks required technical detail', severity: 'medium', confidence: 0.85 });
    }
    return critiques;
  }
}
