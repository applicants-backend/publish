import { Component } from "react";

class Message extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.ShowMessage = this.ShowMessage.bind(this);
  //   }
  ShowMessage = () => {
    alert(this.props.message);
  };

  render() {
    return (
      <>
        <div>
          <button onClick={this.ShowMessage}>클릭</button>
        </div>
      </>
    );
  }
}

export default Message;
