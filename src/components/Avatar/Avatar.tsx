import React, { useCallback, useState, memo } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import { Text } from '../Text'
import { Box, Props as BoxProps } from '../Box'

export interface Props extends BoxProps {
  src?: string
  palette?: string
  alt: string
  variant?: 'box' | 'rounded'
}

export const AvatarStyled = styled.img`
  width: 36px;
  height: 36px;
`

const AvatarInitial: React.FC<Props> = memo(({ alt, palette }) => {
  return (
    <Text data-testid='name' fontWeight='bold' color={palette}>
      {alt.substring(0, 1).toUpperCase()}
    </Text>
  )
})

export const Avatar: React.FC<Props> = ({
  src,
  alt,
  palette = 'primary',
  variant = 'box',
  ...props
}) => {
  const [useFallback, setUseFallback] = useState(false)

  const handleSrcError = useCallback(() => setUseFallback(true), [])

  return (
    <Box
      width={variant === 'box' ? '36px' : '32px'}
      height={variant === 'box' ? '36px' : '32px'}
      display='flex'
      verticalAlign='center'
      alignItems='center'
      justifyContent='center'
      borderRadius={variant === 'box' ? '5px' : '32px'}
      backgroundColor={src && !useFallback ? 'transparent' : `${palette}Light`}
      data-testid='box'
      {...props}
    >
      {src && !useFallback ? (
        <AvatarStyled
          data-testid='src'
          src={src}
          alt={alt}
          onError={handleSrcError}
        />
      ) : (
        <AvatarInitial alt={alt} palette={palette} />
      )}
    </Box>
  )
}

Avatar.propTypes = {
  src: PropTypes.string,
  palette: PropTypes.string,
  alt: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['box', 'rounded'])
}

Avatar.defaultProps = {
  palette: 'primary'
}

AvatarInitial.displayName = 'AvatarInitial'

AvatarInitial.propTypes = {
  alt: PropTypes.string.isRequired,
  palette: PropTypes.string
}
