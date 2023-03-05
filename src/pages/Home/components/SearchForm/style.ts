import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  margin-top: 0.75rem;

  input {
    width: 100%;
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    border-radius: 6px;
    padding: 0.75rem 1rem;
    border: 1px solid ${(props) => props.theme['base-border']};

    transition: border-color 0.2s;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      outline: 0;
      border-color: ${(props) => props.theme.blue};
    }
  }
`
