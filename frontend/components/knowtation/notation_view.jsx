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

  render() {
    return (
      <div className='notation-view-container'>
        <canvas
          id='canvas'
          className='notation-view'
          onClick={ this.handleCanvasClick }
        />
      </div>
    );
  }

  // event handlers

  handleCanvasClick(e) {
    const { knowtation, createSyncPoint } = this.knowtation;
    const { canvas } = knowtation;
    const pos = this.getMousePos(canvas, e);
    createSyncPoint({ pos: pos, time: 0});
  }

  updateCanvas(e) {
    const { knowtation } = this.props;
    this.draw(knowtation);
  }

  // helpers

  getMousePos(canvas, e) {
    const rectangle = canvas.getBoundingClientRect();
    return { x: e.clientX - rectangle.left, y: e.clientY - rectangle.top };
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
      // 33 refresh rate ~ 30 frames per second
      window.canvasUpdater = setInterval(this.updateCanvas, 33);
    };
    image.src = knowtation.notationImageUrl;
  }

  draw(knowtation) {
    const { ctx, img, duration, currentTime } = knowtation;

    ctx.drawImage(img, 0, 0, img.width, img.height);
  }
}



export default NotationView;
