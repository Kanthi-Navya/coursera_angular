import {Comment} from './comment';


export class Dish {
    id: string;
    name: string;
    label:string;
    image: string;
    category: string;
    featured: boolean;
    price: string;
    description: string;
    comments: Comment[];
}
