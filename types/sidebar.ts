export interface ISidebar {
  [key: string]: ISidebarItem[];
}

export interface ISidebarItem {
  name: string;
  url: string;
  icon: React.ReactNode;
}

export interface ISidebarUser {
  name: string;
  email: string;
  avatar: string;
}

export interface ISidebarHeader {
  children?: React.ReactNode;
}
