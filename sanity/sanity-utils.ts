import { createClient, groq } from "next-sanity";

export async function getPosts(){
    const client = createClient({
        projectId: "zo1e4sf7",
        dataset: "production",
        apiVersion: "2023-08-29",
    });

    return client.fetch(
        groq`*[_type == "post"]| order(_createdAt asc){
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            publishedAt,
            "image": mainImage.asset->url,
            body,
        }`
    )
}