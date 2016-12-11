import { connect } from 'react-redux'
import Me from '../components/Me'
import { addInspiration, updateInspiration, removeInspiration } from '../../../modules/inspirations'

const mapStateToProps = ({ inspirations, user }) => ({
  inspirations: inspirations.all,
  realname: user.realname,
  assigned: user.assigned,
})

const mapDispatchToProps = {
  addInspiration,
  updateInspiration,
  removeInspiration,
}

export default connect(mapStateToProps, mapDispatchToProps)(Me)
