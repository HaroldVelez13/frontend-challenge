export default function Button({type="button", title="",color="purple",icon,...props}){
    return (
        <button
            className={`text-${color}-500 bg-transparent border border-solid border-${color}-500
            hover:bg-${color}-500 hover:text-white active:bg-${color}-600
            font-bold uppercase text-xs px-4 py-2 rounded outline-none
            focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
            type={type}
            {...props}
            >
            {title}
            {props?.children?props.children:null}
        </button>
    )
}