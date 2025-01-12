import Input from "./components/Input";
import Button from "./components/Button";
import Otp from "./components/Otp";

function App() {
  return (
    <div className="h-screen bg-blue-700 flex flex-col items-center justify-center gap-8">

      {/* <Input type="text" placeholder="Username" />

      <Button disabled={false}>Sign up</Button> */}

      <Otp number={6} />
    </div>
  )
}

export default App;
