import { Actor } from "./actor.model";

export interface Film{
    id:string;
    name:string;
    type:string;
    releaseDate:string;
    photo: string;
    viewers: number;
    protagonist: Actor;
}