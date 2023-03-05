import { useEffect, useState, useCallback } from 'react'
import {
  FaExternalLinkAlt,
  FaGithub,
  FaMapMarkerAlt,
  FaUserFriends,
} from 'react-icons/fa'
import { api } from '../../lib/axios'
import { ProfileSkeleton } from '../ProfileSkeleton'

import { Info, ProfileContainer, Header, InfoItem, Description } from './style'

interface UserProfileData {
  avatar_url: string
  name: string
  bio: string
  html_url: string
  login: string
  location: string
  followers: number
}

interface ProfileProps {
  userName: string
}

export function Profile({ userName }: ProfileProps) {
  const [userProfileData, setUserProfileData] = useState({} as UserProfileData)
  const [isLoading, setIsLoading] = useState(true)

  const fetchUserProfileData = useCallback(async () => {
    try {
      const response = await api.get<UserProfileData>(`/users/${userName}`)

      setUserProfileData(response.data)
      setIsLoading(false)
    } catch {
      setIsLoading(true)
    }
  }, [userName])

  useEffect(() => {
    fetchUserProfileData()
  }, [fetchUserProfileData])

  if (isLoading) {
    return <ProfileSkeleton />
  }

  return (
    <ProfileContainer>
      <img src={userProfileData.avatar_url} alt="" />

      <div>
        <Header>
          <strong>{userProfileData.name}</strong>

          <a href={userProfileData.html_url} target="_blank" rel="noreferrer">
            GitHub
            <FaExternalLinkAlt size={12} />
          </a>
        </Header>

        <Description>{userProfileData.bio}</Description>

        <Info>
          <InfoItem>
            <FaGithub size={18} />
            <span>{userProfileData.login}</span>
          </InfoItem>

          <InfoItem>
            <FaMapMarkerAlt size={18} />
            <span>{userProfileData.location}</span>
          </InfoItem>

          <InfoItem>
            <FaUserFriends size={18} />
            <span>
              {userProfileData.followers}{' '}
              {userProfileData.followers === 1 ? 'seguidor' : 'seguidores'}
            </span>
          </InfoItem>
        </Info>
      </div>
    </ProfileContainer>
  )
}
