export type Comment = {
  id: number;
  postId: number;
  text: string;
};

export const comments: Comment[] = [
  { id: 1, postId: 1, text: 'Комментарий к первому посту' },
  { id: 2, postId: 1, text: 'Еще один комментарий к первому посту' },
  { id: 3, postId: 2, text: 'Комментарий ко второму посту' },
  { id: 4, postId: 3, text: 'Комментарий к третьему посту' },
];
