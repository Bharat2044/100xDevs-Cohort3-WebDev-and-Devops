import { Button } from "./Buttons";
import { useRef, useState } from "react";

// 1, 2, 3, 6, 10
export function Otp({ number }) {
    const ref = useRef(Array(number).fill(0));
    const [values, setValues] = useState(Array(number).fill(""))

    const [disabled, setDisabled] = useState(true);

    return <div className="flex justify-center">
        
        {Array(number).fill(1).map((x, index) => <SubOtpBox reference={e => ref.current[index] = e} key={index} onDone={() => {
            
            if (index + 1 >= number) {
                return
            }
            ref.current[index + 1].focus();
        }} goBack={() => {
            if (index == 0) {
                return
            }
            ref.current[index - 1].focus();
        }} />)}

        <br />
        <Button disabled={disabled}>Sign up</Button>
    </div>
}

function SubOtpBox({
    reference, onDone, goBack
}) {
    const [inputBoxVal, setInputBoxVal] = useState("");

    return <div>
        <input value={inputBoxVal} ref={reference} onKeyUp={(e) => {
            if (e.key == "Backspace") {
                goBack()
            }
        }} onChange={(e) => {
            const val = e.target.value

            if (val == "1" || val == "2" || val == "3" || val == "4" || val == "5" || val == "6" || val == "7" || val == "8" || val  == "9") {
                setInputBoxVal(val);
                onDone()
            } else {

            }
        }} type="text" className="m-1 w-[40px] h-[50px] rounded-xl bg-blue-500 outline-none px-4 text-white"></input>
    </div>
}