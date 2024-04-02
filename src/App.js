import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Header(props) {
  return (
    <div id="header">
      <h1><a href='#' onClick={() => {
        props.onNaver();
      }}>{props.title}</a></h1>
    </div>
  );
}
function Menu(props) {
  var list = [];
  console.log(props.list);
  for (let i = 0; i < props.list.length; i++) {
    list.push(
      <li key={props.list[i].boardNo}><a href="#" id={props.list[i].userId} onClick={(e) => {
        //a태그에 #기능을 막음
        e.preventDefault();
        props.onUserId(e.target.id);
        //props.onUserId(props.list[i].userId);
      }}>{props.list[i].title}</a></li>
    );
  }
  return (
    <div id="menu">
      {list}
    </div>
  );
}
function Main(props) {
  return (
    <div id="main">
      <a href='#' onClick={() => {
        props.onDaum();
      }}>{props.contents}</a>
    </div>
  );
}

function App() {
  // let[kind, setkind] = useState("0");
  //let [text, setText] = useState("");
    let[kind, setKind] = useState("");
    let text = "";
  // let _kind = useState("1");
  // let kind = _kind[0];
  // let setKind = _kind[1];
  // console.log(kind);
  if(kind == "1"){
    text = "헤더";
  }else if(kind == "2"){
    text = "메뉴";
  }else if(kind == "3"){
    text = "메인";
  }
  // else{
  //   text = "";
  // }
  // if(kind == "1"){
  //   text = "1범";
  // }else{
  //   text = "2번"
  // }
  let list = [
    { boardNo: 1, title: "게시판1", userId: 'qwer1' },
    { boardNo: 2, title: "게시판2", userId: 'qwer2' },
    { boardNo: 3, title: "게시판3", userId: 'qwer3' }
  ];
  return (
    <div className="App">
      <Header title="Naver" onNaver={() => {
        setKind("1");
        // alert("네이버");
      }}></Header>
      {/* <Header title="네이버 메인" onNaver={(userId) => {
        window.location = "http://www.naver.com";
      }}></Header> */}
      <Menu list={list} onUserId={(userId) => {
        setKind("2");
        alert(userId);
      }}></Menu>
      <Main contents="다음 메인" onDaum={() => {
        //setkind("2");
        window.location = "https://www.daum.net";
        // console.log(kind);
      }}></Main>
      {text}
    </div>
  );
}

export default App;
