import { User } from "./user";

export interface Watch {
    name: string;
    description: string;
    image: string;
    authorId: User;
}