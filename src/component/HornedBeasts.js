<<<<<<< HEAD
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

import Modal from 'react-bootstrap/Modal'


class HornedBeasts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            like: 0
        }
    }

    increse = () => {
        this.setState({
            like: this.state.like + 1
        })
    }
    displayModal = () => {
        this.props.displayModal(this.props.title)
    }

    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }} onClick={this.displayModal}>
                    <Card.Img variant="top" src={this.props.imageUrl} onClick={this.increse} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        {/* <Card.Text>
                            ❤️ =  {this.state.like}
                        </Card.Text> */}
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default HornedBeasts;
=======
import React from "react";
import Card from "react-bootstrap/Card";

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Votes: 0,
    };
  }
  increaseHorneVotes = () => {
    this.setState({
      Votes: this.state.Votes + 1,
    });
    this.props.handleClose(this.props.title,this.props.description,this.props.image_url);
  };

  render() {
    return (
      <div>
        <Card style={{ width: "20rem" }}>
          <Card.Img
            variant="top"
            src={this.props.image_url}
            onClick={this.increaseHorneVotes}
          />
          <Card.Body>
            <Card.Title>The Title : {this.props.title}</Card.Title>
            <Card.Text>number of horns: {this.props.horns}</Card.Text>
            <Card.Text>Descriptions: {this.props.descriptions}</Card.Text>
            <Card.Text>Number of votes : {this.state.Votes} 💓</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default HornedBeasts;
>>>>>>> 33e93275e75ace607081b13a7aace32ec4b27046
