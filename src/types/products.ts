import type { JSX } from "react";
export type Product = {
  id: number;
  image: string;
  name: string;
  title: string;
  paragraph: string;
  button?: string;
  link: string;
  list?: string[];
};
