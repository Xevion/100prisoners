# problems

I encountered many issues while getting this project working, here is a list.

## Rendering

- The SVGs initially were drawn, exported and then refined into a React-friendly component.
  - Getting them to scale and look good at different sizes, and reduce static whitespace within the SVG.
  - Antialiasing causing gaps between the path shapes.
  - Rendering text in an isometric form on top of the box.
  - Getting the box to translate on hover without glitching, while maintaining a non-pointer gap between boxes.
  - Placing text underneath the box in the right position.