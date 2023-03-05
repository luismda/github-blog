import { HeaderContainer } from './style'

import gitHubBlogLogo from '../../assets/github-blog-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={gitHubBlogLogo} alt="" />
    </HeaderContainer>
  )
}
