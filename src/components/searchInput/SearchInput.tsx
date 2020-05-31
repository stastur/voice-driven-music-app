import React, { useState, useEffect } from 'react'
import {
  Box,
  Input,
  BoxProps,
  InputRightElement,
  IconButton,
  InputGroup,
} from '@chakra-ui/core'
import { FaSearch } from 'react-icons/fa'

import { useQueryParams } from '../../utils/useQueryParams'

type SearchInputProps = {
  onSearchClick: (query: string) => void
} & BoxProps

const ENTER_KEY_CODE = 13

export const SearchInput: React.FC<SearchInputProps> = ({
  onSearchClick,
  ...boxProps
}) => {
  const [value, setValue] = useState('')
  const queryParams = useQueryParams()
  const query = queryParams.get('q')

  useEffect(() => {
    query && setValue(query)
  }, [query])

  const handleSearch = () => onSearchClick(value)

  return (
    <Box {...boxProps}>
      <InputGroup size="md">
        <Input
          type="text"
          value={value}
          placeholder="Search..."
          onChange={({
            target: { value },
          }: React.ChangeEvent<HTMLInputElement>) => setValue(value)}
          onKeyDown={({ keyCode, target }: React.KeyboardEvent) => {
            if (keyCode === ENTER_KEY_CODE) {
              handleSearch()
            }
          }}
        />
        <InputRightElement>
          <IconButton
            icon={FaSearch}
            aria-label="search"
            onClick={handleSearch}
          />
        </InputRightElement>
      </InputGroup>
    </Box>
  )
}
