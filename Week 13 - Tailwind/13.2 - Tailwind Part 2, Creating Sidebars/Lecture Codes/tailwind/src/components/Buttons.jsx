
export const Button = ({
    disabled,
    children,
    onClick,
    variant
}) => {
    // clsx, cx
    return <span onClick={onClick} className={`rounded-2xl text-4xl px-32 py-8 text-white cursor-pointer ${disabled ? "bg-blue-200" : "bg-green-400"}`}>
        {children}
    </span>
}