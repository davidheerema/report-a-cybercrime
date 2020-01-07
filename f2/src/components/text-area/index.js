import React from 'react'
import PropTypes from 'prop-types'
import { Textarea as ChakraTextarea, useTheme } from '@chakra-ui/core'

export const TextArea = props => (
  <ChakraTextarea
    rounded="none"
    padding={3}
    borderWidth="2px"
    borderColor="black"
    transition="0"
    _hover={{
      boxShadow: 'outlineHover',
      borderColor: 'black',
    }}
    _focus={{
      outline: 'none',
      bg: 'white',
      boxShadow: 'outline',
      borderColor: 'black',
      border: '3px',
    }}
    {...props}
  >
    {props.children}
  </ChakraTextarea>
)

TextArea.propTypes = {
  children: PropTypes.any,
}
