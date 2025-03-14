export type NavbarLink = {
  text: string;
  href: string;
  accent?: boolean;
};

export type ExtendedNavbarLink = NavbarLink & {
  child?: NavbarLink[];
};

export type NavbarData = {
  links?: ExtendedNavbarLink[];
  actions?: {
    text: string;
    href: string;
  }[];
};
