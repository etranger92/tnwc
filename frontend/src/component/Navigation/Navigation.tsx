import React from "react";
import "./navigation.css";
import Burger from "../ElementsHTML/burger/Burger";
import NavBar from "./NavBar/NavBar";

//click: if the burger is clicked we hide the menu for the (mobile menu).
//Scroll: For the effect of the menu
export type State = {
  click: boolean;
  scroll: boolean;
};
//classNav: for any others page than "home" we set the nav without effect.
// eslint-disable-next-line @typescript-eslint/ban-types
export type Props = {
  classNav?: string;
};
type TStyle = {
  maxHeight: string;
};
//To tackle the coalision with button filter due to z index
type TSyleHeight = {
  height: string;
};
class Navigation extends React.Component<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = { click: false, scroll: false };
  }
  handleScroll = (): void => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const bodyPosition = document.body.getBoundingClientRect().top;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    if (bodyPosition < -6) {
      this.setState({
        scroll: true,
      });
      return;
    } else {
      this.setState({
        scroll: false,
      });
    }
  };
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  //Method use normal
  handleClick = (): void => {
    return this.setState((state: { click: any }) => ({
      click: !state.click,
    }));
  };
  render(): JSX.Element {
    const navMobileDisplay: TStyle = {
      maxHeight: "100%",
    };
    const styleHeight: TSyleHeight = {
      height: "100%",
    };
    return (
      <nav
        className={`nav_container${
          this.state.scroll || this.props.classNav
            ? " nav_desktop_on_scroll"
            : ""
        }`}
      >
        <div className="nav_desktop">
          <NavBar isItClicked={true} scroll={this.state.scroll} />
        </div>
        <div className="nav_mobile" style={this.state.click ? styleHeight : {}}>
          <Burger
            clickEvent={this.handleClick}
            isItClicked={this.state.click}
          />
          <div
            className="menu_mobile"
            style={this.state.click ? navMobileDisplay : {}}
          >
            <NavBar
              isItClicked={this.state.click}
              clickEvent={this.handleClick}
            />
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
