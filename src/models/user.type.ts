import { Roles } from "./roles";

export const UserKey = "user";
export interface User {
  id: string;
  name: string;
  username: string;
  rol: Roles | string;
}

export const userEmptyState: User = {
  id: "",
  name: "",
  username: "",
  rol: "",
};
