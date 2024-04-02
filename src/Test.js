
  import {useState, useEffect } from 'react';
  import './App.css';
  function Head(props){
      return <div style={{color : 'blue', fontSize : '30px'}} onClick={()=>{
                  var title = "";
                  if(props.title == "React Hello"){
                      title = "React Hi";
                  } else {
                      title = "React Hello";
                  }
                  props.onHeader(title);
              }}><a href="#">{props.title}</a>
              </div>
  }
  function Body(props){
      var list = [];
      for(let i=0; i<props.boardList.length; i++){
          let item = props.boardList[i];
          list.push(<li key={item.boardNo}>
                      <a href="#" onClick={()=>{
                          props.onBoard(item.contents);
                      }}>{item.title}</a>
                  </li>);
      }
      return <div>{list}</div>
  }
  function Footer(props){
      return <div style={{color : 'blue', fontSize : '30px'}}>
                  {props.footer}
              </div>
  }
  
  function Test(){
      var [title, setTitle] = useState("React Hello");
      var [contents, setCont] = useState("");
      var [footer, setFooter] = useState("React Footer");
      var [boardList, setBoardList] = useState([]);
  
      useEffect(() => {
          async function fetchBoardList() {
            try {
              const response = await fetch(`http://localhost:4000/boardList.dox`);
              const jsonData = await response.json();
              setBoardList(jsonData);
            } catch (error) {
              console.error("에러!");
            }
          }
          fetchBoardList();
        }, []);
      
      return (
          <div>
              <Head title={title} onHeader={(title)=>{
                  setTitle(title);
              }}></Head>
              <Body boardList={boardList} onBoard={(contents)=>{
                  setCont(contents);
              }}></Body>
              <div className="contents">{contents}</div>
              <Footer footer={footer}></Footer>
          </div>
      );
  }
  export default Test;