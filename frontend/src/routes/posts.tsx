import { createFileRoute } from '@tanstack/react-router'
import { PostsList } from '../pages/posts-list'

export const Route = createFileRoute('/posts')({
  component: PostsList,
})

