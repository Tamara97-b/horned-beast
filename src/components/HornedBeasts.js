import React from 'react';
import Card from 'react-bootstrap/Card';
class HornedBeasts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            like: 0
        }
    }
    increaseVotes = () => {
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
                    <Card.Img variant="top" src={this.props.imageUrl} onClick={this.increaseVotes} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            ❤️ =  {this.state.like}
                        </Card.Text>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Card.Text>
                            horns = {this.props.horns}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default HornedBeasts;