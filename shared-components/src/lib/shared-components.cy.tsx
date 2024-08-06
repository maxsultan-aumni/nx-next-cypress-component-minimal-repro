import * as React from 'react';
import SharedComponents from './shared-components';

describe(SharedComponents.name, () => {
  it('renders', () => {
    cy.mount(<SharedComponents />);
  });
});
