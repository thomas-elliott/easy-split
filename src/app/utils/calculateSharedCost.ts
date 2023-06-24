export interface Split {
  total: number;
  person1: number;
  person2: number;
  sharedCost: number;
}

export function calculateSharedCost(total: number, person1: number, person2: number): { updatedPerson1: number; updatedPerson2: number, sharedCost: number } {
  const sharedCost = (total - person1 - person2) / 2;
  const updatedPerson1 = person1 + sharedCost;
  const updatedPerson2 = person2 + sharedCost;
  return { updatedPerson1, updatedPerson2, sharedCost };
}
