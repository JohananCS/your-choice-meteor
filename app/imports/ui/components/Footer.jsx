import React from 'react';
import { Container, Divider, Grid } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {

  render() {
    return (
      <Container>
        <br/>
        <br/>
        <Divider horizontal></Divider>
        <Grid columns={4} divided>
          <Grid.Row>
            <Grid.Column>
              Mojang Studios © 2022
            </Grid.Column>
            <Grid.Column>
              Manage Cookies
            </Grid.Column>
            <Grid.Column>
              Terms and Conditions
            </Grid.Column>
            <Grid.Column>
              Privacy Policy
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Footer;
