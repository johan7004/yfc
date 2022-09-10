import { React, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./BibleStudyTopic.css";
import ARTICLES_QUERY from "./../queries/bible-study-query";
import { useQuery } from "@apollo/react-hooks";

function BibleStudyTopics() {
  const [bibleStudyTopics, setBibleStudyTopics] = useState();
  const { data } = useQuery(ARTICLES_QUERY);

  useEffect(() => {
    setBibleStudyTopics(data);
  }, [data]);

  console.log(bibleStudyTopics);

  return (
    <div>
      BibleStudyTopics
      {bibleStudyTopics
        ? bibleStudyTopics.bibleStudyTopics.data.map((data, index) => {
            const studyTitle = data.attributes.Title;
            const studySlug = data.attributes.Slug;
            return (
              <div key={index}>
                <p >{studyTitle}</p>

                <Link to={studySlug}>
                  <Button>Read More</Button>
                </Link>
              </div>
            );
          })
        : "Loading"}
    </div>
  );
}

export default BibleStudyTopics;
