import { React, useEffect, useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import "./BibleStudyTopic.css";

function BibleStudyTopics() {
  const [bibleStudyTopics, setBibleStudyTopics] = useState();
  const [offCanvasTitle, setOffCanvasTitle] = useState();
  const [offCanvasContent, setOffCanvasContent] = useState();

  useEffect(() => {
    fetch("https://yfcbackend.herokuapp.com/api/bible-study-topics")
      .then((res) => res.json())
      .then((data) => setBibleStudyTopics(data.data));
  }, []);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      BibleStudyTopics
      {bibleStudyTopics ? (
        bibleStudyTopics.map((data, index) => {
          const articleTitle = data.attributes.Title;
          const articleContent = data.attributes.Content;

          return (
            <div className="article-list" key={index}>
              <h3>{articleTitle}</h3>
              <Button
                variant="primary"
                onClick={() => {
                  handleShow();
                  setOffCanvasTitle(articleTitle);
                  setOffCanvasContent(articleContent);
                }}
              >
                Read
              </Button>
            </div>
          );
        })
      ) : (
        <p>Loading</p>
      )}
      <Offcanvas
        className="offcanvas__container"
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h2> {offCanvasTitle}</h2>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <>
            <ReactMarkdown>{offCanvasContent}</ReactMarkdown>
          </>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default BibleStudyTopics;
