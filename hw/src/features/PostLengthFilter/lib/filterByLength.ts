export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export function filterByLength(posts: Post[], minLength: number): Post[] {
  if (!posts) return [];
  return posts.filter(post => post.title.length >= minLength);
}
