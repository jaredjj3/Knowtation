import React from 'react';

class KnowtationShowNotationView extends React.Component {
  constructor(props) {
    super(props);

    this.updateCanvas = this.updateCanvas.bind(this);
    this.initializeNotation = this.initializeNotation.bind(this);
  }

  componentWillReceiveProps(newProps) {
    const { knowtation } = newProps;
    // only check context since it loads right away
    if (knowtation.id !== null && knowtation.ctx === null) {
      this.initializeNotation(knowtation);
    }
  }

  render() {
    const { knowtation } = this.props;

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
    const { setAttribute } = this.props;
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
      // 33 refresh rate ~ 30 frames per second
      window.canvasUpdater = setInterval(this.updateCanvas, 33);
    };

    image.src = knowtation.notationImageUrl;
  }

  updateCanvas() {
    const { knowtation, updatePosition } = this.props;
    const { ctx, img } = knowtation;
    ctx.clearRect(0, 0, img.width, img.height);
    updatePosition();
    this.drawNotation(knowtation);
    this.drawBlueRect(knowtation);
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

}

export default KnowtationShowNotationView;
