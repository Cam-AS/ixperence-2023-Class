export class Task {
  constructor(id, name, complete) {
    this.id = id;
    this.name = name;
    this.complete = complete;
  }

  static fromJSON(json) {
    return new Task(json.id, json.name, json.complete);
  }
}
