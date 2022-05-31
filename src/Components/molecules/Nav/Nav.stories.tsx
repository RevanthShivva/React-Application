import { Story } from "@storybook/react";
import {Nav , NavProps} from "./Nav";
import { ReactComponent as User } from "../../../images/user.svg";
import { ReactComponent as Time } from "../../../images/time.svg";
import { ReactComponent as Entreprenuer } from "../../../images/entreprenuer.svg";


export default {
    title: "Molecules/Nav",
    component: Nav,
  }

  const Template: Story<NavProps> = args => <Nav {...args} />

  export const TimeIcon = Template.bind({});
TimeIcon.args = {
  source: <Time />,
  variant: "caption",
  title: "13-min read",
};

export const UserIcon = Template.bind({});
UserIcon.args = {
  source: <User />,
  variant: "caption",
  title: "1.9k reads",
};

export const EntrepreneurIcon = Template.bind({});
EntrepreneurIcon.args = {
  source: <Entreprenuer />,
  variant: "body1",
  title: "Entreprenuership",
};
