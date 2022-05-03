// import { useState } from 'react';
import { Popover } from '@headlessui/react';
import { Container, Button, Icon } from './Widget.styles';

export function Widget() {
  // const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  // function toggleWidgerVisibility() {
  //   setIsWidgetOpen(!isWidgetOpen);
  // }

  return (
    <Container>
      <Popover.Panel>OLA MUNDAO</Popover.Panel>

      <Button>
        <Icon weight="regular" />
        <span>
          Feedback
        </span>
      </Button>
    </Container>
  );
}
