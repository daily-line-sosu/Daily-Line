import { ReactNode, useEffect, useState } from 'react';
import * as Styled from './Select.styles';

interface Option {
  seq: number;
  name: string;
}

export interface SelectProps {
  name: string;
  value: number;
  options: Option[];
  onChange: (selectedSeq: number) => void;
}

const Select = ({ name, value, options, onChange = () => null }: SelectProps) => {
  const [open, setOpen] = useState(false);

  const selectedOption = options.find((option) => option.seq === value);
  console.log(selectedOption);

  const handleToggle = () => {
    setOpen(!open);
  };

  const selectOption = (selectedSeq: number) => {
    setOpen(false);
    onChange(selectedSeq);
  };

  useEffect(() => {
    if (options.length === 0) setOpen(false);
  }, [options.length]);

  return (
    <Styled.Select onClick={handleToggle}>
      <Styled.Label id={name}>{selectedOption ? selectedOption.name : '선택안함'}</Styled.Label>
      {open && (
        <Styled.OptionList>
          {options.map((option) => (
            <Styled.OptionItem key={option.seq} onClick={() => selectOption(option.seq)}>
              {option.name}
            </Styled.OptionItem>
          ))}
        </Styled.OptionList>
      )}
    </Styled.Select>
  );
};

export default Select;
