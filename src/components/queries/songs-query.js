import gql from "graphql-tag";

export const SONGS_QUERY = gql`
  query allTheSongs {
    songs {
      data {
        attributes {
          Slug
          Song__Title
          author
        }
      }
    }
  }
`;

export const CATEGORIES_QUERY = gql`
query allCategories {
    categories {
        data{
            attributes {
                Category__Name
            }
        }
    }
}
`;
