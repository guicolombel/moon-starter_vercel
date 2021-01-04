import gsap from 'gsap';
import SplitText from '../libs/SplitText.min';

export default function(){
  gsap.registerPlugin(SplitText);
  const splitChild = new SplitText(".split", {type: 'lines', linesClass: "split-c"})
  const splitParent = new SplitText(".split", {type: 'lines', linesClass: "split-p"})
  gsap.set(splitParent, {y: -100})
}