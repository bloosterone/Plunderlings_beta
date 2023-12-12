import { CountUp } from './countUp.min.js';

const options = {
      duration: 6,
      separator: '.',
    enableScrollSpy:true
    };
    const options2 = {
          duration: 9,
          separator: '.',
        enableScrollSpy:true
        };
    let demo = new CountUp('counter', 1100, options);
    if (!demo.error) {
      demo.start();
    } else {
      console.error(demo.error);
    }
    let demo2 = new CountUp('counter2', 9107, options);
    if (!demo2.error) {
      demo2.start();
    } else {
      console.error(demo2.error);
    }
    let demo3 = new CountUp('counter3', 1129, options);
    if (!demo3.error) {
      demo3.start();
    } else {
      console.error(demo3.error);
    }
    let demo4= new CountUp('counter4', 21, options2);
    if (!demo3.error) {
      demo3.start();
    } else {
      console.error(demo3.error);
    }