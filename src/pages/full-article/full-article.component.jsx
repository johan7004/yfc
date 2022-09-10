import { React, useEffect, useState } from "react";
import gql from "graphql-tag";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";

const FULL_ARTICLE_QUERY = gql`
  query bibleStudyTopics($slug: String) {
    bibleStudyTopics(filters: { Slug: { eq: $slug } }) {
      data {
        attributes {
          Slug
          Title
          Content
        }
      }
    }
  }
`;

function FullArticlePage() {
  const [bibleStudy, setBibleStudy] = useState();
  const { bible } = useParams();
  const { data } = useQuery(FULL_ARTICLE_QUERY, { variables: { slug: bible } });

  console.log(bible);

  useEffect(() => {
    console.log(data);
    setBibleStudy(data)
  }, [data]);

  return (
    <>
    <div>
      {bibleStudy?bibleStudy.bibleStudyTopics.data.map((data,index)=>{
        const articleTitle = data.attributes.Title;
        const articleContent = data.attributes.Content;
        return (
        <div key={index}>
        <p>{articleTitle}</p>
        <ReactMarkdown>{articleContent}</ReactMarkdown>
        </div>
        )

      }):''}
    </div>
    </>
  )
}

export default FullArticlePage;
