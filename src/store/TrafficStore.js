import { makeAutoObservable } from "mobx";
import { configure } from "mobx";
configure({
  enforceActions: "never",
});

class Traffic {
  counter = 0;
  direction = "";
  timerCounter = 0;

  constructor() {
    makeAutoObservable(this);
  }

  decrement() {
    this.counter = this.counter - 1;
  }

  addSelector() {
    fetch(`http://localhost:3001/current_section/1`)
      .then((response) => response.json())
      .then((json) => {
        this.counter = json.time;
        this.direction = json.direction;
        this.timerCounter = this.counter;
      });
  }
}

export default new Traffic();
