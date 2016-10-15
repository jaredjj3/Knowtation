import { connect } from 'react-redux';
import KnowtationShow from './knowtation_show';
import {
  setElement,
  requestKnowtation,
  toggleAttribute,
  updateKnowtation,
  setAttribute,
  updatePosition,
  updateTime,
  setDuration,
  clearKnowtation
} from '../../actions/knowtation_actions';
import { toggleModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  knowtation: state.knowtation,
  pageUserId: state.knowtation.userId,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  setElement: (element, elementName) => dispatch(setElement(element, elementName)),
  updateTime: currentTime => dispatch(updateTime(currentTime)),
  setDuration: duration => dispatch(setDuration(duration)),
  updateKnowtation: knowtation => dispatch(updateKnowtation(knowtation)),
  requestKnowtation: id => dispatch(requestKnowtation(id)),
  toggleAttribute: attribute => dispatch(toggleAttribute(attribute)),
  setAttribute: (attribute, value) => dispatch(setAttribute(attribute, value)),
  updatePosition: position => dispatch(updatePosition(position)),
  toggleModal: modal => dispatch(toggleModal(modal)),
  clearKnowtation: () => dispatch(clearKnowtation())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KnowtationShow);
