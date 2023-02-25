import { useState } from "react";
import "./App.css";

const Header = () => {
  return (
    <div className="header">
      <h4>My Blog</h4>
    </div>
  );
};

const Modal = (prop) => {
  return (
    <div className="modal">
      <h4>{prop.title}</h4>
      <p>{prop.date}</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla ratione
        aspernatur totam culpa aperiam ipsum sint, laudantium quo et dolores
        voluptas rerum earum? Cupiditate dolorum officia doloremque alias sint
        eum.
      </p>
    </div>
  );
};

const App = () => {
  const [showModal, setShowModal] = useState(false);
  // 0, 1
  // "show", "hide"
  // true, false

  const [thumbsUp, setThumbsUp] = useState([0, 0, 0]);
  // const stateValue = useState(0);

  const [modalTitle, setModalTitle] = useState(null);
  const [modalDate, setModalDate] = useState(null);

  const onClickFunction = (e) => {
    console.log("onClickFunction", e.target);
    const splitted = e.target.id.split("_");
    const articleIdx = Number(splitted[1]) - 1;
    setModalTitle(articleDb[articleIdx].title);
    setModalDate(articleDb[articleIdx].date);
    setShowModal(!showModal);
  };

  const thumbsUpFunction = (e) => {
    console.log("thumbsUpFunction", e.target);
    const splitted = e.target.id.split("_");
    const thumbsUpIdx = Number(splitted[1]) - 1;
    let copy = [...thumbsUp];
    copy[thumbsUpIdx] = copy[thumbsUpIdx] + 1;
    setThumbsUp(copy);
  };

  const articleDb = [
    { num: 1, title: "글 제목이 여기 들어갑니다.", date: "2023-01-20" },
    { num: 2, title: "글 제목이 저기 들어갑니다.", date: "2023-01-22" },
    { num: 3, title: "글 제목이 거기 들어갑니다.", date: "2023-01-24" },
  ];

  return (
    <>
      <Header></Header>
      {articleDb.map((each, idx) => {
        return (
          <div className="article">
            <div className="wrap">
              <h5 id={"title_" + each.num} onClick={onClickFunction}>
                {each.title}
              </h5>
              <span
                id={"thumbsUp_" + each.num}
                className="thumbsUp"
                onClick={thumbsUpFunction}
              >
                👍{thumbsUp[idx]}
              </span>
            </div>
            <span className="date">{each.date}</span>
          </div>
        );
      })}
      {showModal === true ? (
        <Modal title={modalTitle} date={modalDate}></Modal>
      ) : null}
    </>
  );
};

export default App;
