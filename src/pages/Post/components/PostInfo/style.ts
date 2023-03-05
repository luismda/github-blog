import styled from 'styled-components'

export const PostInfoContainer = styled.section`
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0 2px 4px ${(props) => props.theme['base-input']};
  border-radius: 10px;

  padding: 2rem;

  h1 {
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
    text-shadow: 0 0 1px #000000;

    margin-top: 1.25rem;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    font-size: 0.75rem;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    color: ${(props) => props.theme.blue};

    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      text-decoration: underline;
    }

    &:focus {
      outline: 0;
      text-decoration: underline;
    }
  }
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  margin-top: 0.5rem;

  @media (max-width: 486px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme['base-label']};
  }

  span,
  time {
    color: ${(props) => props.theme['base-span']};
  }
`
