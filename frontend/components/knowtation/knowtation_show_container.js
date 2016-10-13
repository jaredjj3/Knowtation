import { connect } from 'react-redux';
import KnowtationShow from './knowtation_show';
import {
  setElement,
  requestKnowtation,
  toggleAttribute,
  updateKnowtation,
  setAttribute,
  updatePosition
} from '../../actions/knowtation_actions';

const mapStateToProps = state => ({
  knowtation: state.knowtation
});

const mapDispatchToProps = dispatch => ({
  setElement: (element, elementName) => dispatch(setElement(element, elementName)),
  updateKnowtation: knowtation => dispatch(updateKnowtation(knowtation)),
  requestKnowtation: id => dispatch(requestKnowtation(id)),
  toggleAttribute: attribute => dispatch(toggleAttribute(attribute)),
  setAttribute: (attribute, value) => dispatch(setAttribute(attribute, value)),
  updatePosition: () => dispatch(updatePosition())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KnowtationShow);
