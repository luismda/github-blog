import { NavLink } from 'react-router-dom'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import ReactMarkdown from 'react-markdown'
import { ReactMarkdownProps } from 'react-markdown/lib/complex-types'

import { PostCardContainer } from './style'

function SimpleText({ children }: ReactMarkdownProps) {
  return <>{children}</>
}

const customComponentsReactMarkdown = {
  p: SimpleText,
  a: SimpleText,
  strong: SimpleText,
  h1: SimpleText,
  h2: SimpleText,
  h3: SimpleText,
  h4: SimpleText,
}

interface PostCardProps {
  issueNumber: number
  title: string
  content: string
  publishedAt: string
}

export function PostCard({
  issueNumber,
  title,
  content,
  publishedAt,
}: PostCardProps) {
  const summary = content.slice(0, 360)

  const fullPublishedDateFormated = format(
    new Date(publishedAt),
    "dd 'de' LLLL 'de' yyyy 'às' HH:mm",
    {
      locale: ptBR,
    },
  )

  const publishedDateFormatedInText = formatDistanceToNow(
    new Date(publishedAt),
    {
      addSuffix: true,
      locale: ptBR,
    },
  )

  return (
    <PostCardContainer>
      <NavLink to={`/post/${issueNumber}`}>
        <header>
          <strong>{title}</strong>

          <time dateTime={publishedAt} title={fullPublishedDateFormated}>
            {publishedDateFormatedInText}
          </time>
        </header>

        <p>
          <ReactMarkdown skipHtml components={customComponentsReactMarkdown}>
            {summary}
          </ReactMarkdown>
        </p>
      </NavLink>
    </PostCardContainer>
  )
}
