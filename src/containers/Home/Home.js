import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Search from "../../components/Search/Search";
import Spacer from "../../components/Spacer/Spacer";
import { dataFetcher } from "../../Utils/dataFetcher";

export default class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    dataFetcher().then(cards => {
      this.setState({
        cards
      });
    });
  }

  render() {
    const { cards } = this.state;
    return (
      <div>
        <Spacer size={20} />
        <div
          style={{
            display: 'flex',
            justifyContent: "space-around",
          }}
        >
          <Search />
        </div>
        <Spacer size={20} />
        <Carousel cards={cards} />
      </div>
    );
  }
}
