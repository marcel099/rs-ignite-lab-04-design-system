import { Meta, StoryObj } from '@storybook/react';
import { Envelope } from 'phosphor-react';

import {
  TextInput,
  TextInputContainerProps,
} from "./TextInput"

export default {
  title: 'Components/TextInput',
  component: TextInput.Container,
  args: {
    children: [
        <TextInput.Icon>
          <Envelope />
        </TextInput.Icon>,
        <TextInput.Input
          placeholder="Type your email address"
          type="email"
        />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputContainerProps>

export const Default: StoryObj<TextInputContainerProps> = {}

export const WithoutIcon: StoryObj<TextInputContainerProps> = {
  args: {
    children: [
      <TextInput.Input
        placeholder="Type your email address"
        type="email"
      />,
    ],
  },
}
