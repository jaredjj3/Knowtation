import React from 'react';

class KnowtationShowNotationView extends React.Component {
  constructor(props) {
    super(props);

    this.isShowing = true;
    this.updateCanvas = this.updateCanvas.bind(this);
    this.calculatePosition = this.calculatePosition.bind(this);
    this.initializeNotation = this.initializeNotation.bind(this);
  }

  componentWillReceiveProps(newProps) {
    const { knowtation, isShowing } = newProps;
    // only check context since it loads right away
    if (knowtation.id && !knowtation.ctx) {
      setTimeout(() => this.initializeNotation(knowtation), 2000);
    }
  }

  componentWillUnmount() {
    this.isShowing = false;
  }

  render() {
    return(
      <div
        id='knowtation-show-canvas-container'
        className='knowtation-show-view-container'
      >
        <canvas
          id='show-canvas'
          className='notation-show-view'
          height='285px'
          width='900px'
        />
      </div>
    );
  }

  // helpers

  initializeNotation(knowtation) {
    const { setAttribute, toggleModal } = this.props;
    const canvas = document.getElementById('show-canvas');
    setAttribute('canvas', canvas);
    const context = canvas.getContext('2d');
    setAttribute('ctx', context);
    const image = new Image();
    // asynchronous
    image.onload = () => {
      setAttribute('img', image);
      const source = {
        width: image.width,
        height: image.height,
        ratio: (image.width / image.height),
        pos: { x: 0, y: 0 }
      };
      setAttribute('source', source);
      const DESTINATION_HEIGHT = 285; // container width, not canvas itself
      const destination = {
        width: (source.width * (DESTINATION_HEIGHT / source.height)),
        height: DESTINATION_HEIGHT,
        pos: { x: 0, y: 0 }
      };
      setAttribute('destination', destination);
      const scale = {
        x: (source.width / destination.width),
        y: (source.height / destination.height)
      };
      setAttribute('scale', scale);
      requestAnimationFrame(this.updateCanvas);
    };

    image.src = knowtation.notationImageUrl;
  }

  updateCanvas() {
    const { knowtation, updatePosition, updateTime } = this.props;
    const { ctx, img, videoElement } = knowtation;
    const destinationPosition = this.calculatePosition(knowtation);
    updatePosition(destinationPosition);
    ctx.clearRect(0, 0, img.width, img.height);
    this.drawNotation(knowtation);
    this.drawBlueRect(knowtation);
    if (this.isShowing) {
      requestAnimationFrame(this.updateCanvas);
    }
  }

  drawNotation(knowtation) {
    const { ctx, img, source, destination } = knowtation;

    // source attrs
    const sW = source.width;
    const sH = source.height;
    const sx = source.pos.x;
    const sy = source.pos.y;

    // destination attrs
    const dW = destination.width;
    const dH = destination.height;
    const dx = destination.pos.x;
    const dy = destination.pos.y;

    ctx.drawImage(
      img,
      sx, sy, sW, sH,
      dx, dy, dW, dH
    );
  }

  drawBlueRect(knowtation) {
    const { ctx, destination } = knowtation;

    const dW = 60;
    const dH = destination.height;
    const x = 450 - dW;
    const y = 0;
    const color = 'rgba(100, 255, 255, 0.3)';

    ctx.fillStyle = color;
    ctx.fillRect(x, y, dW, dH);
  }

  calculatePosition(knowtation) {
    const { scrollInstructions } = knowtation;
    const currentTime = knowtation.videoElement.getCurrentTime();
    // for loop that only goes to the seconds to last element
    for (let i = 0; i < scrollInstructions.length - 1; i++) {
      const syncPoint1 = scrollInstructions[i];
      const syncPoint2 = scrollInstructions[i + 1];
      const currentTimeIsBetween = this.isBetween(currentTime, syncPoint1.time, syncPoint2.time);
      if (currentTimeIsBetween) {
        const offset = knowtation.destination.width / 2;
        const x2 = syncPoint2.pos.x;
        const x1 = syncPoint1.pos.x;
        const t2 = syncPoint2.time;
        const t1 = syncPoint1.time;
        const t = currentTime;
        const vel = (x2 - x1) / (t2 - t1);
        const result = -450 + x1 + ((t - t1) * (x2 - x1) / (t2 - t1));
        return -result;
      }
    }
  }

  isBetween(probe, val1, val2) {
    return probe >= val1 && probe <= val2;
  }

}

export default KnowtationShowNotationView;
