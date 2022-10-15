import { Meta, StoryObj } from '@storybook/react';

import { Checkbox, CheckboxProps } from './Checkbox';
import { Text } from './Text';

export default {
	title: 'Components/Checkbox',
	component: Checkbox,
	argTypes: {},
	decorators: [
		(Story) => {
			return (
				<div className='flex items-center gap-3'>
					{Story()}
					<Text size='sm'>Lembrar de mim por 30 dias</Text>
				</div>
			);
		},
	],
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};
