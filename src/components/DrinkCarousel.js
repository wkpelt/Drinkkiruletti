import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class DrinkCarousel extends React.Component {
  constructor(props) {
    super(props);
    const array = ["kelkka", "longisland", "minttu", "mojito", "valkov"];

    this.images = array.map(image => {
      return (
        <div key={image}>
          <img src={require(`./media/drinkit/${image}.png`)} alt="" />
        </div>
      );
    });
  }

  render() {
    return (
      <Carousel
        className="allDrinks"
        autoPlay={true}
        infiniteLoop={true}
        width="300px"
        showArrows={false}
        showStatus={false}
        interval={4000}
        transitionTime={3000}
        stopOnHover={false}
        showIndicators={false}
        showThumbs={false}
        dynamicHeight={true}
        swipeable={false}
      >
        {this.images}
      </Carousel>
    );
  }
}
export default DrinkCarousel;
