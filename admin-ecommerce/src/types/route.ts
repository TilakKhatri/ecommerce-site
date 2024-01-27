import React from "react";

export interface ISubMenu {
  id: string;
  name: string;
  path: string;
}
export interface INavigation {
  id: string;
  name: string;
  path: string;
  hasSubMenus: boolean;
  icon: React.ReactNode;
  subMenus?: ISubMenu[];
}
