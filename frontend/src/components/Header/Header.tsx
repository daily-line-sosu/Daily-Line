import { useState } from 'react';
import * as Styled from './Header.styles';
import logo from '@/assets/images/logo.png';
import Button from '@/components/Button/Button';
import Image from '@/components/Image/Image';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <Styled.HeaderLayout>
      <Styled.HeaderLogo>
        <Link to="/">
          <Image src={logo} />
        </Link>
      </Styled.HeaderLogo>
      <Styled.HeaderMenu>
        {isLogin ? (
          <>
            <Styled.HeaderMenuItem>
              <Link to="/register">+</Link>
            </Styled.HeaderMenuItem>
            <Styled.HeaderMenuProfile>
              <Link to="/mypage">
                <Image
                  src="https://i.pinimg.com/originals/ab/dc/b7/abdcb72e1cdeb57afc6e3d280fbc3a82.jpg"
                  shape="circle"
                />
              </Link>
            </Styled.HeaderMenuProfile>
          </>
        ) : (
          <Styled.HeaderMenuLogin variant="text" size="small">
            Login
          </Styled.HeaderMenuLogin>
        )}
      </Styled.HeaderMenu>
    </Styled.HeaderLayout>
  );
};
export default Header;
