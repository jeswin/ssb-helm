import { ipcRenderer } from "electron";
import * as React from "react";
import * as ReactDOM from "react-dom";
import AddNewNetwork from "./components/networks/AddNewNetwork";
import { Router, navigateTo } from "sailboat";

// const Link = (props: any) => {
//   console.log(props);
//   return (
//     <a href="#" onClick={() => navigateTo(props.href)}>
//       {props.children}
//     </a>
//   );
// };

// const HomePage = (props: any) => (
//   <div>
//     <p>
//       <Link href="/sum(10,20)">Sum of 10 and 20</Link>
//     </p>
//   </div>
// );

// const Sum = (props: any) => <div>Sum is {props.a + props.b}</div>;

ipcRenderer.on("loadUrl", (e: any, data: any) => {
  console.log(data);
  navigateTo(data.url);
})

/*
  By default load nothing.
  This is going to be hidden anyway.
*/
const myApp = {
  index: <div>Home</div>,
  addNewNetwork: <AddNewNetwork />
  //sum: (a: number, b: number) => <Sum a={a} b={b} />
};

ReactDOM.render(Router(myApp), document.getElementById("container"));
navigateTo("/");


