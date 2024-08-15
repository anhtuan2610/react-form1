import { useState } from "react";
// import useDidMount from "../../hooks/useDidMount";
import useFirstMountState from "../../hooks/useFirstMountState";
// import useUnMount from "../../hooks/useUnMount";

export default function TestHook() {
  // -------- did mount --------
  //   const { products } = useDidMount();
  //   return (
  //     <div>
  //       {products?.map((p) => {
  //         return <div>{p.title}</div>;
  //       })}
  //     </div>
  //   );
  // -------- un mount --------
  // useUnMount();
  // -------- is first render --------
  const [isBool, setBool] = useState(true);
  console.log(useFirstMountState());
  return (
    <div>
      <button
        onClick={() => {
          setBool(!isBool);
        }}
      >
        Click
      </button>
    </div>
  );
}
