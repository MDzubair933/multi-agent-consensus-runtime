export class AgentTelemetry {
  static logRound(roundId: string, durationMs: number) {
    console.log(`[Telemetry] Round ${roundId} finalized in ${durationMs}ms`);
  }
}
