import { connect } from 'react-redux';
import Loading from './loading';

const mapStateToProps = state => ({
  loadingModalOn: state.modal.loadingModalOn
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loading);
