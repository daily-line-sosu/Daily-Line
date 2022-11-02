import Box from '@/components/Box/Box';
import Input from '@/components/Input/Input';
import Select from '@/components/Select/Select';
import { useEffect, useState } from 'react';
import * as Styled from './Register.styles';

const Register = () => {
  const colors = ['orange', 'red', 'yellow', 'green', 'blue', 'purple', 'pink'];
  const options = [
    { seq: 1, name: '스터디' },
    { seq: 2, name: '운동' },
    { seq: 3, name: '생활' },
  ];
  const amounts = Array.from(Array(19), (_, i) => {
    return { seq: i + 2, name: i + 2 + '' };
  });
  const [color, setColor] = useState('orange');
  const [group, setGroup] = useState();
  const [tag, setTag] = useState(0);
  const [amount, setAmount] = useState(0);

  const handle = (c: string) => {
    setColor(c);
  };

  const handleTag = (seq: number) => {
    setTag(seq);
  };

  const handleAmount = (seq: number) => {
    setAmount(seq);
  };

  useEffect(() => {
    console.log(amount);
  }, [amount]);

  return (
    <Styled.Register>
      <Styled.RegisterTitle>챌린지 만들기</Styled.RegisterTitle>
      <Styled.RegisterBlock>
        <Styled.RegisterBoxGroup status="active">
          <div>개인</div>
        </Styled.RegisterBoxGroup>
        <Styled.RegisterBoxGroup status="disabled">
          <div>그룹</div>
        </Styled.RegisterBoxGroup>
      </Styled.RegisterBlock>
      <Styled.RegisterBlock>
        <Box text="챌린지 종류" status={tag > 0 ? 'active' : 'disabled'}>
          <Select name="tag" options={options} value={tag} onChange={(seq) => handleTag(seq)} />
        </Box>
        <Box text="인원수" status={amount > 0 ? 'active' : 'disabled'}>
          <Select
            name="amount"
            options={amounts}
            value={amount}
            onChange={(seq) => handleAmount(seq)}
          />
        </Box>
      </Styled.RegisterBlock>
      <Styled.RegisterBlock>
        <Styled.RegisterInput width="full" status="disabled" />
        <Styled.RegisterInputText status="disabled">
          <div>목표</div>
        </Styled.RegisterInputText>
      </Styled.RegisterBlock>
      <Styled.RegisterBlock>
        <Styled.RegisterInput width="full" status="disabled" />
        <Styled.RegisterInputText status="disabled">
          <div>설명</div>
        </Styled.RegisterInputText>
      </Styled.RegisterBlock>

      <Styled.RegisterBlock>
        <Box text="시작일" status="disabled"></Box>
        <Box text="종료일" status="disabled"></Box>
      </Styled.RegisterBlock>
      <Styled.RegisterBlock>
        {colors.map((item) => (
          <Styled.RegisterBoxColor
            status={item === color ? 'active' : 'disabled'}
            color={item}
            onClick={() => handle(item)}
            key={item}
          >
            <div>✔</div>
          </Styled.RegisterBoxColor>
        ))}
      </Styled.RegisterBlock>
    </Styled.Register>
  );
};

export default Register;
