import styled from 'styled-components';

export const ListContainer = styled.div`
  flex: 2;
  h5 {
    font: ${({ theme }) => theme.fonts.h3};
    @media ${({ theme }) => theme.media.mobile} {
      font: ${({ theme }) => theme.fonts.mobileH3};
    }
  }
  ol {
    list-style: none;
    counter-reset: li;
  }
  li:before {
    counter-increment: li;
    content: counters(li, '.') '. ';
  }
  .mainList {
    font: ${({ theme }) => theme.fonts.subtitleLarge};
    padding-top: 35px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    @media ${({ theme }) => theme.media.mobile} {
      padding-top: 25px;
    }
    .subList {
      font: ${({ theme }) => theme.fonts.bodyLarge};
      padding: 16px 0 0 30px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      @media ${({ theme }) => theme.media.mobile} {
        font: ${({ theme }) => theme.fonts.mobileBodyLarge};
      }
    }
  }
`;
