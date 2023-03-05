import { useTheme } from 'styled-components'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

import {
  ProfileSkeletonContainer,
  AvatarContainer,
  Header,
  Description,
  Info,
  InfoItem,
} from './style'

export function ProfileSkeleton() {
  const theme = useTheme()

  return (
    <ProfileSkeletonContainer>
      <SkeletonTheme
        baseColor={theme['base-post']}
        highlightColor={theme['base-border']}
      >
        <AvatarContainer>
          <Skeleton />
        </AvatarContainer>

        <div>
          <Header>
            <strong>{<Skeleton width="10rem" />}</strong>

            <a>
              <Skeleton width="3.75rem" />
            </a>
          </Header>

          <Description>{<Skeleton count={3} />}</Description>

          <Info>
            <InfoItem>
              <Skeleton width="5.125rem" />
            </InfoItem>

            <InfoItem>
              <Skeleton width="5.125rem" />
            </InfoItem>

            <InfoItem>
              <Skeleton width="5.125rem" />
            </InfoItem>
          </Info>
        </div>
      </SkeletonTheme>
    </ProfileSkeletonContainer>
  )
}
