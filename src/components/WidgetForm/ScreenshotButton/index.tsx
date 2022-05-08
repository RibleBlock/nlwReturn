import html2canvas from 'html2canvas';
import { Camera, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Loading } from '../../Loading';

interface ScreenshotProps {
  screenshot: string | null;
  onScreenshotTook: (screenshot: string) => void;
}

export function ScreenshotButton({
  screenshot,
  onScreenshotTook,
}: ScreenshotProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);

    const canvas = await html2canvas(document.querySelector('html')!); /* <-- '!' isso nunca vai ser null "Confia no pai!" */
    const base64image = canvas.toDataURL('image/png');

    console.log(base64image); /** codigo da imagem pode ser buscado no browser  */
    onScreenshotTook(base64image);

    setIsTakingScreenshot(false);
  }

  if (screenshot) {
    return (
      <button
        style={{ // O css do WidgetForm esta aplicando aqui futuramente eu revejo isso
          padding: '.4rem',
          width: '4rem',
          height: '4rem',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom', // apenas pra teste
          backgroundSize: '170px', // apenas pra teste
        }}
        type="button"
      >
        <Trash weight="fill" style={{ width: '1.9rem', height: '1.9rem' }} />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
    >
      { isTakingScreenshot ? <Loading /> : <Camera /> }
    </button>
  );
}
