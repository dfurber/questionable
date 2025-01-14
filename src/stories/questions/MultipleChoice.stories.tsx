/* eslint-disable max-len */
/*
  eslint-disable import/no-extraneous-dependencies
*/
import { Meta, Story } from '@storybook/react';
import { QUESTION_TYPE } from '../../lib';
import { Answer } from '../../composable/Answer';
import { stepReducer } from '../../state/stepReducer';
import '../../stories/styles';
import { IQuestionData } from "../../survey/IQuestionData";
import { MultipleChoice } from '../../components/questions/MultipleChoice';

export default {
  argTypes: {
    step: { control: { type: 'object' } },
  },
  component: MultipleChoice,
  title: 'Questions/MultipleChoice',
} as Meta;

const Template: Story<IQuestionData> = (args) => <MultipleChoice {...args} />;

export const Radiolist = Template.bind({});
Radiolist.args = {
  dispatchForm: stepReducer,
  form: new Answer(),
  step: {
    answers: [
      { id: '0', title: 'Yes' },
      { id: '1', title: "Yes, but I'm separated from my spouse." },
      { id: '2', title: 'No, but I was in the past.' },
      { id: '3', title: "No, I've never been married." },
    ],
    id: 'I',
    info: "You may be eligible for certain benefits if you're legally married now or were in the past.",
    internalNotes: 'Adults age 18 and over',
    requirements: [],
    section: { id: 'a0_family'},
    subTitle:
      'Long-term partnerships often resemble marriage, but our benefits require legal recognition in your state.',
    title: 'Are you married?',
    type: QUESTION_TYPE.MULTIPLE_CHOICE,
  },
  stepId: 'B',
};
