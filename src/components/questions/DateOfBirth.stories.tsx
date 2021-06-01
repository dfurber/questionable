/* eslint-disable max-len */
/*
  eslint-disable import/no-extraneous-dependencies
*/
import '@trussworks/react-uswds/lib/index.css';
import '@trussworks/react-uswds/lib/uswds.css';
import '../../styles';

import { Story, Meta }           from '@storybook/react';
import { Answer, IQuestionData } from '../../survey';
import { DateOfBirth }           from './DateOfBirth';
import { QUESTION_TYPE }         from '../../lib';
import { stepReducer }           from '../../state/stepReducer';

export default {
  argTypes: {
    step: { control: { type: 'object' } },
  },
  component: DateOfBirth,
  title:     'Questions/DateOfBirth',
} as Meta;

const Template: Story<IQuestionData> = (args) => <DateOfBirth {...args} />;

export const DoB = Template.bind({});
DoB.args = {
  dispatchForm: stepReducer,
  form:         new Answer(),
  step:         {
    answers:       {},
    id:            'B',
    internalNotes: 'Adults age 18 and over',
    requirements:  [],
    sectionId:     'introduction',
    subTitle:      "Most Social Security benefits have age requirements, so we'll use your birthday to see how old you are.",
    title:         'Enter your birthday.',
    type:          QUESTION_TYPE.DOB,
  },
  stepId: 'B',
};