import { gql } from "@apollo/client";
import client from "client";

export default function Home(props) {
  console.log("PROPS: ", props);
  return <div>Next JS &amp; WordPress course.</div>;
}


export const getStaticProps = async () =>{
  const {data} = await client.query ({
    query: gql `
    query cover {
      nodeByUri(uri: "/") {
        ... on Page {
          id
          blocks
        }
      }
    }`
  });
  return {
    props:{
      blocks: data.nodeByUri.blocks,
    }
  }
}