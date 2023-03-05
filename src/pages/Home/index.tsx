import { Profile } from '../../components/Profile'
import { PostsSection } from './components/PostsSection'

export function Home() {
  return (
    <div>
      <Profile userName="luismda" />

      <PostsSection />
    </div>
  )
}
