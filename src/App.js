import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/footer';
import HornedData from './component/HornedBeasts';
import SelectedBeast from './component/SelectedBeast';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedBeast: HornedData,
      showModel: false
    }
  }
  displayModal = (title) => {
    const selectedBeast2 = HornedData.filter((item)  => { 
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
        <Main  HornedData={HornedData} displayModal={this.displayModal}  />
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