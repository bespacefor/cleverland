import { FC } from 'react';

import { SocialMediaList } from './components/social-media-list';
import { FooterContainer } from './footer.style';
import { Text } from './footer.style';

import { COPYRIGHT_TEXT } from 'consts';
import { Wrapper } from 'styles/wrapper';

export const Footer: FC = () => (
  <Wrapper>
    <FooterContainer>
      <Text>{COPYRIGHT_TEXT}</Text>
      <SocialMediaList />
    </FooterContainer>
  </Wrapper>
);
