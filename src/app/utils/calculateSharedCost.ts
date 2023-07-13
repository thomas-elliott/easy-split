export interface Split {
  total: number;
  person1: number;
  person2: number;
  sharedCost: number;
}

export function calculateSharedCost(
  total: string,
  person1: string,
  person2: string,
): { updatedPerson1: number; updatedPerson2: number; sharedCost: number } {
  const t = parseFloat(total);
  const p1 = parseFloat(person1);
  const p2 = parseFloat(person2);

  const sharedCost = (t - p1 - p2) / 2;
  const updatedPerson1 = p1 + sharedCost;
  const updatedPerson2 = p2 + sharedCost;
  return { updatedPerson1, updatedPerson2, sharedCost };
}
