import { NodeRole, RequestVoteArgs, RequestVoteReply } from './types';
import { ReplicatedLog } from './log';

export class RaftNode {
  public id: string;
  public currentTerm = 0;
  public votedFor: string | null = null;
  public role: NodeRole = 'follower';
  public log = new ReplicatedLog();

  constructor(id: string) {
    this.id = id;
  }

  requestVote(args: RequestVoteArgs): RequestVoteReply {
    if (args.term > this.currentTerm) {
      this.currentTerm = args.term;
      this.role = 'follower';
      this.votedFor = null;
    }

    const canVote = this.votedFor === null || this.votedFor === args.candidateId;
    if (args.term === this.currentTerm && canVote) {
      this.votedFor = args.candidateId;
      return { term: this.currentTerm, voteGranted: true };
    }
    return { term: this.currentTerm, voteGranted: false };
  }
}
