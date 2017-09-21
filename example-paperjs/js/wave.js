/**
 * Class for each wave.
 */
class Wave {
  /**
   * Constructor
   */
  constructor() {
    // The amount of segment points we want to create:
    this.amount = 30;
    // The maximum height of the wave:
    this.height = 60;
    // y offset
    this.offsetY = 100;
    // Frequency (number of visible wavelets)
    this.frequency = 3;
    // Create a new path and style it:
    this.path = new paper.Path(
        {strokeColor: 'black', strokeWidth: 25, strokeCap: 'square'});
    // Add 5 segment points to the path spread out over the width of the view
    for (let i = 0; i <= this.amount; i++) {
      let pt = new paper.Point(i / this.amount * paper.view.size.width, 100);
      this.path.add(pt);
    }
  }

  /**
   * Updates the animation of the wave using the event.time property
   * @param  {TimeEvent} event Time Event from paperjs
   */
  update(event) {
    // Loop through the segments of the path:
    for (let i = 0; i <= this.amount; i++) {
      let segment = this.path.segments[i];
      // A cylic value between -1 and 1
      let sinus = Math.sin(event.time * 3 + i * this.frequency);
      // Change the y position of the segment point:
      segment.point.y = sinus * this.height + this.offsetY;
    }
  }
}
