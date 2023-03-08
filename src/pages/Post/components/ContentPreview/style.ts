import styled from 'styled-components'

interface ContentPreviewContainerProps {
  textAlign: 'left' | 'justify'
}

export const ContentPreviewContainer = styled.div<ContentPreviewContainerProps>`
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
    text-align: ${(props) => props.textAlign};

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
