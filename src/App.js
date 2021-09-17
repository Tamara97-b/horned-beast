<<<<<<< HEAD
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/footer';
import HornedData from './components/data.json';
import SelectedBeast from './components/SelectedBeast';
import HornForm from './components/HornSelectForm';

=======
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/footer';
import HornedData from './component/HornedBeasts';
import SelectedBeast from './component/SelectedBeast';
>>>>>>> main

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedBeast: HornedData,
      showModel: false
    }
  }
<<<<<<< HEAD
  selectedHorns = (event) => {
    const selectedHornsOption = event.target.value;
    const hornsSelected = HornedData.filter((item) => {
      if(selectedHornsOption === 'All'){        
        console.log('all chosen');
        return(this.state = {
          selectedBeast: HornedData,          
        });                  
      }
      else{
        return (JSON.stringify(item.horns) === selectedHornsOption);
      }      
    });
    console.log(hornsSelected);
    this.setState({
      selectedBeast: hornsSelected,
    })
  }

  displayModal = (title) => {
    const selectedBeast2 = HornedData.filter((item) => {
=======
  displayModal = (title) => {
    const selectedBeast2 = HornedData.filter((item)  => { 
>>>>>>> main
      return (item.title === title);
    });
    console.log(selectedBeast2);
    this.setState({
      showModel: true,
      selectedBeast: selectedBeast2[0],
    })
  }
  closeModal = () => {
    this.setState({
      showModel: false
    })
  }
=======
import React from "react"; // we are adding the react library into our App component
import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import SelectedBeast from "./component/SelectedBeast";
import data from './assets/data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: "",
      description: "",
      image_url: "",
    };
  }

  handleClose = (title, description, image_url) => {
    this.setState({
      show: !this.state.show,

      title: title,
      description: description,
      image_url: image_url,
    });
  };
>>>>>>> 33e93275e75ace607081b13a7aace32ec4b27046
  render() {
    return (
      <div>
        <Header />
<<<<<<< HEAD
<<<<<<< HEAD
        <HornForm  selectedHorns={this.selectedHorns} />
        <Main HornedData={this.state.selectedBeast} displayModal={this.displayModal} />
=======
        <Main  HornedData={HornedData} displayModal={this.displayModal}  />
>>>>>>> main
        <SelectedBeast
          selectedBeast={this.state.selectedBeast}
          show={this.state.showModel}
          close={this.closeModal}
        />
        <Footer />
      </div>
    )
  }
}
=======
        <Main  bests={data} handleClose={this.handleClose} />
        <Footer />
        <SelectedBeast
          show={this.state.show}
          handleClose={this.handleClose}
          title={this.state.title}
          description={this.state.description}
          image_url={this.state.image_url}
        />
      </div>
    );
  }
}

>>>>>>> 33e93275e75ace607081b13a7aace32ec4b27046
export default App;