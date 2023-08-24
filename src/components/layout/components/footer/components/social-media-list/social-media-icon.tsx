import { FC } from 'react';

type IconProps = {
  icon: FC<React.SVGProps<SVGSVGElement>>;
  url: string;
};

export const SocialMediaIcon: FC<IconProps> = ({ icon: SocialIcon, url }) => (
  <a href={url} target='_blank' rel='noreferrer'>
    <SocialIcon />
  </a>
);
