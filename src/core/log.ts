import { LogEntry } from './types';

export class ReplicatedLog {
  private entries: LogEntry[] = [];

  append(entry: LogEntry): number {
    this.entries.push(entry);
    return this.entries.length - 1;
  }

  getEntry(index: number): LogEntry | undefined {
    return this.entries[index];
  }

  getLastLogIndex(): number {
    return this.entries.length > 0 ? this.entries.length - 1 : 0;
  }

  getLastLogTerm(): number {
    const last = this.entries[this.entries.length - 1];
    return last ? last.term : 0;
  }
}
