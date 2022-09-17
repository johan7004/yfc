import { React, useEffect, useState } from "react";
import gql from "graphql-tag";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Container, Row, Col } from "react-bootstrap";
import { useQuery } from "@apollo/react-hooks";
import "./full-song.css";

const SINGLE__SONG__QUERY = gql`
  query singleSong($slug: String) {
    songs(filters: { Slug: { eq: $slug } }) {
      data {
        id
        attributes {
          Slug
          Song__Title
          Song
          author
        }
      }
    }
  }
`;

export default function FullSong() {
  const { song } = useParams();

  const [completeSong, setCompleteSong] = useState();
  const { data } = useQuery(SINGLE__SONG__QUERY, { variables: { slug: song } });

  console.log(data);

  useEffect(() => {
    if (data) {
      setCompleteSong(data.songs.data);
    }
  }, [data]);

  return (
    <Container className="full-song__container">
      <Row className="full-song__container-body">
        {completeSong
          ? completeSong.map((data, i) => {
              const songTitle = data.attributes.Song__Title;
              const songLyrics = data.attributes.Song;
              return (
                <Col key={i}>
                  <h3>{songTitle}</h3>
                  <ReactMarkdown>{songLyrics}</ReactMarkdown>
                </Col>
              );
            })
          : ""}
      </Row>
    </Container>
  );
}
