import { connect } from 'react-redux';

import authActions from '../../../redux/auth/action';

const Logout = props => {
  props.logout();
  return null;
};

const mapStateToProps = ({ auth }) => auth;

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(authActions.logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);
