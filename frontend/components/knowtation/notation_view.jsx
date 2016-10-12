import React from 'react';
import Canvas from 'react-canvas-component';

class NotationView extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillReceiveProps(newProps) {
    const { knowtation } = newProps;
    this.draw(knowtation);
  }

  render() {
    return (
      <div className='notation-view-container'>
        <canvas id='canvas' className='notation-view' />
      </div>
    );
  }

  // helpers

  draw(knowtation) {
    const ctx = document.getElementById('canvas').getContext('2d');
    const img = new Image ();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, img.width, img.width, 0, 0, 500, 500);
    };
    img.src = knowtation.notationImageUrl;
  }
}

export default NotationView;
