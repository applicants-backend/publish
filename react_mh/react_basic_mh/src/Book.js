import having from "./having.jpg";
import "./test.css";

// const { title } = this.props;
// const { author } = this.props;
// const { price } = this.props;
// const { type } = this.props;
// import PropTypes from "prop-types";
function Book(props) {
  return (
    <>
      <div className="container">
        <h2 className="title">{props.title}</h2>
        <img src={having} alt="사진없음"></img>
        <div>저자 : {props.author}</div>
        <div>판매가 : {props.price}</div>
        <div>구분 : {props.type}</div>
      </div>
      <div></div>
    </>
  );
}

export default Book;
