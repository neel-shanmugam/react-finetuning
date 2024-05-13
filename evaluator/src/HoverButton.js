import React from 'react';
import { Button } from 'semantic-ui-react';

const HoverButton = ({ children }) => (
  <Button
    style={{ marginTop: 20 }}
    hoverable
    basic
    content={children}
    color='red'
  />
);

export default HoverButton;

