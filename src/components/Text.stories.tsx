import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
    title: 'Component/Text',
    component: Text,
    args: {
        children: 'Lorem ipsum.',
        size: 'md',
    },
    argTypes: {
        size: ['sm', 'md', 'lg'],
        control: {
            type: 'inline-radio'
        }
    }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    }
}

export const CustemComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>Teste</p>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        }
    }
}