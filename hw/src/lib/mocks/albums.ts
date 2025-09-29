export type Album = {
  id: number;
  title: string;
  userId: number;
};

export const albums: Album[] = [
  { id: 1, title: 'Милые котята', userId: 1 },
  { id: 2, title: 'Красивые женщины', userId: 1 },
  { id: 3, title: 'Семейные фото', userId: 2 },
  { id: 4, title: 'Природа и животные', userId: 3 },
  { id: 5, title: 'Путешествия', userId: 2 }
];
