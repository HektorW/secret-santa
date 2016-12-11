import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllUsers, assignUsers } from '../modules/admin'
import './admin-style.css'

class AdminContainer extends Component {
  componentWillMount() {
    this.props.fetchAllUsers()
  }

  assignSelected() {
    const { list } = this.refs
    const selectedIds = []
    list.querySelectorAll(':checked')
      .forEach(input => selectedIds.push(input.name))
    this.props.assignUsers(selectedIds)
  }

  render() {
    const { allUsers, hasAssignedUsers, error } = this.props
    return (
      <div className='admin'>
        <h1>Admin</h1>
        <ul ref='list'>
          {allUsers.map(user => (
            <li key={user.id}>
              <label>
                <input type='checkbox' name={user.id} />
                <span>{user.realname}</span>
              </label>
            </li>
          ))}
        </ul>

        <button className='btn' onClick={() => this.assignSelected()}>Assign!</button>

        {hasAssignedUsers
          ? <div>Users assigned! :D</div>
          : null
        }

        {error
          ? <div>{JSON.stringify(error)}</div>
          : null
        }
      </div>
    )
  }
}


const mapStateToProps = ({ admin }) => ({
  allUsers: admin.allUsers,
  hasAssignedUsers: admin.hasAssignedUsers,
  error: admin.error,
})

const mapDispatchToProps = {
  fetchAllUsers,
  assignUsers,
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer)
