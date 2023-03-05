import styled from 'styled-components'

export const PostCardSkeletonContainer = styled.article`
  min-height: 13.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2rem;

  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  border: 2px solid transparent;

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;

    strong {
      font-size: 1.25rem;
      line-height: 1.6;
    }

    time {
      font-size: 0.875rem;
      line-height: 1.6;
    }
  }
`
