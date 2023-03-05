import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useTheme } from 'styled-components'

import { PostCardSkeletonContainer } from './style'

export function PostCardSkeleton() {
  const theme = useTheme()

  return (
    <PostCardSkeletonContainer>
      <SkeletonTheme
        baseColor={theme['base-border']}
        highlightColor={theme['base-label']}
      >
        <header>
          <strong>
            <Skeleton width="14rem" />
          </strong>

          <time>
            <Skeleton width="3.5rem" />
          </time>
        </header>

        <p>
          <Skeleton count={4} />
        </p>
      </SkeletonTheme>
    </PostCardSkeletonContainer>
  )
}
