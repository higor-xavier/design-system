import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from "@higor-ignite-ui/react"

export default {
    title: 'Data display/Avatar',
    component: Avatar,
    args: {
        src: 'http://github.com/higor-xavier.png',
        alt: 'Higor Xavier',
    },
    argTypes: {
        src: {
            control: {
                type: 'text',
            },
        },
    },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined,
    },
}