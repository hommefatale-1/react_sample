
import { useState, useEffectm, useRef } from 'react';

function Main(props) {
    let list = [];
    let [contents, setContents] = useState("");
    console.log(props.list);
    for (let i = 0; i < props.list.length; i++) {
        let item = props.list[i];
        list.push(
            <li key={item.No}><a href="#" onClick={() => {
                props.onContents(props.list[i].contents);
                setContents(props.list[i].contents);
            }}>{item.subject}</a>
                {item.contents == contents && <div>{contents}</div>}
            </li>
        )
    }
    return <div id="main">
        {list}
    </div>
};
export default Main;