import { FC } from 'react';

type IconProps = {
  icon: FC<React.SVGProps<SVGSVGElement>>;
  url: string;
};

const Icon: FC<IconProps> = ({ icon: IconComponent, url }) => {
  return (
    <a href={url} target='_blank' rel='noreferrer'>
      <IconComponent />
    </a>
  );
};

export default Icon;
