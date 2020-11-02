import React from "react";
import { Animate } from "react-move";
type Props = {
  valueEnd: number;
  duration: number;
  repeat: boolean;
  valueStart: number;
  children: any;
  // eslint-disable-next-line @typescript-eslint/ban-types
  easingFunction: Function;
};
type State = { isAnimated: boolean };
class AnimatedProgressProvider extends React.Component<Props, State> {
  interval: any | undefined = undefined;

  state = {
    isAnimated: false,
  };

  static defaultProps = {
    valueStart: 0,
  };

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  componentDidMount() {
    if (this.props.repeat) {
      this.interval = window.setInterval(() => {
        this.setState({
          isAnimated: !this.state.isAnimated,
        });
      }, this.props.duration * 1000);
    } else {
      this.setState({
        isAnimated: !this.state.isAnimated,
      });
    }
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <Animate
        start={() => ({
          value: this.props.valueStart,
        })}
        update={() => ({
          value: [
            this.state.isAnimated ? this.props.valueEnd : this.props.valueStart,
          ],
          timing: {
            duration: this.props.duration * 1000,
            ease: this.props.easingFunction,
          },
        })}
      >
        {({ value }) => this.props.children(value)}
      </Animate>
    );
  }
}

export default AnimatedProgressProvider;
