import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const CharacterCard = props => (
  <Card>
    <Image src={props.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>{props.status}</Card.Meta>
      <Card.Description>
        Location: {props.location}
        <br />
        Origin: {props.origin}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="tv" />
        Episodes
      </a>
    </Card.Content>
  </Card>
);

export default CharacterCard;
