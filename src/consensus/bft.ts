export class ByzantineFaultTolerance {
  static getQuorum(totalNodes: number): number {
    return Math.floor((2 * totalNodes) / 3) + 1;
  }

  static hasSupermajority(votes: number, totalNodes: number): boolean {
    return votes >= this.getQuorum(totalNodes);
  }
}
