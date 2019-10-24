import React, { Component } from 'react';
import HomeHeaderscreen from './homeheader';
import PageFooter from './footer';
import '../styles/styles.css';

class HomeScreen extends Component {
  render() {    
    return (
      <div>
        <div className="container-fluid">
        <HomeHeaderscreen />   
          <div className="row content">
            <div className="container">
              <div className="col-sm-12">
                <h3>Column 1</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                   when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                   It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                     and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
               It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                     and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
            </div>
          </div>
          <PageFooter />
        </div>

      </div>
    )
  }
}

export default HomeScreen;
