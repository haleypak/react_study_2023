import { useState } from "react";
import "./App.css";

const Header = () => {
  return <div className="header">React Blog</div>;
};

const ArticleList = (prop) => {
  return (
    <div className="articleList">
      <div className="header">
        <span
          className="title"
          id={"title_" + prop.index}
          onClick={prop.callback}
        >
          {prop.db.title}
        </span>
        <span
          className="thumbsUp"
          id={"thumbsUp_" + prop.index}
          onClick={prop.callback3}
        >
          👍 {prop.db.thumbsUpcnt}
        </span>
      </div>
      <div className="body">
        <div className="contents">{prop.db.contents}</div>
        <div className="date">{prop.db.date}</div>
      </div>
      <button onClick={prop.callback2} id={"removeButton_" + prop.index}>
        글삭제
      </button>
    </div>
  );
};

const Article = (prop) => {
  return (
    <div className="article">
      <div className="title">{prop.db.title}</div>
      <div className="date">{prop.db.date}</div>
      <div className="contents">{prop.db.contents}</div>
    </div>
  );
};

let prevIdx;

const App = () => {
  const clickTitle = (e) => {
    const [garbage, indexAsText] = e.target.id.split("_");
    const index = Number(indexAsText);
    const targetDB = articleDb[index];
    const copied = { title: null, contents: null, date: null };
    for (const prop in copied) {
      copied[prop] = openArticle[prop];
    }
    for (const prop in copied) {
      copied[prop] = targetDB[prop];
    }
    setOpenArticle(copied);

    if (showArticle) {
      if (index === prevIdx) {
        toggleShowArticle(false);
      }
    } else {
      toggleShowArticle(true);
    }
    prevIdx = index;
  };

  const addPost = () => {
    const copied = [...articleDb];
    copied.unshift({
      title: input,
      thumbsUpcnt: 1,
      contents: "빈칸",
      date: "25-02-02",
    });
    setArtivleDb(copied);
  };
  const removeOnClick = (e) => {
    let idAsText = e.target.id;
    let [garbage, indexAsText] = idAsText.split("_");
    let index = Number(indexAsText);
    let copied = [...articleDb];
    copied.splice(index, 1);
    setArtivleDb(copied);
  };

  const thumbsUpCounter = (e) => {
    const [garbage, indexText] = e.target.id.split("_");
    const index = Number(indexText);
    const copied = [...articleDb];
    copied[index].thumbsUpcnt = copied[index].thumbsUpcnt + 1;
    setArtivleDb(copied);
  };

  const [showArticle, toggleShowArticle] = useState(false);
  const [openArticle, setOpenArticle] = useState({
    title: "안녕",
    contents: "반가워",
    date: "2025-02-05",
  });
  const [input, setInput] = useState("");

  const [articleDb, setArtivleDb] = useState([
    {
      title: "안녕하세요",
      thumbsUpcnt: 17,
      contents:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, tenetur, quisquam architecto exercitationem officia nihil odio ipsum beatae ab magnam sint quasi sapiente voluptatum ea aspernatur vero accusantium voluptatibus error?",
      date: "23-02-01",
    },
    {
      title: "지나갑니다",
      thumbsUpcnt: 17,
      contents:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti iste laudantium, optio, nihil inventore consectetur ducimus quisquam quo, quibusdam omnis porro facere deleniti nemo enim tempora esse quis excepturi velit!",
      date: "23-02-02",
    },
    {
      title: "수고하세요",
      thumbsUpcnt: 17,
      contents:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, voluptates placeat iste numquam hic veniam sunt debitis vel nobis omnis illo consectetur accusamus. Dicta, nesciunt repellat voluptatum magnam modi minima!",
      date: "23-02-03",
    },
  ]);

  return (
    <>
      <Header></Header>
      {articleDb.map((each, index) => {
        return (
          <ArticleList
            db={each}
            callback={clickTitle}
            callback2={removeOnClick}
            callback3={thumbsUpCounter}
            index={index}
          ></ArticleList>
        );
      })}
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
          console.log(input);
        }}
      />
      <button onClick={addPost}>글쓰기</button>
      {showArticle ? <Article db={openArticle}></Article> : null}
    </>
  );
};

export default App;
