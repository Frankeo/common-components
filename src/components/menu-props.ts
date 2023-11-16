export interface Page {
  name: string;
  href: string;
}

type Logos = "facebook-f" | "instagram";

export interface Media {
  logo: Logos;
  href: string;
}

export interface MenuProps {
  title: string;
  pages?: Page[];
  medias?: Media[];
}
