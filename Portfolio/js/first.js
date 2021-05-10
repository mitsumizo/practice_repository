bubbly({
    colorStart: '#d5d5d5',
    colorStop: '#d5d5d5',
    bubbles:400,
    blur:1,
    compose: 'source-over',
    bubbleFunc:() => `hsla(${200 + Math.random() * 50}, 100%, 50%, .3)`,
    angleFunc:() => Math.random() > 0.5 ? Math.PI : 2 * Math.PI,
    velocityFunc:() => 1 + Math.random() * 10,
    radiusFunc:() => Math.random() * 5
  });

  