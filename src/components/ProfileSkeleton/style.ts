import styled from 'styled-components'

export const ProfileSkeletonContainer = styled.section`
  display: grid;
  grid-template-columns: 9.25rem 1fr;
  align-items: center;
  gap: 2rem;

  padding: 2rem;
  margin-top: -5.5rem;

  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  box-shadow: 0 2px 4px ${(props) => props.theme['base-input']};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const AvatarContainer = styled.div`
  margin: 0 auto;

  span {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  strong {
    font-size: 1.5rem;
    line-height: 1.3;
  }

  a {
    font-size: 0.75rem;
    pointer-events: none;

    display: flex;
    align-items: center;
    gap: 0.5rem;
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
`
