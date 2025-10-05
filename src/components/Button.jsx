function Button(props){

    return (
        <button o nClick={props.onClick} className="p-2 bg-slate-400 text-white rounded-md">
            {props.icon}
        </button>)
}
export default Button