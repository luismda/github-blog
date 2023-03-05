import ReactMarkdown from 'react-markdown'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { CommentContainer, Content } from './style'
import { CodePreview } from '../CodePreview'

interface CommentProps {
  comment: string
  author: {
    userName: string
    avatarUrl: string
  }
  commentedAt: string
}

export function Comment({ comment, author, commentedAt }: CommentProps) {
  const fullCommentedDateFormated = format(
    new Date(commentedAt),
    "dd 'de' LLLL 'de' yyyy 'às' HH:mm",
    {
      locale: ptBR,
    },
  )

  const commentedDateFormtedInText = formatDistanceToNow(
    new Date(commentedAt),
    {
      addSuffix: true,
      locale: ptBR,
    },
  )

  return (
    <CommentContainer>
      <img src={author.avatarUrl} alt="" />

      <Content>
        <header>
          <strong>@{author.userName}</strong>

          <time dateTime={commentedAt} title={fullCommentedDateFormated}>
            {commentedDateFormtedInText}
          </time>
        </header>

        <div>
          <ReactMarkdown
            skipHtml
            components={{
              a({ children, node, ...rest }) {
                return (
                  <a {...rest} target="_blank">
                    {children}
                  </a>
                )
              },
              code({ children, inline, className }) {
                const code = String(children)
                const language = className?.match(/language-(\w+)/)?.[1] ?? ''

                return !inline ? (
                  <CodePreview code={code} language={language} />
                ) : (
                  <code>{children}</code>
                )
              },
            }}
          >
            {comment}
          </ReactMarkdown>
        </div>
      </Content>
    </CommentContainer>
  )
}
