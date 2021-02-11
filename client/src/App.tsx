import React from "react";
import { Header, Image, Card, Segment, Input, Button } from "semantic-ui-react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";

const App: React.FC = () => {
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
          />
          <Button id="btn" size="big">
            Shorten
          </Button>
          <Card.Description id="pageFont" style={{ marginTop: "15px" }}>
            Use Knight Shortener to create a shortened link making it easy to
            remember.
          </Card.Description>
        </Card.Content>
      </Card>
    </Segment>
  );
};

export default App;
