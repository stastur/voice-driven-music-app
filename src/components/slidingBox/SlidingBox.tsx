import React, {
  useRef,
  useState,
  useLayoutEffect,
  useCallback,
  useEffect,
} from 'react'
import { Box, BoxProps, IconButton, Heading, Flex } from '@chakra-ui/core'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'

type SlidingBoxProps = {
  label: string
} & BoxProps

export const SlidingBox: React.FC<SlidingBoxProps> = ({
  children,
  label,
  ...boxProps
}) => {
  const itemsRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const [offset, setOffset] = useState(0)
  const [progress, setProgress] = useState(0)
  const [windowSize, setWindowSize] = useState(0)
  const [transitionsNumber, setTransitionsNumber] = useState(0)

  const childrenCount = React.Children.count(children)

  useEffect(() => {
    const handleResize = () => setWindowSize(window.innerWidth)

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useLayoutEffect(() => {
    const visibleWidth = containerRef.current?.clientWidth ?? 0
    const totalWidth = itemsRef.current?.clientWidth ?? 0

    const offset = childrenCount && totalWidth / childrenCount
    const transtionsNumber =
      offset && Math.ceil(childrenCount - visibleWidth / offset) + 1

    setOffset(offset)
    setTransitionsNumber(transtionsNumber)
  }, [childrenCount, windowSize])

  const moveBackward = useCallback(
    () => setProgress(v => (v - 1 + transitionsNumber) % transitionsNumber),
    [transitionsNumber]
  )

  const moveForward = useCallback(
    () => setProgress(v => (v + 1) % transitionsNumber),
    [transitionsNumber]
  )

  return (
    <Box {...boxProps} width="100%" position="relative">
      <Heading pl={3}>{label}</Heading>
      <IconButton
        size="lg"
        isRound
        position="absolute"
        zIndex={1}
        left="0"
        top="50%"
        bottom="50%"
        aria-label={`${label} section forward`}
        icon={FaChevronCircleLeft}
        onClick={moveBackward}
      />
      <Box ref={containerRef} overflowX="hidden">
        <Flex
          ref={itemsRef}
          width="max-content"
          transform={`translateX(-${offset * progress}px)`}
          transition="transform .3s ease"
        >
          {children}
        </Flex>
      </Box>
      <IconButton
        size="lg"
        isRound
        position="absolute"
        zIndex={1}
        right="0"
        top="50%"
        bottom="50%"
        aria-label={`${label} section forward`}
        icon={FaChevronCircleRight}
        onClick={moveForward}
      />
    </Box>
  )
}
