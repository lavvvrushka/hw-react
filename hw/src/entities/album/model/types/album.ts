export interface Album {
  id: number;
  userId: number;
  title: string;
}

export type CreateAlbumDto = Omit<Album, 'id'>;
export type UpdateAlbumDto = Partial<CreateAlbumDto>;
