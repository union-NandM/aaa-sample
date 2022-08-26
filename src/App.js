import { useState } from "react";
import { Textarea } from "./components/Textarea";
import { AAA } from "./components/AAA";

function App() {
  const [text, setText] = useState(
    `-
@@@
  -
@@@
    -
@@@
          -
@@@
              -
@@@
               -
@@@
              -
@@@
          -
@@@
    -
@@@
  -
@@@
-
@@@
  -
@@@
    -
@@@
          -
@@@
              -
@@@
               -
@@@
              -
@@@
          -
@@@
    -
@@@
  -
@@@
-
@@@
-
@@@
\\
@@@
|
@@@
/
@@@
-
@@@
\\
@@@
|
@@@
/
@@@
-
@@@
\\
@@@
|
@@@
|
@@@
|
@@@
|
@@@
ｗ|
@@@
わ|
@@@
わｇ|
@@@
わが|
@@@
わがｈ|
@@@
わがは|
@@@
わがはい|
@@@
吾輩|
@@@
吾輩ｈ|
@@@
吾輩は| 
@@@
吾輩はｎ|
@@@
吾輩はね|
@@@
吾輩はねk|
@@@
吾輩はねこ|
@@@
吾輩は猫|
@@@
吾輩は猫ｄ|
@@@
吾輩は猫で|
@@@
吾輩は猫であ|
@@@
吾輩は猫であｒ|
@@@
吾輩は猫である|
@@@
吾輩は猫である。|
@@@
吾輩は猫である。|
@@@
吾輩は猫である。|
@@@
吾輩は猫である。|
@@@
吾輩は猫である|
@@@
吾輩は猫であ|
@@@
吾輩は猫で|
@@@
吾輩は猫|
@@@
吾輩は|
@@@
吾輩|
@@@
吾|
@@@
|
@@@
|
@@@
/
@@@
-
`
  );
  const [aaaSrc, setAaaSrc] = useState("");

  const makeAAA = () => {
    setAaaSrc(text);
  };
  return (
    <div className="w-full max-w-xl m-auto px-3">
      <div className="h-10"></div>
      <h1 className="text-2xl text-center">AAA的なやつ</h1>
      <p className="text-right text-gray-500 text-xs">
        ※ AAA: アニメーションアスキーアート
      </p>
      <div className="h-20 invisible"></div>
      <Textarea setText={setText} text={text} />
      <div className="h-10 invisible"></div>
      <button
        className="bg-blue-500 text-white rounded py-2 px-4 block m-auto shadow-lg"
        onClick={makeAAA}
      >
        作成
      </button>
      <div className="h-10"></div>
      <AAA aaaSrc={aaaSrc} />
    </div>
  );
}

export default App;
