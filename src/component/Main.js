<<<<<<< HEAD
import React from 'react';
import HornedBeasts from './HornedBeasts';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {

  render() {
=======
import React from "react";
import HornedBeasts from "./HornedBeasts";
class Main extends React.Component {
  render() {

    let arr = this.props.bests.map(horn => {
      return (
        <HornedBeasts
          title={horn.title}
          description={horn.description}
          image_url={horn.image_url}
          handleClose={this.props.handleClose}
        />
      );
    });
    return <main>{arr}</main>;
  }
}

>>>>>>> 33e93275e75ace607081b13a7aace32ec4b27046
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
<<<<<<< HEAD
=======
                  select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
>>>>>>> 33e93275e75ace607081b13a7aace32ec4b27046
                />
              
             ) })
          }

        

<<<<<<< HEAD
</main>
  
  )
        }
  
      }
      export default Main;
=======

export default Main;
>>>>>>> 33e93275e75ace607081b13a7aace32ec4b27046
