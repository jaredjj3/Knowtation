import { connect } from 'react-redux';
import KnowtationPreview from './knowtation_preview';
import {
  setElement,
  requestKnowtation
} from '../../actions/knowtation_actions';

const mapStateToProps = state => ({
  knowtation: state.knowtation
});

const mapDispatchToProps = dispatch => ({
  setElement: (element, elementName) => dispatch(setElement(element, elementName)),
  requestKnowtation: id => dispatch(requestKnowtation(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KnowtationPreview);
