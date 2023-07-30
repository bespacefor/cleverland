import { FC } from 'react';

import Icon from './social-media-icon';
import { SocialMediaContainer } from './social-media-list.style';

import { SOCIAL_MEDIA_LIST } from 'consts';
import { keyExtractor } from 'utils/key-extractor';

export const SocialMediaList: FC = () => {
  return (
    <SocialMediaContainer>
      {SOCIAL_MEDIA_LIST.map((item, index) => (
        <Icon icon={item.icon} url={item.url} key={keyExtractor(index)} />
      ))}
    </SocialMediaContainer>
  );
};
