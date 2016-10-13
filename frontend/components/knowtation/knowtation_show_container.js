import { connect } from 'react-redux';
import KnowtationShow from './knowtation_show';
import {
  setElement,
  requestKnowtation,
  toggleAttribute
} from '../../actions/knowtation_actions';

const mapStateToProps = state => ({
  knowtation: state.knowtation
});

const mapDispatchToProps = dispatch => ({
  setElement: (element, elementName) => dispatch(setElement(element, elementName)),
  requestKnowtation: id => dispatch(requestKnowtation(id)),
  toggleAttribute: attribute => dispatch(toggleAttribute(attribute))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KnowtationShow);
