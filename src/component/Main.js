import React from "react";
import HonerdBeast from "./HornedBeast";
import HonndData from "./assets/HornedBeast.json";
class Main extends React.Component {
  render() {
    return (
      <div>
        <>
        <HonerdBeast img ={HonndData[0].image_url} describtion ={HonndData[0].description} title = {HonndData[0].title} />
        <HonerdBeast img ={HonndData[1].image_url} describtion ={HonndData[1].description} title = {HonndData[1].title}/>
        </>
      </div>

    );
  }
}
export default Main;


