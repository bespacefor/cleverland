import { FC } from 'react';

import { SocialMediaIcon } from './social-media-icon';
import { SocialMediaContainer } from './social-media-list.style';

import { SOCIAL_MEDIA_LIST } from 'consts';
import { keyExtractor } from 'utils/key-extractor';

export const SocialMediaList: FC = () => (
  <SocialMediaContainer>
    {SOCIAL_MEDIA_LIST.map((item, index) => (
      <SocialMediaIcon icon={item.icon} url={item.url} key={keyExtractor(index)} />
    ))}
  </SocialMediaContainer>
);
