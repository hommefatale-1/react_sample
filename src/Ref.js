import {useState, useEffectm, useRef } from 'react';

function Ref(){
    let [stateNum, setNum] = useState(1);
    let refNum = useRef(1);
    let letNum = 1;
    
    const refNumAdd = () => {
        refNum.current +=1;
        console.log("refNum: ",refNum.current);
    }
    const letNumAdd = () => {
        letNum += 1;
        console.log("letNum",letNum);
    }
    const stateNumAdd = () => {
        setNum(stateNum + 1);
        console.log("setNum",stateNum.current);
    }
    
    //let str = useRef("안녕");
    //console.log(setNum);
    return <div>
        {refNum.current}
        <button onClick={refNumAdd}>ref증가</button>
        <br></br>
        {letNum}
        <button onClick={letNumAdd}>let증가</button>
        <br></br>
        {stateNum}
        <button onClick={stateNumAdd}>state증가</button>
    </div>
}
export default Ref;