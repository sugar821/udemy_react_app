import React, { useState } from "react";

function App() {
  // 配列の１個目がカウント、２個目は１個目を操作する権限のある関数、慣習的にsetHogeとする事が多い
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)
  const double = () => setCount(count * 2)
  const divede = () => setCount(div =>{
    if (div !== 0){
      return div / 2 
    }else{
      alert('dont divide 0')
      return div
    }
  })

  // reactの仕様上、retun内に複数のトップレベルタグを置けない
  // <>でトップレベルを設定すれば解決する、divタグで囲っても良いが不要なdivタグが増えるので非推奨 
  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={double}>x2</button>
        <button onClick={divede}>/1</button>
      </div>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}

export default App;
