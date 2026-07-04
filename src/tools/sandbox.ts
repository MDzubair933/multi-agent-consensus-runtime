export class ToolSandbox {
  async runSecure(code: string): Promise<unknown> {
    const forbidden = ['child_process', 'fs.unlink', 'rmdir'];
    for (const token of forbidden) {
      if (code.includes(token)) {
        throw new Error(`Security sandbox violation: forbidden token ${token}`);
      }
    }
    return 'Sandbox execution passed';
  }
}
