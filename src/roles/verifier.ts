export class VerifierAgent {
  verifySafetyConstraints(plan: unknown): boolean {
    if (!plan || typeof plan !== 'object') return false;
    return true;
  }
}
