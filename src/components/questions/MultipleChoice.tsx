import { noel }          from '../../lib/noop';
import { IQuestionData } from '../../survey/IStepData';
import { Questions }     from '../lib/Questions';
import { StepLayout }    from '../wizard/StepLayout';

/**
 * Renders a question and a radio list of allowed answers
 * @param props
 * @returns
 */
export const MultipleChoice = (props: IQuestionData): JSX.Element => {
  if (props?.step?.answers === undefined) {
    return noel('Question and answer are not defined');
  }
  return Questions.getRadios(props);
};

/**
 * Renders a question and a radio list of allowed answers
 * @param props
 * @returns
 */
export const MultipleChoiceStep = (props: IQuestionData): JSX.Element => (
  <StepLayout {...props}>
    <MultipleChoice {...props} />
  </StepLayout>
);