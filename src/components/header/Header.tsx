import React from 'react'
import { Text, Box, Flex } from '@chakra-ui/core'

import { ReactComponent as LogoBlack } from './black-logo.svg'

export const Header: React.FC<{}> = () => {
  return (
    <Flex as="header" justify="flex-end" p="2">
      <Flex align="baseline">
        <Text as="span" fontWeight="bold" pr="2">
          Powered by
        </Text>
        <Box as={LogoBlack} height="4" width="auto" />
      </Flex>
    </Flex>
  )
}
