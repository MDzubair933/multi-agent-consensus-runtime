export interface PeerMessage {
  from: string;
  to: string;
  payload: unknown;
}

export class MemoryTransport {
  private handlers = new Map<string, (msg: PeerMessage) => void>();

  register(nodeId: string, handler: (msg: PeerMessage) => void) {
    this.handlers.set(nodeId, handler);
  }

  send(msg: PeerMessage) {
    const handler = this.handlers.get(msg.to);
    if (handler) {
      handler(msg);
    }
  }
}
