import React from 'react';
import HornedBeasts from './HornedBeasts';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {

  render() {
    return (
      <main>
        <Row xs={1} md={4} className="g-4">
          {
            this.props.HornedData.map((selectedBeastItem) => {
              return (
                <HornedBeasts
                  imageUrl={selectedBeastItem.image_url}
                  title={selectedBeastItem.title}
                  description={selectedBeastItem.description}
                  keyword={selectedBeastItem.keyword}
                  horns={selectedBeastItem.horns}
                  selectedHorns={this.props.selectedHorns}
                  displayModal={this.props.displayModal}                  
                />
              )
            })
          }

        </Row>
      </main>
    )
  }
}

export default Main;