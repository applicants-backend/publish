// import logo from './logo.svg';
import "./App.css";

function App() {
  // practic1
  const calculate = Number(3 + 5 === 8);

  // practice2
  const name = "짱가";
  const animal = "강아지";

  // practice 3
  const TITLE = "Hello World";
  const titleStyle = {
    backgroudColor: "orange",
    color: "brown",
    fontSize: "40px",
  };

  // practice 5
  const users = [
    { id: 1, name: "John", age: 25, vip: true },
    { id: 2, name: "Jane", age: 19, vip: false },
    { id: 3, name: "Alice", age: 30, vip: true },
    { id: 4, name: "Bob", age: 18, vip: false },
    { id: 5, name: "Charlie", age: 35, vip: true },
  ];
  const findUser = users.filter(({ age, vip }) => {
    return vip === true;
  });
  console.log(findUser[0].name);
  console.log(findUser[1].name);
  console.log(findUser[2].name);

  const vipUsers = users.filter((value) => value.vip === true);
  console.log(vipUsers);

  // map 함수
  const lists = ["k", "d", "t", "w", "e", "b"];

  // filter 함수
  const animals = ["dog", "cat", "rabbit"];
  const newAnimals = animals.filter((value) => {
    return value.includes("a");
  });
  console.log(newAnimals);

  // 단축평가
  // && 연산자
  const result = false && "Hello";
  console.log(result);

  // || 연산자
  const defaultValue = 1000;
  const price = 2500;
  const dbPrice = price || defaultValue;
  console.log(dbPrice);

  const isLogin = true;

  return (
    <>
      <h1>반갑습니다.</h1>
      {isLogin && (
        <>
          {/* practice 1 */}
          <div>이것은 div 입니다.</div>
          <div>
            <h3>이것은 div 태그 안의 h3 태그입니다.</h3>
          </div>
          <div>
            {calculate ? <h1>true 입니다.</h1> : <h1>false 입니다. </h1>}
          </div>
          <hr />

          {/* practice 2 */}
          <h2>제 반려 동물의 이름은 {name}입니다.</h2>
          <h2>
            {name}는 {animal}입니다.
          </h2>
          <hr />

          {/* practice 3 */}
          <form>
            <div className="test">
              <div style={titleStyle} className="title">
                {TITLE}
              </div>
              <div>
                id : <input></input>
              </div>
              <br />
              <div>
                pw : <input></input>
              </div>
              <br />
            </div>
          </form>
          <hr />

          {/* practice 4 */}
          <div>
            <div className="container">
              <div className="red"></div>
              <div className="orange"></div>
              <div className="yellow"></div>
              <div className="green"></div>
              <div className="blue"></div>
              <div className="navy"></div>
              <div className="purple"></div>
            </div>
          </div>

          {lists.map((value, index) => {
            return (
              <div key={index}>
                <p>HELLO {value}</p>
              </div>
            );
          })}

          {vipUsers.map((value) => (
            <div key={value.id}> - {value.name}</div>
          ))}
        </>
      )}
    </>
  );
}

export default App;
