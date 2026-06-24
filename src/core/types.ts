export type NodeRole = 'leader' | 'candidate' | 'follower';

export interface LogEntry<T = unknown> {
  term: number;
  index: number;
  command: T;
  timestamp: number;
}

export interface RequestVoteArgs {
  term: number;
  candidateId: string;
  lastLogIndex: number;
  lastLogTerm: number;
}

export interface RequestVoteReply {
  term: number;
  voteGranted: boolean;
}
