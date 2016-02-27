class Message {
  constructor(public msg: string) { }
  sayHello() {
    return "<h1>" + this.msg + "</h1>";
  }
};

var greeter = new Message("Hello World!");
document.body.innerHTML = greeter.sayHello();
