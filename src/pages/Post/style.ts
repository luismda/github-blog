import styled from 'styled-components'

export const PostContent = styled.main`
  padding: 2.5rem 2rem 0;

  p + h1,
  p + h2,
  p + h3,
  p + h4,
  p + h5 {
    margin-top: 1.25rem;
    line-height: 1.6;
  }

  p {
    line-height: 1.6;
    text-align: justify;

    & + p {
      margin-top: 1.25rem;
    }

    code {
      border-radius: 4px;
      padding: 0 0.5rem;
      background: ${(props) => props.theme['base-post']};
    }
  }

  a {
    color: ${(props) => props.theme.blue};
  }
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
