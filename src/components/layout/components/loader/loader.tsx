import { FC } from 'react';

import { LoaderAnimation, LoaderContainer } from './loader.style';

export const Loader: FC = () => {
  return (
    <LoaderContainer $isLoading={false}>
      <LoaderAnimation />
    </LoaderContainer>
  );
};
