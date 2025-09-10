export type Photo = {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  albumId: number;
};

export const photos: Photo[] = [
  { 
    id: 1, 
    title: 'Котенок 1', 
    url: '/images/1.jpg',
    thumbnailUrl: '/images/1.jpg',
    albumId: 1 
  },
  { 
    id: 2, 
    title: 'Котенок 2', 
    url: '/images/2.jpg',
    thumbnailUrl: '/images/2.jpg',
    albumId: 1 
  },
  { 
    id: 3, 
    title: 'Женщина 3', 
    url: '/images/3.jpg',
    thumbnailUrl: '/images/3.jpg',
    albumId: 2 
  },
  { 
    id: 4, 
    title: 'Женщина 4', 
    url: '/images/4.jpg',
    thumbnailUrl: '/images/4.jpg',
    albumId: 2 
  },
  { 
    id: 5, 
    title: 'Женщина 5', 
    url: '/images/5.jpg',
    thumbnailUrl: '/images/5.jpg',
    albumId: 2 
  }
];
