import { cube } from './common/main.js' ;

console.log('The print.js module has loaded! See the network tab in dev tools...');

export default () => {
    $('div').css('backgroundColor','red') ;
    console.log(cube(10)) ;
    console.log('Button Clicked: Here\'s "some text"!');
}