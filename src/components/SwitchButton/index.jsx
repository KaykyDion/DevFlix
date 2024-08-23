import React, { useState } from 'react';
import { SwitchContainer, SwitchInput, SwitchKnob } from './styles';

const SwitchButton = ({ onClick }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    if (onClick) onClick();
  };

  return (
    <SwitchContainer onClick={handleToggle}>
      <SwitchInput type="checkbox" checked={isChecked} onChange={handleToggle} />
      <SwitchKnob isChecked={isChecked} />
    </SwitchContainer>
  );
};

export default SwitchButton;