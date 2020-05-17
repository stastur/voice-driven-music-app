import React from 'react'
import { Box, Image, BoxProps, IconButton } from '@chakra-ui/core'
import { FaPlay } from 'react-icons/fa'

type CardProps = BoxProps & {
  onPlay?: () => void
  title: string
  description?: string
  src?: string
}

export const Card: React.FC<CardProps> = ({
  title,
  onPlay,
  description,
  src,
  ...boxProps
}) => (
  <Box
    {...boxProps}
    w="3xs"
    borderWidth="1px"
    rounded="lg"
    overflow="hidden"
    boxShadow="sm"
  >
    <Box position="relative">
      {onPlay && (
        <IconButton
          onClick={onPlay}
          aria-label={`play ${title}`}
          icon={FaPlay}
          isRound={true}
          m="2"
          size="sm"
          bottom="0"
          position="absolute"
        />
      )}
      <Image src={src} alt={title} />
    </Box>
    <Box d="flex" flexDirection="column" p="1">
      <Box fontWeight="bold">{title}</Box>
      {description && <Box fontSize="sm">{description}</Box>}
    </Box>
  </Box>
)
