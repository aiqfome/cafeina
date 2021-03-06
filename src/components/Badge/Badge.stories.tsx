import React, { ReactElement } from 'react'

import { Badge } from './Badge'
import { Flex } from '../Flex'

export default {
  component: Badge,
  title: 'Badge'
}

export const Basic: React.FC = (): ReactElement => (
  <Flex flex={1} flexDirection='row'>
    <Badge count={10} />
    <Badge count={1000} backgroundColor='primary' />
    <Badge>olá</Badge>
    <Badge count={1000}>olá</Badge>
  </Flex>
)

export const BasicWithOverflow: React.FC = (): ReactElement => (
  <Badge count={1000} overflowCount={99} />
)

export const Label: React.FC = (): ReactElement => (
  <Flex flex={1} flexDirection='column'>
    <Badge variant='label'>burguerzin</Badge>
    <Badge variant='label' backgroundColor='primary'>
      pizza
    </Badge>
    <Badge variant='label' backgroundColor='info'>
      coquinha gelada
    </Badge>
  </Flex>
)
