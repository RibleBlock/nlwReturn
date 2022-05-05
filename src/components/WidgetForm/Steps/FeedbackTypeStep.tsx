import { MainForm, FeedbackButton } from '../WidgetForm.styles';
import { FeedbackType, feedbackTypes } from '..';

interface FeedbackTypeProps {
  // eslint-disable-next-line no-unused-vars
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeChanged: setFeedbackType }: FeedbackTypeProps) {
  return (
    <MainForm>
      { Object.entries(feedbackTypes).map(([key, value]) => (
        <FeedbackButton
          type="button"
          key={key}
          onClick={() => setFeedbackType(key as FeedbackType)}
        >
          <img src={value.image.source} alt={value.image.alt} />
          <span>{value.title}</span>
        </FeedbackButton>
      )) }
    </MainForm>
  );
}
