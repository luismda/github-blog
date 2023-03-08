import { useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { useTheme } from 'styled-components'
import Skeleton from 'react-loading-skeleton'

import { PostInfo } from './components/PostInfo'
import { PostInfoSkeleton } from './components/PostInfoSkeleton'
import { PostContentSkeleton } from './components/PostContentSkeleton'
import { Comment } from './components/Comment'
import { api } from '../../lib/axios'

import { CommentCounter, CommentList, PostContent } from './style'
import { CommentSkeleton } from './components/CommentSkeleton'
import { ContentPreview } from './components/ContentPreview'

type RouteParams = {
  issueNumber: string
}

interface PostData {
  title: string
  created_at: string
  comments: number
  body: string
  html_url: string
  user: {
    login: string
  }
}

interface CommentData {
  id: number
  body: string
  created_at: string
  user: {
    login: string
    avatar_url: string
  }
}

export function Post() {
  const [post, setPost] = useState({} as PostData)
  const [comments, setComments] = useState([] as CommentData[])
  const [isLoading, setIsLoading] = useState(true)

  const { issueNumber } = useParams<RouteParams>()

  const theme = useTheme()

  const fetchPostAndComments = useCallback(async () => {
    try {
      const postRequest = api.get<PostData>(
        `/repos/luismda/github-blog/issues/${issueNumber}`,
      )
      const commentsRequest = api.get<CommentData[]>(
        `/repos/luismda/github-blog/issues/${issueNumber}/comments`,
      )

      const [postResponse, commentsResponse] = await Promise.all([
        postRequest,
        commentsRequest,
      ])

      setPost(postResponse.data)
      setComments(commentsResponse.data)
      setIsLoading(false)
    } catch {
      setIsLoading(true)
    }
  }, [issueNumber])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })

    fetchPostAndComments()
  }, [fetchPostAndComments])

  return (
    <div>
      {isLoading ? (
        <PostInfoSkeleton />
      ) : (
        <PostInfo
          title={post.title}
          author={post.user?.login}
          amountComments={post.comments}
          publishedAt={post.created_at}
          url={post.html_url}
        />
      )}

      <PostContent>
        {isLoading ? (
          <PostContentSkeleton />
        ) : (
          <ContentPreview contentInMarkdown={post.body} />
        )}
      </PostContent>

      <CommentCounter>
        <strong>Comentários</strong>

        {isLoading ? (
          <Skeleton
            width="5rem"
            height="0.875rem"
            baseColor={theme['base-post']}
            highlightColor={theme['base-border']}
          />
        ) : (
          <span>
            {comments.length}{' '}
            {comments.length === 1 ? 'comentário' : 'comentários'}
          </span>
        )}
      </CommentCounter>

      <CommentList>
        {isLoading &&
          Array(2)
            .fill('')
            .map((_, index) => {
              return <CommentSkeleton key={index} />
            })}

        {!isLoading &&
          comments.map((comment) => {
            return (
              <Comment
                key={comment.id}
                comment={comment.body}
                author={{
                  userName: comment.user.login,
                  avatarUrl: comment.user.avatar_url,
                }}
                commentedAt={comment.created_at}
              />
            )
          })}
      </CommentList>
    </div>
  )
}
