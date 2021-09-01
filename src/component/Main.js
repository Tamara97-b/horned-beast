import React from 'react';
import HornedBeasts from './HornedBeasts';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {

  render() {
    return (
      
        <main>
          {
            this.propsHornedData.map((selectedBeastItem) => {
              return (
                <HornedBeasts
                  imageUrl={selectedBeastItem.image_url}
                  title={selectedBeastItem.title}
                  description={selectedBeastItem.description}
                  keyword={selectedBeastItem.keyword}
                  horns={selectedBeastItem.horns}
                  displayModal={this.props.displayModal}
                />
              
             ) })
          }

        

</main>
  
  )
        }
  
      }
      export default Main;