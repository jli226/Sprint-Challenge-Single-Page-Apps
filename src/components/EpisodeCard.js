import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const EpisodeCard = props => (
  <Card>
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Description>Episode: {props.episode}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="calendar" />
        Aired: {props.airDate}
      </a>
    </Card.Content>
  </Card>
);

export default EpisodeCard;
