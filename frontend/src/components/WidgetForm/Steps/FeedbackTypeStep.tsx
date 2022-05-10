import {
  HeaderForm, MainForm, FeedbackButton,
} from '../WidgetForm.styles';
import { FeedbackType, feedbackTypes } from '..';
import { CloseButton } from '../../CloseButton';

/* Este componente recebe uma funcao como propriedade */
interface FeedbackTypeProps {
  // eslint-disable-next-line no-unused-vars
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeProps) {
  return (
    <>
      <HeaderForm>
        <span>Deixe seu feedback</span>
        <CloseButton />
      </HeaderForm>

      <MainForm>
        { Object.entries(feedbackTypes).map(([key, value]) => (
          <FeedbackButton
            type="button"
            key={key}
            onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span>{value.title}</span>
          </FeedbackButton>
        )) }
      </MainForm>
    </>
  );
}
