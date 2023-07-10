import { FC } from 'react';

import { SocialMediaContainer } from './social-media-list.style';

import { SOCIAL_MEDIA_LINKS } from 'consts';

export const SocialMediaList: FC = () => {
  return (
    <SocialMediaContainer>
      {SOCIAL_MEDIA_LINKS.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <a href={item.url} key={index} target='_blank' rel='noreferrer'>
            <IconComponent />
          </a>
        );
      })}
    </SocialMediaContainer>
  );
};
