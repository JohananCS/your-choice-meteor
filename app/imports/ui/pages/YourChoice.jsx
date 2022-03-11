import React from 'react';
import Middle from '../components/Middle';
import Footer from '../components/Footer';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
export default class YourChoice extends React.Component {

  render() {
    return (
      <div>
        <Middle/>
        <Footer/>
      </div>
    );
  }
}
