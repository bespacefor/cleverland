import { FC } from 'react';

import { SocialMediaContainer } from './social-media-list.style';

import { SOCIAL_MEDIA_LIST } from 'consts';
import { keyExtractor } from 'utils/key-extractor';

export const SocialMediaList: FC = () => {
  return (
    <SocialMediaContainer>
      {SOCIAL_MEDIA_LIST.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <a href={item.url} key={keyExtractor(index)} target='_blank' rel='noreferrer'>
            <IconComponent />
          </a>
        );
      })}
    </SocialMediaContainer>
  );
};
