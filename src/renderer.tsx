import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, navigateTo } from "sailboat";

const Link = (props: any) => {
  console.log(props);
  return (
    <a href="#" onClick={() => navigateTo(props.href)}>
      {props.children}
    </a>
  );
};

const HomePage = (props: any) => (
  <div>
    <p>
      <Link href="/sum(10,20)">Sum of 10 and 20</Link>
    </p>
  </div>
);

const Sum = (props: any) => <div>Sum is {props.a + props.b}</div>;

const myApp = {
  index: <HomePage />,
  sum: (a: number, b: number) => <Sum a={a} b={b} />
};

console.log(__dirname, window.location.href);

ReactDOM.render(Router(myApp), document.getElementById("container"));
navigateTo("/index");
