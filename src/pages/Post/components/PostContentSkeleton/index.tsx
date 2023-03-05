import { useTheme } from 'styled-components'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

export function PostContentSkeleton() {
  const theme = useTheme()

  return (
    <SkeletonTheme
      baseColor={theme['base-profile']}
      highlightColor={theme['base-post']}
    >
      <p>
        <Skeleton count={4} />
      </p>

      <h2>
        <Skeleton width="12rem" />
      </h2>
      <p>
        <Skeleton count={4} />
      </p>

      <h3>
        <Skeleton width="8rem" />
      </h3>
      <p>
        <Skeleton count={6} />
      </p>
    </SkeletonTheme>
  )
}
