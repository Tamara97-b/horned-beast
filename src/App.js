import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/footer';
import HornedData from './components/data.json';
import SelectedBeast from './components/SelectedBeast';
import HornForm from './components/HornSelectForm';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedBeast: HornedData,
      showModel: false
    }
  }
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
  render() {
    return (
      <div>
        <Header />
        <HornForm  selectedHorns={this.selectedHorns} />
        <Main HornedData={this.state.selectedBeast} displayModal={this.displayModal} />
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
export default App;