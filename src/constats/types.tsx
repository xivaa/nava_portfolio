import { RefObject } from "react";

export type SectionProps = {
    sectionRef: RefObject<HTMLDivElement>;
  };

export type ProductCardProps = {
    title: string;
    year: string;
    description: string;
};

export type NavbarProps = {
    sections: RefObject<HTMLDivElement>[];
}