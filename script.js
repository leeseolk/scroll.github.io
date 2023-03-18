$(function () {// wait for document ready
  const itemSize = 4;
  const colors = ['red', 'green', 'blue', 'pink', 'gray'];
  const smController = new ScrollMagic.Controller();
  const wipeAnimation = new TimelineMax()
  // .panel.item-2
  .to('.slideContainer', 0.5, { z: -150 }).
  to('.slideContainer', 1, { x: '-25%' }).
  to('.slideContainer', 0.5, { z: 0 })
  // .panel.item-3
  .to('.slideContainer', 0.5, { z: -150, delay: 1 }).
  to('.slideContainer', 1, { x: '-50%' }).
  to('.slideContainer', 0.5, { z: 0 })
  // .panel.item-4
  .to('.slideContainer', 0.5, { z: -150, delay: 1 }).
  to('.slideContainer', 1, { x: '-75%' }).
  to('.slideContainer', 0.5, { z: 0 });

  new ScrollMagic.Scene({
    triggerElement: '.pinContainer',
    triggerHook: 'onLeave',
    duration: "500%" }).

  setPin('.pinContainer').
  setTween(wipeAnimation).
  addIndicators().
  addTo(smController);
  

  //change behaviour of controller to animate scroll instead of jump
  smController.scrollTo((newpos, options) => {
    TweenMax.to(window, options.duration, { scrollTo: { y: newpos }, ease: options.ease }, "-=.5");
  });
  $('.title > i').click(() => {
    smController.scrollTo('.footer', { duration: 2.8, ease: SlowMo.ease.config(0.3, 0.3, false) });
  });
  $('.footer > i').click(() => {
    smController.scrollTo(0, { duration: 2.8, ease: Power4.easeInOut });
  });

  Array(itemSize).fill().map((e, i) => i + 1).forEach((e, i) => {
    $(`.panel.item-${e}`).css({ 'background-color': colors[i] });
  });
});