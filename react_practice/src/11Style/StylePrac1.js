import "./StylePrac1.scss";
import grass from "./grass.png";

export default function StylePrac1() {
  return (
    <>
      <div className="StylePracice1">
        <div className="box red location1">
          <div className="white-eye"></div>
          <div className="black-eye"></div>
        </div>
        <div className="box orange location2"></div>
        <div className="box yellow location3"></div>
        <div className="box green location4"></div>
        <div className="box blue location5"></div>
        <div>
          <img className="grassImg" src={grass}></img>
        </div>
      </div>
    </>
  );
}
