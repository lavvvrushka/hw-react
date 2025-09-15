import type { Post } from '../../../lib/mocks/posts';

export function filterByLength(posts: Post[], minLength: number) {
  return posts.filter(post => post.title.length >= minLength);
}
