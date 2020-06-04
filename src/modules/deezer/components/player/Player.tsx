import React, { useState, useEffect, useCallback } from 'react'
import { throttle } from 'lodash-es'
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Box,
  IconButton,
  BoxProps,
  Collapse,
  ListItem,
  List,
  Button,
  ListIcon,
  PseudoBox,
  Flex,
} from '@chakra-ui/core'
import {
  FaBackward,
  FaForward,
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaMusic,
  FaHeart,
} from 'react-icons/fa'

import { api } from '../../api'

const ManageFavoriteButton: React.FC<{ trackId: number }> = ({ trackId }) => {
  const [isFavorite, setIsFavorite] = useState(false)

  const throttledUpdate = useCallback(
    throttle(async (trackId: number) => {
      const isFavorite = await api.user.isFavoriteTrack(trackId)

      setIsFavorite(isFavorite)
    }, 5000),
    []
  )

  useEffect(() => {
    throttledUpdate(trackId)
  })

  const boxProps = isFavorite
    ? {
        onClick: () => {
          api.user.removeFromFavorites(trackId)
          setIsFavorite(false)
        },
        title: 'Remove from favorites',
        color: 'red.500',
      }
    : {
        onClick: () => {
          api.user.addToFavorites(trackId)
          setIsFavorite(true)
        },
        title: 'Add to favorites',
        color: 'gray.500',
        _hover: { color: 'red.300' },
      }

  return (
    <Box px="2">
      <PseudoBox as={FaHeart} cursor="pointer" {...boxProps} />
    </Box>
  )
}

const Volume: React.FC<{ value: number }> = ({ value }) => (
  <Box px={2} d="flex" alignItems="center">
    <Box as={FaVolumeUp} paddingRight="1" />

    <Box d="flex" alignItems="center">
      <Slider width="24" value={value} onChange={DZ.player.setVolume}>
        <SliderTrack />
        <SliderFilledTrack />
        <SliderThumb />
      </Slider>
    </Box>
  </Box>
)

const Controls: React.FC<{ isPlaying: boolean }> = ({ isPlaying }) => (
  <Flex wrap="nowrap">
    <IconButton
      variant="outline"
      aria-label="previous track"
      icon={FaBackward}
      onClick={DZ.player.prev}
    />
    <IconButton
      variant="outline"
      aria-label="play/pause track"
      icon={isPlaying ? FaPause : FaPlay}
      onClick={isPlaying ? DZ.player.pause : DZ.player.play}
    />
    <IconButton
      variant="outline"
      aria-label="next track"
      icon={FaForward}
      onClick={DZ.player.next}
    />
  </Flex>
)

const Song: React.FC<{ details: DeezerSdk.Track } & BoxProps> = ({
  details,
  ...boxProps
}) => (
  <Box px="2" flexGrow={1} {...boxProps}>
    <Box fontWeight="bold" fontSize="md">
      {details?.title}
    </Box>
    <Box fontSize="xs">{details?.artist?.name}</Box>
  </Box>
)

const TrackProgress: React.FC<{ position: number; duration: number }> = ({
  position,
  duration,
}) => {
  const progressValue = duration ? (position / duration) * 100 : 0

  return (
    <Slider onChange={DZ.player.seek} value={progressValue}>
      <SliderTrack />
      <SliderFilledTrack />
      <SliderThumb />
    </Slider>
  )
}

const TracksQueue: React.FC<{
  tracks: Array<DeezerSdk.Track>
  active: string
}> = ({ tracks, active }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleIsOpen = () => setIsOpen(isOpen => !isOpen)

  return (
    <Box>
      <Box position="relative">
        <Collapse
          backgroundColor="white"
          position="absolute"
          bottom={0}
          right={0}
          isOpen={isOpen}
          width="3xs"
          maxHeight="lg"
          overflowY="auto"
          borderWidth="1px"
          shadow="sm"
          rounded="lg"
          p={3}
          mb={2}
        >
          {!!tracks.length ? (
            <List height="100%" width="100%">
              {tracks.map(track => (
                <ListItem key={track.id} d="flex" alignItems="center">
                  {active === track.id && <ListIcon icon={FaMusic} />}
                  <Song key={track.id} details={track} />
                </ListItem>
              ))}
            </List>
          ) : (
            'Queue is empty'
          )}
        </Collapse>
      </Box>
      <Button onClick={toggleIsOpen} size="sm">
        Queue
      </Button>
    </Box>
  )
}

export const Player: React.FC<BoxProps> = props => {
  const {
    track,
    volume,
    isPlaying,
    position,
    duration,
    queue,
  } = useDeezerSubscriptions()
  const [isAuthorized, setIsAuthorized] = useState(false)

  DZ.getLoginStatus(({ status }) => {
    setIsAuthorized(status === 'connected')
  })

  return (
    <Box {...props}>
      <TrackProgress position={position} duration={duration} />

      <Box d="flex" alignItems="center">
        <Controls isPlaying={isPlaying} />
        <Song details={track} />
        {track && isAuthorized && (
          <ManageFavoriteButton trackId={Number(track.id)} />
        )}
        <Volume value={volume} />
        <TracksQueue tracks={queue} active={track?.id} />
      </Box>
    </Box>
  )
}

const useDeezerSubscriptions = () => {
  const [queue, setQueue] = useState<Array<DeezerSdk.Track>>(
    DZ.player.getTrackList()
  )
  const [volume, setVolume] = useState<number>(DZ.player.getVolume())
  const [isPlaying, setIsPlaying] = useState<boolean>(DZ.player.isPlaying())
  const [position, setPosition] = useState<number>(0)
  const [duration, setDuration] = useState<number>(0)
  const [track, setTrack] = useState<DeezerSdk.Track>(
    DZ.player.getCurrentTrack()
  )

  useEffect(() => {
    DZ.Event.subscribe('volume_changed', setVolume)
    DZ.Event.subscribe('current_track', ({ track }) => setTrack(track))
    DZ.Event.subscribe('player_play', () => setIsPlaying(true))
    DZ.Event.subscribe('player_paused', () => setIsPlaying(false))
    DZ.Event.subscribe('player_position', ([position, duration]) => {
      setPosition(position)
      setDuration(duration)
    })
    DZ.Event.subscribe('tracklist_changed', () =>
      setQueue(DZ.player.getTrackList())
    )
  }, [])

  return { track, volume, isPlaying, position, duration, queue }
}
