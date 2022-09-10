import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  query bibleStudyTopics {
    bibleStudyTopics {
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

export default ARTICLES_QUERY;