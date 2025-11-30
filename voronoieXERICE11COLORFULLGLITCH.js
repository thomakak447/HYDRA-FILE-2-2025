

voronoi(3,0.5,0.1).blend(noise(3,0.5,0.1).add(shape(100,0.5,0)).pixelate(3,3).thresh(-0.002,0.0005).mult(noise(24,0.002,-12.5)).modulatePixelate(noise(3 ,1).pixelate(3,3,0.5,-0.005)))
  //.rotate(2.5,-0.025,0.2) //MODS
  .blend(src(o0).rotate( () => time%0.0005 ))
         .invert(-0.165)//.rotate(-5,-0.025,0.002))  //MOD-0.65
  .diff(src(o0)
       .thresh(0.009,0.66) //change me
       .posterize([22,35,16,0.035],12.5).colorama([-80,0.02,0.25,0.0005],0.001).scrollX(() => Math.sin(time * 0.00005) * 0.002)
       .scrollY(() => Math.cos(time * 0.05) * 0.002))

  .out(o0)