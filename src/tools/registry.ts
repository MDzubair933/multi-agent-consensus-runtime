export interface ToolDefinition {
  name: string;
  description: string;
  parameters: Record<string, unknown>;
}

export class ToolRegistry {
  private tools = new Map<string, ToolDefinition>();

  register(def: ToolDefinition) {
    this.tools.set(def.name, def);
  }

  get(name: string): ToolDefinition | undefined {
    return this.tools.get(name);
  }
}
