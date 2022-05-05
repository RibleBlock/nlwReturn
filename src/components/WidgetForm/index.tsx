import { useState } from 'react';
import { CloseButton } from '../CloseButton';
import {
  FormBox, HeaderForm, FooterForm,
} from './WidgetForm.styles';

import bugImageUrl from '../../assets/images/bug.svg';
import ideaImageUrl from '../../assets/images/idea.svg';
import thoughtImageUrl from '../../assets/images/thought.svg';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';

export const feedbackTypes = {
  /*
   vamos criar uma objeto pra cada button dentro do <MainForm> e vamos exibir com
   Object.entries(feedbackTypes) que retorna um array, e com o .map() percorrer este array
   e entao exibi-lo
  */
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'imagem de um inseto',
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'imagem de uma lâmpada',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'imagem de um Balão de pensamento',
    },
  },
};
/* Object.entries(feedbackTypes) => [ ['BUG', {...}], ['IDEA', {...}], ['OTHER', {...}] ] */
/*
  A melhor forma de salvar informacoes a partir da
  interacao do usuario é com a nossa interface é utilizando estado
 */
/* Keyof - Retorna a tipagem do objeto feedbackTypes */
export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  return (
    <FormBox>
      <HeaderForm>
        <span>Deixe seu feedback</span>
        <CloseButton />
      </HeaderForm>

      { !feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <p>Selecionado.</p>
      ) }

      <FooterForm>
        Feito com ❤ pelo
        {' '}
        <a href="http://github.com/ribleblock" target="_blank" rel="noopener noreferrer">Riquelme</a>
      </FooterForm>
    </FormBox>
  );
}
