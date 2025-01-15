const Input = ({
    onClick,
    type,
    placeholder
}) => {
    // clsx, cx
    return <div onClick={onClick} className={`text-2xl p-2 text-white bg-blue-500 rounded-2xl`}>
        <input type={type} placeholder={placeholder} className="bg-blue-500 outline-none" />
    </div>
}

export default Input;