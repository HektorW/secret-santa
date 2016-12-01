import { connect } from 'react-redux'
import Me from '../components/Me'
import { addInspiration, updateInspiration, removeInspiration } from '../../../modules/inspirations'
import { logout } from '../../../modules/user'

const mapStateToProps = ({ inspirations, user }) => ({
  inspirations: inspirations.all,
  realname: user.realname,
})

const mapDispatchToProps = {
  addInspiration,
  updateInspiration,
  removeInspiration,
  logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(Me)
