// Demo responses for fast prototype demonstration
export interface DemoResponse {
  trigger: string[];
  response: string;
  delay?: number;
}

export const demoResponses: DemoResponse[] = [];

export function getDemoResponse(query: string): DemoResponse | null {
  return null;
}
