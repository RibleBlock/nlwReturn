import { CloseButton } from '../CloseButton';
import {
  FormBox, HeaderForm, FeedbackButton, MainForm, FooterForm,
} from './WidgetForm.styles';

import bugImageUrl from '../../assets/images/bug.svg';
import ideaImageUrl from '../../assets/images/idea.svg';
import thoughtImageUrl from '../../assets/images/thought.svg';

const feedbackTypes = {
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

export function WidgetForm() {
  return (
    <FormBox>
      <HeaderForm>
        <span>Deixe seu feedback</span>
        <CloseButton />
      </HeaderForm>

      {/* REVIZAR DE NOVO!! */}
      <MainForm>
        { Object.entries(feedbackTypes).map(([key, value]) => (
          <FeedbackButton
            type="button"
            key={key}
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span>{value.title}</span>
          </FeedbackButton>
        )) }
      </MainForm>

      <FooterForm>
        Feito com ❤ pelo
        {' '}
        <a href="http://github.com/ribleblock" target="_blank" rel="noopener noreferrer">Riquelme</a>
      </FooterForm>
    </FormBox>
  );
}
