export class ConflictResolver {
  resolveDispute(proposals: { agent: string; score: number }[]): string {
    const sorted = proposals.sort((a, b) => b.score - a.score);
    return sorted[0].agent;
  }
}
