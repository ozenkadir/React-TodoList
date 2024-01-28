import './CSS/TodoItems.css'
import tick from './Assets/tick.png'
import not_tick from './Assets/not_tick.png'
import cross from './Assets/cross.png'

const TodoItems = ({no,display,text,setTodos}) => {

    const deleteTodo = (no) =>{
        let data = JSON.parse(localStorage.getItem("todos"));
        data = data.filter((todo) => todo.no!==no);
        setTodos(data);
    }

const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    for(let i = 0;i < data.length;i++)
    {
        if(data[i].no===no) {
            if (data[i].display===""){
                data[i].display = "line-through";
            }
            else
            {
                data[i].display = "";

            }
            break;
        }
    }
    setTodos(data);
}
const truncatedText = text.length > 50 ? `${text.substring(0, 52)}...` : text;

  return (
    <div>
    <div className='todoitems'>
        <div className={`todoitems-container ${display}`} onClick={() => {toggle(no)}}>
            {display === "" ? <img className='img' src={not_tick} alt="" />:<img className='img' src={tick} alt="" />}
            
            <div className="todoitems-text">{truncatedText}</div>
        </div>
        <img  className='todoitems-cross-icon' onClick={() =>{deleteTodo(no)}} src={cross} alt="" /> 
    </div>
    <div className="bottom-line"></div>
    </div>
  )
}

export default TodoItems
