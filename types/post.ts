import { PortableTextBlock } from "sanity";

export type Post = {
    _id: string;
    _createdAt: Date;
    title: string;
    publishedAt: Date;
    slug: string;
    image: string;
    body: PortableTextBlock[];
}