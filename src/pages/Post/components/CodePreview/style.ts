import styled from 'styled-components'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

export const SyntaxHighlighterContainer = styled(SyntaxHighlighter)`
  margin: 1.5rem 0 !important;
  border-radius: 2px !important;
  padding: 1rem !important;
  background: ${(props) => props.theme['base-post']} !important;
`
