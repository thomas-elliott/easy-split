import { openDB } from 'idb';
import { Split } from './calculateSharedCost';

const DB_NAME = 'split-payment-app';
const STORE_NAME = 'splits';

async function getDB() {
  return openDB(DB_NAME, 1, {
    upgrade(db: any) {
      db.createObjectStore(STORE_NAME, { autoIncrement: true });
    },
  });
}

export async function saveSplit(split: Split): Promise<void> {
  const db = await getDB();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);
  await store.add(split);
  await tx.done;
}

export async function getSplits(): Promise<Split[]> {
  const db = await getDB();
  const tx = db.transaction(STORE_NAME, 'readonly');
  const store = tx.objectStore(STORE_NAME);
  const splits = await store.getAll();
  await tx.done;
  return splits;
}
