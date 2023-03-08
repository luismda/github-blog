import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Body, CommentContainer, Content } from './style'
import { ContentPreview } from '../ContentPreview'

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

        <Body>
          <ContentPreview contentInMarkdown={comment} alignContentText="left" />
        </Body>
      </Content>
    </CommentContainer>
  )
}
