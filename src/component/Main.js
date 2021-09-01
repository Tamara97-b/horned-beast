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
                  select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
                />
              
             ) })
          }

        

</main>
  
  )
        }
  
      }
      export default Main;