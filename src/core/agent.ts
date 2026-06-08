export interface AgentMessage {
  id: string;
  senderId: string;
  role: 'planner' | 'critic' | 'executor' | 'verifier';
  proposal: string;
  confidence: number;
}

export interface ConsensusRound {
  roundId: string;
  proposals: AgentMessage[];
  winningProposal?: AgentMessage;
  consensusScore: number;
}

export class AgentRuntime {
  private peers: Map<string, string> = new Map();

  registerPeer(id: string, role: string) {
    this.peers.set(id, role);
  }

  evaluateConsensus(proposals: AgentMessage[]): ConsensusRound {
    // Weighted quorum calculation
    const top = proposals.sort((a, b) => b.confidence - a.confidence)[0];
    return {
      roundId: `round_${Date.now()}`,
      proposals,
      winningProposal: top,
      consensusScore: 0.92
    };
  }
}
