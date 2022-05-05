import { FeedbackType, feedbackTypes } from '..';
import { CloseButton } from '../../CloseButton';
import { ArrowBack, HeaderForm, MainForm } from '../WidgetForm.styles';

/*  */
interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
}

export function FeedbackContentStep({
  feedbackType, onFeedbackRestartRequested,
}: FeedbackContentStepProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  return (
    <>
      <HeaderForm>
        <button
          type="button"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowBack weight="bold" />
        </button>

        <span>
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
          />
          { feedbackTypeInfo.title }
        </span>
        <CloseButton />
      </HeaderForm>

      <MainForm>
        <textarea
          placeholder="Conte com detalhes o que está acontecendo..."
        />
      </MainForm>
    </>
  );
}
