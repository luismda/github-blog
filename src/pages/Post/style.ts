import styled from 'styled-components'

export const PostContent = styled.main`
  padding: 2.5rem 2rem 0;
`

export const CommentCounter = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 4.5rem 2rem 0;
  padding-bottom: 0.25rem;
  border-bottom: 1px solid ${(props) => props.theme['base-post']};

  strong {
    font-size: 1.125rem;
    line-height: 1.6;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-size: 0.875rem;
    line-height: 1.6;
    color: ${(props) => props.theme['base-span']};
  }
`

export const CommentList = styled.section`
  margin-top: 2rem;
  padding: 0 2rem 8rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`
