import { Facebook, Instagram, Linkedin, Vk } from 'assets/icons';
import { RouteNames } from 'types/enum';
import { NavMenuItem } from 'types/types';

export const NAVIGATION_MENU_LIST: NavMenuItem[] = [
  {
    isBurgerOnly: false,
    route: RouteNames.books,
    title: 'Витрина книг',
    list: {
      route: RouteNames.booksAll,
      listTitle: 'Все книги',
      entries: []
    }
  },
  {
    isBurgerOnly: false,
    route: RouteNames.terms,
    title: 'Правила пользования'
  },
  {
    isBurgerOnly: false,
    route: RouteNames.contract,
    title: 'Договор оферты'
  },
  {
    isBurgerOnly: true,
    route: RouteNames.profile,
    title: 'Профиль'
  },
  {
    isBurgerOnly: true,
    route: RouteNames.exit,
    title: 'Выход'
  }
];

export const SOCIAL_MEDIA_LIST = [
  {
    url: 'https://www.facebook.com',
    icon: Facebook
  },
  {
    url: 'https://www.instagram.com',
    icon: Instagram
  },
  {
    url: 'https://vk.com',
    icon: Vk
  },
  {
    url: 'https://www.linkedin.com',
    icon: Linkedin
  }
];

export const windowSizes = {
  laptop: 1024,
  tablet: 768
};

export const COPYRIGHT_TEXT = '&copy; 2020-2023 Cleverland. Все права защищены.';
