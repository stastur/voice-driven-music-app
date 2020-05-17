import React from 'react'
import { Box, Flex, IconButton } from '@chakra-ui/core'
import { FaHeart, FaPlay } from 'react-icons/fa'
import { noop } from 'lodash-es'

import { normalizeDuration } from '../../utils/helpers'

type TrackProps = {
  title: string
  duration: number
  artist: string
  liked?: boolean
  onPlay?: () => void
}

export const Track: React.FC<TrackProps> = ({
  title,
  duration,
  artist,
  liked,
  onPlay,
}) => {
  return (
    <Flex
      align="center"
      justify="space-between"
      borderWidth="1px"
      flexGrow={1}
      p={2}
    >
      <Flex align="center" justify="center">
        <IconButton
          variant="outline"
          icon={FaPlay}
          aria-label={`play ${title} by ${artist}`}
          onClick={onPlay}
          mr={3}
        />
        <Box>
          <Box fontWeight="bold" fontSize="md">
            {title}
          </Box>
          <Box fontSize="sm">{artist}</Box>
        </Box>
      </Flex>
      <Flex align="center">
        {liked && <Box mr="3" color="red.500" as={FaHeart} />}
        <Box>{normalizeDuration(duration)}</Box>
      </Flex>
    </Flex>
  )
}

Track.defaultProps = {
  liked: false,
  onPlay: noop,
}
