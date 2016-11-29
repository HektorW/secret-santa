import { connect } from 'react-redux'
import Me from '../components/Me'

const mapStateToProps = ({ user }) => ({
  realName: user.realName
})

export default connect(mapStateToProps)(Me)
