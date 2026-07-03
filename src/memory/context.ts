export class SharedMemoryContext {
  private memory = new Map<string, string>();
  private maxTokens: number;

  constructor(maxTokens = 8192) {
    this.maxTokens = maxTokens;
  }

  set(key: string, value: string) {
    this.memory.set(key, value);
  }

  get(key: string): string | undefined {
    return this.memory.get(key);
  }
}
