import React from "react";
import {Icons, IconProps} from './Blinkistlogo'
import {Story} from '@storybook/react'
import BlinkistLogo from "../../../images/blogo.png"

export default {
    title: 'Atoms/Icon',
    component: Icons
}

const Template: Story<IconProps> = (args) => <Icons {...args} />

export const Blinkist = Template.bind({})
Blinkist.args = {
    source: BlinkistLogo
}