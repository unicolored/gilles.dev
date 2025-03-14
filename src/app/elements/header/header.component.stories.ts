import { StoryObj, Meta } from '@storybook/angular';
import { HeaderComponent } from './header.component';

import { componentWrapperDecorator } from '@storybook/angular/dist/client/decorators';

export default {
  component: HeaderComponent,
  title: 'HeaderComponent',
  decorators: [
    // moduleMetadata({
    //   declarations: [HeaderComponent],
    //   imports: [CommonModule],
    // }),
    componentWrapperDecorator((story) => `<div style="margin: 3em">${story}</div>`),
  ],
} as Meta<HeaderComponent>;

type Story = StoryObj<HeaderComponent>;

export const Primary: Story = {
  args: {},
};
