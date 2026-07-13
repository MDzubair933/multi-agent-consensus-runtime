import { ByzantineFaultTolerance } from '../src/consensus/bft';

describe('BFT Quorum', () => {
  it('should correctly calculate 2f+1 threshold for 4 nodes', () => {
    expect(ByzantineFaultTolerance.getQuorum(4)).toBe(3);
  });
});
