import { Post } from "@/types/post";
import { Page } from "@/types/page";
import { createClient, groq } from "next-sanity";
import config from "./config/client-config";

export async function getPosts(): Promise<Post[]> {
  const posts = await createClient(config).fetch(
    groq`*[_type == "post"] | order(_createdAt desc){
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            publishedAt,
            mainImage {alt, "image": asset->url},
            body,
        }`
  );

  return posts;
}

export async function getPost(slug: string): Promise<Post> {
  const post = await createClient(config).fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            publishedAt,
            mainImage {alt, "image": asset->url},
            body,
        }`,
    { slug }
  );

  return post;
}

export async function getPages(): Promise<Page[]> {
  const pages = await createClient(config).fetch(
    groq`*[_type == "page"]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
        }`
  );

  return pages;
}

export async function getPage(slug: string): Promise<Page> {
  const page = await createClient(config).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            content,
        }`,
    { slug }
  );

  return page;
}
