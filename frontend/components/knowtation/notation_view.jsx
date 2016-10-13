import React from 'react';
import { toTimeString } from '../../util/time_string';

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

    const { setAttribute } = this.props;
    setAttribute('ctx', null);
    setAttribute('videoElement', null);
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
          width='900px'
          onClick={ this.handleCanvasClick }
        />
      </div>
    );
  }

  // event handlers

  handleCanvasClick(e) {
    const { knowtation, createSyncPoint, deleteSyncPoint } = this.props;
    const { canvas, videoElement, currentTime } = knowtation;
    const pos = this.getMousePos(canvas, e);

    // check to see if there is a syncPoint within 10 px
    const existingSyncPoint = this.checkSyncPoints(pos);

    if (existingSyncPoint) {
      deleteSyncPoint(existingSyncPoint.id);
    } else {
      this.focusTimeInput();
      this.askForTime();
      createSyncPoint({
        pos: pos,
        id: knowtation.syncPointId,
        time: currentTime // placeholder
      });
      videoElement.pauseVideo();
    }
  }

  updateCanvas() {
    const { knowtation } = this.props;
    const { ctx, img } = knowtation;
    ctx.clearRect(0, 0, img.width, img.height);
    this.drawNotation(knowtation);
    this.drawSyncPoints(knowtation);
  }

  // helpers

  focusTimeInput() {
    setTimeout(() => {
      const timeInputElement = document.getElementById('time-input');
      if (timeInputElement) {
        timeInputElement.focus();
      }
    }, 80);
  }

  askForTime() {
    const { timeModalOn, toggleModal } = this.props;

    if (!timeModalOn) {
      toggleModal('time');
    }
  }

  checkSyncPoints(pos) {
    const { knowtation } = this.props;
    const { scrollInstructions } = knowtation;

    for (let i = 0; i < scrollInstructions.length; i++) {
      const syncPoint = scrollInstructions[i];
      const xDist = Math.abs(parseInt(syncPoint.pos.x) - parseInt(pos.x));
      if (xDist < 10) {
        return syncPoint;
      }
    }
    // if no matching sync point is found
    return null;
  }

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
    const { ctx, destination, scrollInstructions } = knowtation;
    const X_OFFSET = 5;
    const X_TEXT_OFFSET = 15;

    for (let i = 0; i < scrollInstructions.length; i++) {
      // for lightblue rect
      const syncPoint = scrollInstructions[i];
      const x = syncPoint.pos.x - X_OFFSET;
      const y = 0;
      const dW = 10;
      const dH = destination.height;
      const color = 'rgba(100, 255, 255, 0.3)';

      // for text
      const yText = 10;
      const xTextTime = x - X_TEXT_OFFSET;
      const textTime = `${toTimeString(syncPoint.time)}`;

      ctx.fillStyle = color;
      ctx.fillRect(x, y, dW, dH);
      ctx.fillStyle = 'black';
      ctx.font = '9px sans-serif';
      ctx.fillText(textTime, xTextTime, yText);
    }
  }

}



export default NotationView;
