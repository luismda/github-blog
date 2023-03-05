import styled from 'styled-components'

export const PostCardContainer = styled.article`
  a {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding: 2rem;

    text-decoration: none;
    background: ${(props) => props.theme['base-post']};
    border-radius: 10px;
    border: 2px solid transparent;

    transition: border-color 0.2s;
  }

  a:hover {
    border-color: ${(props) => props.theme['base-label']};
  }

  a:focus {
    outline: 0;
    border-color: ${(props) => props.theme['base-label']};
  }

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;

    strong {
      font-size: 1.25rem;
      line-height: 1.6;
      color: ${(props) => props.theme['base-title']};

      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }

    time {
      font-size: 0.875rem;
      line-height: 1.6;
      color: ${(props) => props.theme['base-span']};
      white-space: nowrap;
    }
  }

  p {
    --lines: 4;
    --line-height: 1.6;

    line-height: var(--line-height);
    color: ${(props) => props.theme['base-text']};

    max-height: calc(var(--lines) * var(--line-height));

    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: var(--lines);
    -webkit-box-orient: vertical;
  }
`
