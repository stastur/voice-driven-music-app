import React from 'react'
import { Text, Box, Flex } from '@chakra-ui/core'

import { ReactComponent as LogoBlack } from './black-logo.svg'

export const Header: React.FC<{}> = ({ children }) => {
  return (
    <Flex as="header" align="center" p="2">
      <Flex flexGrow={1} align="center" pr="10">
        {children}
      </Flex>
      <Flex align="baseline" flexDirection={['column', 'unset']}>
        <Text
          as="span"
          whiteSpace="nowrap"
          fontWeight="bold"
          pr={['0', '2']}
          fontSize={['sm', 'md']}
        >
          Powered by
        </Text>
        <Box as={LogoBlack} height="4" width="auto" />
      </Flex>
    </Flex>
  )
}
