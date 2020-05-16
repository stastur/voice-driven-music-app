import React, { useState, useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  Box,
  Avatar,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
  Button,
} from '@chakra-ui/core'

import { User } from '../../api/types'
import { api } from '../../api'
import { pageUrls } from '../../../navigation'

export const Auth: React.FC<{}> = () => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    DZ.getLoginStatus(async loginStatus => {
      if (loginStatus.authResponse) {
        const { body } = await api.user.fetchMe()

        return body && setUser(body)
      }
    })
  }, [])

  const isAuthorized = !!user

  if (isAuthorized) {
    return (
      <Flex justify="center">
        <Menu>
          <MenuButton>
            <Avatar
              size="sm"
              src={user?.picture_small}
              name={`${user?.firstname} ${user?.lastname}`}
            />
          </MenuButton>
          <MenuList>
            <MenuGroup title="Profile">
              <MenuItem>
                <RouterLink to={pageUrls.myTracks}>My Tracks</RouterLink>
              </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup>
              <MenuItem
                onClick={() => {
                  DZ.logout()
                  setUser(null)
                }}
              >
                Sign out
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Flex>
    )
  }

  return (
    <Box>
      <Button
        onClick={() =>
          DZ.login(async loginResponse => {
            if (!loginResponse.authResponse) {
              return
            }

            const { body } = await api.user.fetchMe()
            return body && setUser(body)
          })
        }
      >
        Log in
      </Button>
    </Box>
  )
}
