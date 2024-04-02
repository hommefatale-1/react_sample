import { useState, useEffect, useRef } from 'react';
import Header from './component/Header.js';
import Main from './component/Main.js';
import Footer from './component/Footer.js';



function Review() {
    let [boardList, setBoardList] = useState([]);
   
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
    
    return <div>
        <Header title="The bed is my stage" onTitle={() => { alert("네이버"); }}></Header>
        <Header title="The bed is my stage" onTitle={() => { alert("카카오"); }}></Header>
        {/* <Main list={list} onContents={(contents) => { alert(contents);}}></Main> */}
        <Footer footer="Nobody can stop me motel" onFooter={() => { alert("냐옹"); }}></Footer>
    </div>
};
export default Review;