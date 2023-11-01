class ExampleClass {
    private attribute1: number;
    private attribute2: number;
  
    constructor(attribute1: number, attribute2: number) {
      this.attribute1 = attribute1;
      this.attribute2 = attribute2;
    }
  
    getAttribute1() {
      return this.attribute1;
    }
  
    setAttribute1(value) {
      this.attribute1 = value;
    }
  
    getAttribute2() {
      return this.attribute2;
    }
  
    setAttribute2(value) {
      this.attribute2 = value;
    }
  }
  

  const myExample = new ExampleClass(3.14, 6.28);
  console.log(myExample.getAttribute1()); 
  console.log(myExample.getAttribute2()); 
  
  
  myExample.setAttribute1(2.71);
  myExample.setAttribute2(1.414);
  console.log(myExample.getAttribute1());
  console.log(myExample.getAttribute2()); 
  