import { Blog } from "./BlogCardType.types";


export type ISearchProps = {
    setBlogs:  (args0:Blog[]) => void;
    setIsHomeFetch: (args0:boolean) => void;
    };