import styled from 'styled-components'

export const CommentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  img {
    width: calc(3rem + 4px);
    height: calc(3rem + 4px);
    border-radius: 8px;

    border: 2px solid ${(props) => props.theme['base-background']};
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Content = styled.div`
  flex: 1;
  background: ${(props) => props.theme['base-profile']};
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

    strong {
      color: ${(props) => props.theme['base-title']};
    }

    time {
      color: ${(props) => props.theme['base-span']};
    }
  }
`

export const Body = styled.div`
  margin-top: 0.5rem;
`
