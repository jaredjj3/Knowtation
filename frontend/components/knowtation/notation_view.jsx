import React from 'react';
import Canvas from 'react-canvas-component';

class NotationView extends React.Component {

  componentWillReceiveProps(newProps) {
    const { knowtation } = newProps;
    const image = new Image();
    image.src = knowtation.notationImageUrl;
    console.log(knowtation.notationImageUrl);
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    image.onload = () => {
      context.drawImage(image,
        0, 0, image.width, image.height
      );
    };
  }

  render() {
    return (
      <div className='notation-view-container'>
        <canvas id='canvas' className='notation-view' />
      </div>
    );
  }
}

export default NotationView;
