import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'

import { PostCard } from '../PostCard'
import { PostCardSkeleton } from '../PostCardSkeleton'
import { SearchForm } from '../SearchForm'
import { api } from '../../../../lib/axios'

import { PostCounter, PostList } from './style'

interface Post {
  title: string
  created_at: string
  body: string
  number: number
}

interface FetchPostsResponse {
  incomplete_results: boolean
  items: Post[]
  total_count: number
}

export function PostsSection() {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const theme = useTheme()

  async function fetchPosts(query?: string) {
    try {
      const response = await api.get<FetchPostsResponse>('/search/issues', {
        params: {
          q: `repo:luismda/github-blog ${query ?? ''}`,
        },
      })

      setPosts(response.data.items)
      setIsLoading(false)
    } catch {
      setIsLoading(true)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <main>
      <PostCounter>
        <strong>Publicações</strong>

        {isLoading ? (
          <Skeleton
            width="5.25rem"
            height="1.375rem"
            baseColor={theme['base-post']}
            highlightColor={theme['base-border']}
          />
        ) : (
          <span>
            {posts.length} {posts.length === 1 ? 'publicação' : 'publicações'}
          </span>
        )}
      </PostCounter>

      <SearchForm onSubmit={fetchPosts} />

      <PostList>
        {isLoading &&
          Array(4)
            .fill('')
            .map((_, index) => {
              return <PostCardSkeleton key={index} />
            })}

        {!isLoading &&
          posts.map((post) => {
            return (
              <PostCard
                key={post.number}
                issueNumber={post.number}
                title={post.title}
                content={post.body}
                publishedAt={post.created_at}
              />
            )
          })}
      </PostList>
    </main>
  )
}
