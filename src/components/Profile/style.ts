import styled from 'styled-components'

export const ProfileContainer = styled.section`
  display: grid;
  grid-template-columns: 9.25rem 1fr;
  align-items: center;
  gap: 2rem;

  padding: 2rem;

  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  box-shadow: 0 2px 4px ${(props) => props.theme['base-input']};

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;

    margin: 0 auto;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  strong {
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
  }

  a {
    font-weight: bold;
    font-size: 0.75rem;
    text-transform: uppercase;
    text-decoration: none;
    color: ${(props) => props.theme.blue};

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  a:hover {
    text-decoration: underline;
  }

  a:focus {
    outline: 0;
    text-decoration: underline;
  }
`

export const Description = styled.p`
  margin-top: 0.5rem;
  line-height: 1.6;
`

export const Info = styled.div`
  margin-top: 1.5rem;

  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 486px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${(props) => props.theme['base-subtitle']};

  svg {
    color: ${(props) => props.theme['base-label']};
  }
`
