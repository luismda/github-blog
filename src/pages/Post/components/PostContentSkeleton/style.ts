import styled from 'styled-components'

export const PostContentSkeletonContainer = styled.div`
  p + h2,
  p + h3 {
    margin-top: 1.25rem;
    line-height: 1.6;
  }

  p {
    line-height: 1.6;
    text-align: justify;

    & + p {
      margin-top: 1.25rem;
    }
  }
`
