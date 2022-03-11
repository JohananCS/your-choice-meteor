import React from 'react';
import { Container, Button, Grid, Header, Image, Icon } from 'semantic-ui-react';

export default class Middle extends React.Component {
  render() {
    return (

      <Container>
        <br/>

        <Button.Group floated='right'>
          <Button><Image src='https://symbols.getvecta.com/stencil_88/98_mojang-icon.b892e76ca4.svg' height='20px'></Image></Button>
          <Button>Log in</Button>
          <Button>Games <Icon name='dropdown' size='small'/></Button>
          <Button>Help</Button>
        </Button.Group>
        <br/>

        <Image src='https://account.mojang.com/images/mojang_logo.png'></Image>
        <Grid columns={2} padded>
          <Grid.Column>
            <Header as='h1'>Your key to all things Minecraft Java Edition
            </Header>
            <Header as='h3'>
              Enjoy all that Minecraft: Java Edition has to offer with minimum fuss by creating a Minecraft profile using your Microsoft account. Your customizable profile grants you access to Minecraft: Java Edition as well as Minecraft
              Realms.
              <br/>
              <br/>
              Start your adventure!
              <br/>
              <br/>
            </Header>

            <Button size='huge' positive>Create an account</Button>
          </Grid.Column>
          <Grid.Column>
            <Image src='https://assets2.rockpapershotgun.com/mccommunity1.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/mccommunity1.jpg' rounded/>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}
