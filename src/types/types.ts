export type UserDTO = {
  name: string;
  avatar?: string;
};

export type BookDTO = {
  id: number;
  category: string;
  image?: string;
  title: string;
  author: string;
  isBooked: boolean;
  bookedTill?: string;
  about: string;
  rating?: number;
  publishingHouse?: string;
  publishingYear?: number;
  pages?: number;
  cover?: string;
  format?: string;
  genre?: string;
  weight?: number;
  ISBN?: string;
  manufacturer?: string;
};

export type CommentDTO = {
  avatar?: string;
  firstName: string;
  lastName: string;
  publicationDate: string;
  rating: number;
  commentText?: string;
};
