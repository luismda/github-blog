import ReactMarkdown from 'react-markdown'

import { CodePreview } from '../CodePreview'
import { ContentPreviewContainer } from './style'

interface ContentPreviewProps {
  contentInMarkdown: string
  alignContentText?: 'left' | 'justify'
}

export function ContentPreview({
  contentInMarkdown,
  alignContentText = 'justify',
}: ContentPreviewProps) {
  return (
    <ContentPreviewContainer textAlign={alignContentText}>
      <ReactMarkdown
        skipHtml
        components={{
          a({ children, node, ...rest }) {
            return (
              <a {...rest} target="_blank">
                {children}
              </a>
            )
          },
          code({ children, inline, className }) {
            const code = String(children)
            const language = className?.match(/language-(\w+)/)?.[1] ?? ''

            return !inline ? (
              <CodePreview code={code} language={language} />
            ) : (
              <code>{children}</code>
            )
          },
        }}
      >
        {contentInMarkdown}
      </ReactMarkdown>
    </ContentPreviewContainer>
  )
}
