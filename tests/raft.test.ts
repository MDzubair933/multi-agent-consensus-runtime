import { RaftNode } from '../src/core/raft';

describe('Raft Consensus Core', () => {
  it('should elect candidate with highest term', () => {
    const node = new RaftNode('node-1');
    const reply = node.requestVote({ term: 1, candidateId: 'node-2', lastLogIndex: 0, lastLogTerm: 0 });
    expect(reply.voteGranted).toBe(true);
  });
});
