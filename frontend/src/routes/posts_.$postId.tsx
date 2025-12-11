import { createFileRoute } from '@tanstack/react-router'
import { Post } from '../pages/post'

export const Route = createFileRoute('/posts_/$postId')({
  component: Post,
})

