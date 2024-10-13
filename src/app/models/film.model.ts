import { Actor } from "./actor.model";

export interface Film{
    id:string;
    name:string;
    type:string;
    releaseDate:string;
    viewers: number;
    photo: string;
    protagonist: Actor;
}