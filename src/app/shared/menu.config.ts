export interface MenuEntry {
  name: string;
  route: string;
}

export class MenuConfig{
  public static menuEntries: MenuEntry[] = [
    {name: "Home", route: "/home"},
    {name: "About", route: "/home2"},
    {name: "Example", route: "/home3"},
    {name: "Example ", route: "/home4"}
  ]
}

