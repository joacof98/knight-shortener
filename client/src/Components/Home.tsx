import React, { useState, ChangeEvent } from "react";
import { Header, Image, Card, Segment, Input, Button } from "semantic-ui-react";
import axios from 'axios';
import "../App.css";

const SERVER_URI = 'http://localhost:4000/api/url'

const App: React.FC = () => {
  const [urlToShorten, setUrlToShorten] = useState<string>('')
  const [errorMsg, setErrorMsg] = useState<string>('')
  const [urlShortened, setUrlShortened] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setUrlToShorten(e.target.value)
  };

  const shortenUrl = async () => {
    return await axios
    .post(SERVER_URI, {urlToShorten})
    .then((response) => {
      setErrorMsg('')
      setUrlShortened(response.data)
    })
    .catch(err => {
      setUrlShortened('')
      setErrorMsg(err.response.data)
    })
  }

  return (
    <Segment id="cover" vertical textAlign="center">
      <Header as="h1" id="title">
        Knight <span style={{ color: "#c31d1d" }}>Shortener</span>
      </Header>
      <Image style={{ margin: "auto" }} src="https://i.imgur.com/uhBP596.png" />
      <Card centered id="inputCard">
        <Card.Content>
          <Header as="h1" id="pageFont">
            Paste the url to be shortened
          </Header>
          <Input
            icon="paste"
            size="large"
            id="inputUrl"
            iconPosition="left"
            placeholder="Paste your url..."
            onChange={handleChange}
          />
          <Button id="btn" size="big" onClick={shortenUrl}>
            Shorten
          </Button>
          <Card.Description id="pageFont" style={{ marginTop: "15px" }}>
            Use Knight Shortener to create a shortened link making it easy to
            remember.
          </Card.Description>
          {errorMsg && (
            <div className="ui error message">
              <Header id="responseInfo">{errorMsg}</Header>
            </div>
          )}
          {urlShortened && (
            <div className="ui success message">
              <Header id="responseInfo">
                Done! Use this code for your long url:
              </Header>
              <Header id='responseInfo' style={{marginTop: '10px', fontSize: '20px'}}>
                {urlShortened}
              </Header>
            </div>
          )}
        </Card.Content>
      </Card>
    </Segment>
  );
};

export default App;