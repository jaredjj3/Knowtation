import React from 'react';
import Canvas from 'react-canvas-component';

class NotationView extends React.Component {
  constructor(props) {
    super(props);

    this.updateCanvas = this.updateCanvas.bind(this);
    this.handleCanvasClick = this.handleCanvasClick.bind(this);
    this.initializeNotation = this.initializeNotation.bind(this);
  }

  componentWillReceiveProps(newProps) {
    const { knowtation } = newProps;

    // only check context since it loads right away
    if (knowtation.id !== null && knowtation.ctx === null) {
      this.initializeNotation(knowtation);
    }
  }

  componentWillUnmount() {
    if (window.canvasUpdater) {
      clearInterval(window.canvasUpdater);
    }
  }

  render() {
    const { knowtation } = this.props;
    let destinationWidth = 900;
    if (knowtation.destination) {
      destinationWidth = knowtation.destination.width;
    }

    return (
      <div
        id='canvas-container'
        className='notation-view-container'
      >
        <canvas
          id='canvas'
          className='notation-view'
          height='285px'
          width={ destinationWidth }
          onClick={ this.handleCanvasClick }
        />
      </div>
    );
  }

  // event handlers

  handleCanvasClick(e) {
    const { knowtation, createSyncPoint } = this.props;
    const { canvas } = knowtation;
    const pos = this.getMousePos(canvas, e);

    // check to see if there is a syncPoint within 1 px
    createSyncPoint({
      pos: pos,
      time: 0,
      id: knowtation.syncPointId
    });
  }

  updateCanvas(e) {
    const { knowtation } = this.props;
    const { ctx, img } = knowtation;
    ctx.clearRect(0, 0, img.width, img.height);
    this.drawNotation(knowtation);
    this.drawSyncPoints(knowtation);
  }

  // helpers

  getMousePos(canvas, e) {
    const rect = canvas.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }

  initializeNotation(knowtation) {
    const { setAttribute } = this.props;
    const canvas = document.getElementById('canvas');
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

  drawNotation(knowtation) {
    const { ctx, img, source, destination, canvasContainer } = knowtation;

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

  drawSyncPoints(knowtation) {
    const { ctx, img, scrollInstructions } = knowtation;

    for (var i = 0; i < scrollInstructions.length; i++) {
      const x = scrollInstructions[i].pos.x;
      const y = scrollInstructions[i].pos.y;

      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 285);
      ctx.strokeStyle = '#ff0000';
      ctx.stroke();
    }
  }
}



export default NotationView;
