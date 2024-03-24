import { Meta, StoryObj } from '@storybook/angular';

import { WelcomepageComponent } from './welcomepage.component';

type ComponentWithCustomControls = WelcomepageComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Welcomepage',
  component: WelcomepageComponent,
  // decorators: [moduleMetadata({imports: []})],
  parameters: {
    docs: { description: { component: `Welcomepage` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

export const Welcomepage: StoryObj<ComponentWithCustomControls> = {
  render: (args: ComponentWithCustomControls) => ({ props: args }),
  args: {},
}
