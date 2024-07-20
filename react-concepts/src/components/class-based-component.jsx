import { Component } from "react";

class ClassBasedComponent extends Component {
  render() {
    return (
      <div>
        <button className="m-5 bg-red-800 text-black font-bold p-2 rounded-xl cursor-pointer">
          Class-Based-Component
        </button>
      </div>
    );
  }
}

export default ClassBasedComponent;
