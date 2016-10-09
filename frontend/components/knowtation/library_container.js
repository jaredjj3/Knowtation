import { connect } from 'react-redux';
import Library from './library';

const mapStateToProps = state => ({
  knowtations: state.knowtations
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Library);
