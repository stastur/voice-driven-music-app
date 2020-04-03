import React, { useState, useLayoutEffect, useEffect } from 'react'
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Box,
  IconButton,
  BoxProps,
} from '@chakra-ui/core'
import {
  FaBackward,
  FaForward,
  FaPlay,
  FaPause,
  FaVolumeUp,
} from 'react-icons/fa'

const Volume: React.FC<{ volume: number }> = ({ volume }) => (
  <Box d="flex" alignItems="center">
    <Box as={FaVolumeUp} paddingRight="1" />

    <Box d="flex" alignItems="center">
      <Slider width="24" value={volume} onChange={DZ.player.setVolume}>
        <SliderTrack />
        <SliderFilledTrack />
        <SliderThumb />
      </Slider>
    </Box>
  </Box>
)

const Controls: React.FC<{ isPlaying: boolean }> = ({ isPlaying }) => (
  <Box>
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
  </Box>
)

const Song: React.FC<{ details: DeezerSdk.Track } & BoxProps> = ({
  details,
  ...boxProps
}) => (
  <Box {...boxProps}>
    <Box fontWeight="bold" fontSize="md">
      {details?.title}
    </Box>
    <Box fontSize="xs">{details?.artist?.name}</Box>
  </Box>
)

export const Player = () => {
  const {
    track,
    volume,
    isPlaying,
    position,
    duration,
  } = useDeezerSubscriptions()

  //TODO: remove in future
  useEffect(() => {
    DZ.player.playAlbum(14048532)
  }, [])

  return (
    <Box>
      <Box d="flex" flexGrow={1}>
        <Slider
          onChange={DZ.player.seek}
          value={
            isNaN((position / duration) * 100) ? 0 : (position / duration) * 100
          }
        >
          <SliderTrack />
          <SliderFilledTrack />
          <SliderThumb />
        </Slider>
      </Box>

      <Box d="flex" alignItems="center">
        <Controls isPlaying={isPlaying} />
        <Song flexGrow={1} px="3" details={track} />
        <Volume volume={volume} />
      </Box>
    </Box>
  )
}

const useDeezerSubscriptions = () => {
  const [volume, setVolume] = useState<number>(DZ.player.getVolume())
  const [isPlaying, setIsPlaying] = useState<boolean>(DZ.player.isPlaying())
  const [position, setPosition] = useState<number>(0)
  const [duration, setDuration] = useState<number>(0)
  const [track, setTrack] = useState<DeezerSdk.Track>(
    DZ.player.getCurrentTrack()
  )

  useLayoutEffect(() => {
    DZ.Event.subscribe('volume_changed', setVolume)
    DZ.Event.subscribe('current_track', ({ track }) => setTrack(track))
    DZ.Event.subscribe('player_play', () => setIsPlaying(true))
    DZ.Event.subscribe('player_paused', () => setIsPlaying(false))
    DZ.Event.subscribe('player_position', ([position, duration]: number[]) => {
      setPosition(position)
      setDuration(duration)
    })
  }, [])

  return { track, volume, isPlaying, position, duration }
}
