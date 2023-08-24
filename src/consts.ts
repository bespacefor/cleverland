import { Facebook, Instagram, Linkedin, Vk } from 'assets/icons';
import { BookCategory, RouteNames } from 'types/enum';
import { NavMenuItem } from 'types/types';

export const NAVIGATION_MENU_LIST: NavMenuItem[] = [
  {
    isBurgerOnly: false,
    route: RouteNames.books,
    title: 'Витрина книг',
    list: {
      route: RouteNames.booksAll,
      listTitle: 'Все книги',
      entries: [
        {
          name: 'Бизнес-книги',
          category: BookCategory.business,
          count: 14
        },
        {
          name: 'Детективы',
          category: BookCategory.detectives,
          count: 8
        },
        {
          name: 'Детские книги',
          category: BookCategory.childish,
          count: 10
        },
        {
          name: 'Зарубежная литература',
          category: BookCategory.foreign,
          count: 2
        },
        {
          name: 'История',
          category: BookCategory.history,
          count: 5
        },
        {
          name: 'Классическая литература',
          category: BookCategory.classic,
          count: 12
        },
        {
          name: 'Книги по психологии',
          category: BookCategory.psychology,
          count: 11
        },
        {
          name: 'Компьютерная литература',
          category: BookCategory.computer,
          count: 54
        },
        {
          name: 'Культура и искусство',
          category: BookCategory.culture,
          count: 0
        },
        {
          name: 'Наука и образование',
          category: BookCategory.science,
          count: 2
        },
        {
          name: 'Публицистическая литература',
          category: BookCategory.nonfiction,
          count: 0
        },
        {
          name: 'Справочники',
          category: BookCategory.manuals,
          count: 10
        },
        {
          name: 'Фантастика',
          category: BookCategory.fantastic,
          count: 12
        },
        {
          name: 'Юмористическая литература',
          category: BookCategory.humor,
          count: 8
        }
      ]
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
