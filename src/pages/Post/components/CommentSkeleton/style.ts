import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'

export const CommentSkeletonContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`

export const AvatarSkeleton = styled(Skeleton)`
  width: calc(3rem + 4px);
  height: calc(3rem + 4px);
  border-radius: 8px;
`

export const Content = styled.div`
  flex: 1;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 1rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong,
    time {
      font-size: 0.875rem;
      line-height: 1.6;
    }
  }

  div {
    margin-top: 0.5rem;
  }
`
