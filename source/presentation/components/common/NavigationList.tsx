import { useRouter } from "next/router";

import Link from "next/link";
import clsx from "clsx";

interface INavigationItemsProps {
  id: string;
  href: string;
  label: string;
  accessKey: string;
}

const navigationItems: INavigationItemsProps[] = [
  {
    id: "first-navigation-item",
    label: "Livros de Regras",
    accessKey: "L",
    href: "/#",
  },
  {
    id: "second-navigation-item",
    label: "Dimensões e Mundos",
    accessKey: "D",
    href: "",
  },
  {
    id: "third-navigation-item",
    label: "Entidades e Deuses",
    accessKey: "E",
    href: "",
  },
  {
    id: "fourth-navigation-item",
    label: "Heróis e Lendas",
    accessKey: "H",
    href: "",
  },
  {
    id: "fifth-navigation-item",
    label: "Suas mesas",
    accessKey: "S",
    href: "",
  },
];

export default function NavigationList(): JSX.Element {
  return (
    <nav>
      <ul className="navigation-items-list">
        {navigationItems.map(({ accessKey, id, label, href }) => (
          <li key={id} id={id} accessKey={accessKey}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
