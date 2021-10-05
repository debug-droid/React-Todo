import React from 'react';
import Trash from '../trash.png';
import Done from '../done.png'; 
import Undone from '../undone.png';
import Card from './Card'; 

function DoneImg(props){

    if(props.done){
        return <img src={Done} alt="check"></img>
    } else {
        return <img src={Undone} alt="desfeito"></img>
    }
}


function ListItem(props) {

    return(<li>
                <Card className={props.item.done ? "done item" : "item"}>
                {props.item.text}
                <div>
                    <button onClick={ () => {props.onDone(props.item)} }><DoneImg done={props.item.done}></DoneImg></button>
                    <button onClick={ ()=>{props.onItemDeleted(props.item)} }><img src={Trash} alt="lata de lixo"></img></button>
                </div>
                </Card>
                </li>)
}

export default ListItem;