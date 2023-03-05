import { FaChevronLeft } from 'react-icons/fa'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { NavLink } from 'react-router-dom'
import { useTheme } from 'styled-components'

import {
  Info,
  InfoContainer,
  LinksContainer,
  PostInfoSkeletonContainer,
} from './style'

export function PostInfoSkeleton() {
  const theme = useTheme()

  return (
    <PostInfoSkeletonContainer>
      <SkeletonTheme
        baseColor={theme['base-post']}
        highlightColor={theme['base-border']}
      >
        <LinksContainer>
          <NavLink to="/">
            <FaChevronLeft size={12} /> Voltar
          </NavLink>

          <a>
            <Skeleton width="7.125rem" />
          </a>
        </LinksContainer>

        <h1>{<Skeleton />}</h1>

        <InfoContainer>
          <Info>
            <Skeleton width="8rem" />
          </Info>

          <Info>
            <Skeleton width="8rem" />
          </Info>

          <Info>
            <Skeleton width="8rem" />
          </Info>
        </InfoContainer>
      </SkeletonTheme>
    </PostInfoSkeletonContainer>
  )
}
