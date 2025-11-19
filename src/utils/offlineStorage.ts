import { openDB, DBSchema, IDBPDatabase } from 'idb';

interface QuizDB extends DBSchema {
  downloads: {
    key: string;
    value: {
      id: string;
      questionData: any;
      downloadedAt: string;
      pdfBlob?: Blob;
    };
  };
}

let db: IDBPDatabase<QuizDB> | null = null;

export const initDB = async () => {
  if (!db) {
    db = await openDB<QuizDB>('quiz-app-db', 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains('downloads')) {
          db.createObjectStore('downloads', { keyPath: 'id' });
        }
      },
    });
  }
  return db;
};

export const saveDownload = async (id: string, questionData: any, pdfBlob?: Blob) => {
  const database = await initDB();
  await database.put('downloads', {
    id,
    questionData,
    downloadedAt: new Date().toISOString(),
    pdfBlob,
  });
};

export const getDownload = async (id: string) => {
  const database = await initDB();
  return await database.get('downloads', id);
};

export const getAllDownloads = async () => {
  const database = await initDB();
  return await database.getAll('downloads');
};

export const deleteDownload = async (id: string) => {
  const database = await initDB();
  await database.delete('downloads', id);
};

export const clearAllDownloads = async () => {
  const database = await initDB();
  await database.clear('downloads');
};
