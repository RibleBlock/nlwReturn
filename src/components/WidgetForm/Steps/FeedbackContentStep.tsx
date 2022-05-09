import { FormEvent, useState } from 'react';
import { FeedbackType, feedbackTypes } from '..';
import { CloseButton } from '../../CloseButton';
import { ScreenshotButton } from '../ScreenshotButton';
import { ArrowBack, HeaderForm, MainForm } from '../WidgetForm.styles';

/*  */
interface FeedbackContentStepProps {
  feedbackType: FeedbackType; // "GUB" | "IDEA" | "OTHER"
  onFeedbackRestartRequested: () => void;
}

export function FeedbackContentStep({
  feedbackType, onFeedbackRestartRequested,
}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState('');

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  /* esse 'FormEvent' vem de dentro do react e ele tambem tem importacao */
  function handleSubmitFeedback(e: FormEvent) {
    e.preventDefault();
    console.log({ screenshot, comment });
  }

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

      <MainForm onSubmit={(e) => handleSubmitFeedback(e)}>
        <textarea
          placeholder="Conte com detalhes o que está acontecendo..."
          onChange={(e) => setComment(e.target.value)}
        />

        <footer>
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />

          <button
            type="submit"
            disabled={comment.length === 0}
          >
            Enviar feedback
          </button>
        </footer>
      </MainForm>
    </>
  );
}
