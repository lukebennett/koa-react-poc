import reactStamp from 'react-stamp';

export default ({
  React,
  Button,
  Text,
}, ...behaviours) => (
  reactStamp(React).compose({
    state: {
      showText: false,
      clickable: false
    },

    render () {
      const { clickable, showText } = this.state;
      const { text } = this.props;

      return (
        <div>
          <Button
            disabled={!clickable}
            onClick={() => this.onClick && this.onClick()}
            value='Click me'
          />
          <Text
            value={showText && text}
          />
        </div>
      );
    }
  }, ...behaviours)
);