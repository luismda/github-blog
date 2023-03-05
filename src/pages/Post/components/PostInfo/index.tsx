import { NavLink } from 'react-router-dom'
import {
  FaChevronLeft,
  FaExternalLinkAlt,
  FaGithub,
  FaCalendarDay,
  FaComment,
} from 'react-icons/fa'
import { formatDistanceToNow, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Info, InfoContainer, LinksContainer, PostInfoContainer } from './style'

interface PostInfoProps {
  title: string
  author: string
  publishedAt: string
  amountComments: number
  url: string
}

export function PostInfo({
  title,
  author,
  publishedAt,
  amountComments,
  url,
}: PostInfoProps) {
  const fullPublishedDateFormated = publishedAt
    ? format(new Date(publishedAt), "dd 'de' LLLL 'de' yyyy 'às' HH:mm", {
        locale: ptBR,
      })
    : publishedAt

  const publishedDateFormatedInText = publishedAt
    ? formatDistanceToNow(new Date(publishedAt), {
        addSuffix: true,
        locale: ptBR,
      })
    : publishedAt

  return (
    <PostInfoContainer>
      <LinksContainer>
        <NavLink to="/">
          <FaChevronLeft size={12} /> Voltar
        </NavLink>

        <a href={url} target="_blank" rel="noreferrer">
          Ver no GitHub <FaExternalLinkAlt size={12} />
        </a>
      </LinksContainer>

      <h1>{title}</h1>

      <InfoContainer>
        <Info>
          <FaGithub size={18} />
          <span>{author}</span>
        </Info>

        <Info>
          <FaCalendarDay size={18} />
          <time dateTime={publishedAt} title={fullPublishedDateFormated}>
            {publishedDateFormatedInText}
          </time>
        </Info>

        <Info>
          <FaComment size={18} />
          <span>
            {amountComments}{' '}
            {amountComments === 1 ? 'comentário' : 'comentários'}
          </span>
        </Info>
      </InfoContainer>
    </PostInfoContainer>
  )
}
