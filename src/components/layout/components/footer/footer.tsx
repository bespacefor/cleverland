import { FC } from 'react';

import { SocialMediaList } from './components/social-media-list';
import { FooterContainer } from './footer.style';
import { Text } from './footer.style';

import { Wrapper } from 'styles/wrapper';

export const Footer: FC = () => (
  <Wrapper>
    <FooterContainer>
      <Text>&copy; 2020-2023 Cleverland. Все права защищены.</Text>
      <SocialMediaList />
    </FooterContainer>
  </Wrapper>
);
