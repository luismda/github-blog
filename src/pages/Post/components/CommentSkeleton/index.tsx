import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useTheme } from 'styled-components'

import { AvatarSkeleton, CommentSkeletonContainer, Content } from './style'

export function CommentSkeleton() {
  const theme = useTheme()

  return (
    <CommentSkeletonContainer>
      <SkeletonTheme
        baseColor={theme['base-border']}
        highlightColor={theme['base-label']}
      >
        <AvatarSkeleton />

        <Content>
          <header>
            <strong>
              <Skeleton width="4rem" />
            </strong>

            <time>
              <Skeleton width="3rem" />
            </time>
          </header>

          <div>
            <p>
              <Skeleton count={2} />
            </p>
          </div>
        </Content>
      </SkeletonTheme>
    </CommentSkeletonContainer>
  )
}
