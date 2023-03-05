import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 4rem 0 8.375rem;

  display: flex;
  justify-content: center;

  background: linear-gradient(
      to bottom,
      rgba(21, 98, 175, 0.14),
      rgba(21, 98, 175, 0.34)
    ),
    url('/header_effect.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  img {
    width: 9.25rem;
  }
`
