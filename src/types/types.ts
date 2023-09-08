import { RouteNames } from './enum';

export type UserDTO = {
  name: string;
  avatar?: string;
};

export type CategoryDTO = {
  name: string;
  path: string;
  id: number;
  booksCount: number;
};

export type NavMenuItemList = {
  route: RouteNames;
  listTitle: string;
  entries: CategoryDTO[];
};

export type NavMenuItem = {
  isBurgerOnly: boolean;
  route: RouteNames;
  title: string;
  list?: NavMenuItemList;
};

export type BookImage = {
  url: string;
};

export type MainBookDTO = {
  issueYear?: string;
  rating?: number;
  title: string;
  authors?: string[];
  image?: BookImage;
  categories?: string[];
  id: number;
  booking?: {
    id: number;
    order: boolean;
    dateOrder?: string;
    customerId?: number;
    customerFirstName?: string;
    customerLastName?: string;
  };
  delivery?: {
    id: number;
    handed: boolean;
    dateHandedFrom?: string;
    dateHandedTo?: string;
    recipientId?: number;
    recipientFirstName?: string;
    recipientLastName?: string;
  };
  histories?: Array<{
    id?: number;
    userId?: number;
  }>;
};

export type CommentDTO = {
  id?: number;
  rating: number;
  text?: string;
  createdAt: string;
  user: {
    commentUserId: number;
    firstName: string;
    lastName: string;
    avatarUrl?: string;
  };
};

export type BookDTO = {
  id: number;
  title: string;
  rating?: number;
  issueYear?: string;
  description?: string;
  publish?: string;
  pages?: string;
  cover?: string;
  weight?: string;
  format?: string;
  ISBN?: string;
  producer?: string;
  authors?: string[];
  images?: BookImage[];
  categories?: string[];
  comments?: CommentDTO[];
  booking?: {
    id: number;
    order: boolean;
    dateOrder?: string;
    customerId?: number;
    customerFirstName?: string;
    customerLastName?: string;
  };
  delivery?: {
    id: number;
    handed: boolean;
    dateHandedFrom?: string;
    dateHandedTo?: string;
    recipientId?: number;
    recipientFirstName?: string;
    recipientLastName?: string;
  };
  histories?: Array<{
    id?: number;
    userId?: number;
  }>;
};
