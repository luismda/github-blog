import dark from 'react-syntax-highlighter/dist/esm/styles/prism/nord'
import { SyntaxHighlighterContainer } from './style'

interface CodePreviewProps {
  code: string
  language: string
}

export function CodePreview({ code, language }: CodePreviewProps) {
  return (
    <SyntaxHighlighterContainer language={language} style={dark} PreTag="div">
      {code}
    </SyntaxHighlighterContainer>
  )
}
