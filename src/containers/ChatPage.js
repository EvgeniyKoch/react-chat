import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ChatPage from '../components/ChatPage';

const mapStateToProps = state => ({
  //...
});

const mapDispatchToProps = dispatch => bindActionCreators({
  //...
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatPage);
