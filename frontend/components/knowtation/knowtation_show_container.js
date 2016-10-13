import { connect } from 'react-redux';
import KnowtationShow from './knowtation_show';
import {
  setElement,
  requestKnowtation,
  toggleAttribute,
  updateKnowtation
} from '../../actions/knowtation_actions';

const mapStateToProps = state => ({
  knowtation: state.knowtation
});

const mapDispatchToProps = dispatch => ({
  setElement: (element, elementName) => dispatch(setElement(element, elementName)),
  updateKnowtation: knowtation => dispatch(updateKnowtation(knowtation)),
  requestKnowtation: id => dispatch(requestKnowtation(id)),
  toggleAttribute: attribute => dispatch(toggleAttribute(attribute))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KnowtationShow);
