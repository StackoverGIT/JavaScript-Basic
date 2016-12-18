//'use strict';

var bar = "global";

function foo() {
  console.log( this.bar );
}


var obj1 = {
  bar: "obj1",
  foo
};


var obj2 = {
  bar: "obj2"
};

// --------

foo();              // "global"
obj1.foo();         // "obj1"
foo.call( obj2 );   // "obj2"
new foo();          // undefined