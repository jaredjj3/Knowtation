import React from 'react';
import { toTimeString } from '../../util/time_string';

class SyncPointListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: toTimeString(this.props.syncPoint.time) };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    const { updateSyncPoint, syncPoint } = this.props;
    const time = e.target.value.replace(/\s/g, '');

    const isNumeric = value => Number(parseFloat(value)) == value;

    if (isNumeric(time)) {
      this.setState({ value: time });
      syncPoint.time = parseFloat(time);
      updateSyncPoint(syncPoint);
    } else {
      this.setState({ value: time.slice(0, time.length - 1)});
    }

  }

  render() {
    return(
      <input
        value={ this.state.value }
        onChange={ this.onChangeHandler }
        >
      </input>
    );
  }
}

export default SyncPointListItem;
