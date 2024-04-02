import {useState, useEffect } from 'react';
import './App.css';
import { result, set } from 'lodash';


function Effect(){
    
    var [cnt, setCnt] = useState(1);
    let [userId, setUserId] = useState("");
    let [result,setResult] = useState("");


    useEffect(() => {
        async function idCheck() {
          try {
            const response = await fetch(`http://localhost:4000/idCheck.dox?userId=${userId}`);
            const jsonData = await response.json();
            setResult(jsonData.result);
            if(jsonData.result == "success"){
                console.log("중복없음?");
            }else{
                console.log("중복ㅇㅇ");
            }
          } catch (error) {
            console.error("에러!");
          }
        }
        idCheck();
      },[userId]);

    const fnAddCnt = ()=>{
        setCnt(cnt + 1);
    }

    const fnIdCheck = (e) =>{
        setUserId(e.target.value);      
    }
    useEffect(() => {
        console.log("Array@",cnt);
    },[cnt])
    return <div>
        <div>{cnt}</div>
        <button onClick={fnAddCnt}>증가!</button>
        <div>
            <span>아이디: </span>
            <input type='text' onChange={fnIdCheck} value={userId}></input>
            {userId !== "" ? <div>{result}</div> : <div>아이디를 입력해 주세요</div>}
        </div>
    </div>
}
export default Effect;