import { Popover } from '@headlessui/react';
import { Container, Button, Icon } from './Widget.styles';

import { WidgetForm } from '../WidgetForm';

export function Widget() {
  return (
    <Container>
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      <Button>
        <Icon weight="regular" />
        <span>
          <span></span>
          Feedback
        </span>
      </Button>
    </Container>
  );
}
