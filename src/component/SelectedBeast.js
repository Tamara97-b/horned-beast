import React from "react";
import Modal from "react-bootstrap/Modal";
<<<<<<< HEAD
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class SelectedBeast extends React.Component {
    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.close}>
                    <Modal.Header>
                        <Modal.Title>{this.props.title}</Modal.Title>
                        <span className="close" onClick={this.props.close}>&times;
                        </span>
                    </Modal.Header>

                    <Modal.Body>
                        <Card style={{ width: "100%" }} bg="dark" text="light">
                            <Card.Img
                                variant="top"
                                src={this.props.selectedBeast.image_url}
                                className="cardImg"
                            />
                            <Card.Body>
                                <Card.Title>{this.props.selectedBeast.title}</Card.Title>
                                <Card.Text>{this.props.selectedBeast.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.close}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
=======

class SelectedBeast extends React.Component {
  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.props.description}</Modal.Body>
          <img className="imgModal" src={this.props.image_url} />
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    );
  }
>>>>>>> 33e93275e75ace607081b13a7aace32ec4b27046
}

export default SelectedBeast;