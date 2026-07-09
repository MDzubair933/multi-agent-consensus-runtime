import { AgentRuntime } from '../core/agent';

async function bootstrap() {
  const runtime = new AgentRuntime();
  console.log('Multi-Agent Consensus Runtime Initialized.');
}

if (require.main === module) {
  bootstrap();
}
