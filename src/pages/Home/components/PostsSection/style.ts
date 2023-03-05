import styled from 'styled-components'

export const PostCounter = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 4.5rem;

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

export const PostList = styled.section`
  margin-top: 3rem;
  padding-bottom: 7.5rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
