import { useState } from "react";
import axios from "axios";
import dividerDesktop from "./assets/pattern-divider-desktop.svg";
import dividerMobile from "./assets/pattern-divider-mobile.svg";
import dice from "./assets/icon-dice.svg";

function App() {
  const [randomQuote, setRandomQuote] = useState("");
  const [id, setId] = useState("");

  async function getRandomQuote() {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      setRandomQuote(response.data.slip.advice);
      setId(response.data.slip.id);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="bg-[#1f2732] h-screen flex justify-center items-center px-5">
      <div className="bg-[#313a49] max-w-[550px] min-h-[300px] rounded-[18px] flex flex-col justify-center items-center gap-5 py-4 px-10 relative">
        <h5 className="text-[#53ffab] text-[14px] tracking-[2px] font-semibold">
          ADVICE #{id}
        </h5>
        <p className="text-white text-[26px] font-bold text-center ">
          {randomQuote
            ? randomQuote
            : "It is easy to sit up and take notice, what's difficult is getting up and taking action. "}
        </p>
        <img
          src={dividerDesktop}
          alt="divider"
          className="hidden lg:block mt-[10px] mb-[10px]"
        />
        <img
          src={dividerMobile}
          alt="divider"
          className="block lg:hidden mt-[10px] mb-[40px] lg:mb-[10px]"
        />
        <div
          className="w-[60px] h-[60px] rounded-full bg-[#53ffab] flex items-center justify-center z-[50] absolute bottom-[-30px] cursor-pointer glow"
          onClick={() => getRandomQuote()}
        >
          <img src={dice} alt="dice" />
        </div>
      </div>
    </main>
  );
}

export default App;
