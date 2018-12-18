import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../store/action/projectAction'
import { Redirect } from 'react-router-dom'
import ImageUpload from '../images/ImageUpload'

class CreateProject extends Component {
    state = {
      title: '',
      content: '',
      url: ''
    }
    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      })
    }
    handleSubmit = (e) => {
      e.preventDefault();
      // console.log(this.state);
   
      this.props.createProject(this.state);
      this.props.history.push('/');
    }
    render() {
      const { auth } = this.props;
      if (!auth.uid) return <Redirect to='/signin' /> 
      return (
        <div className="container">
          <form className="white" onSubmit={this.handleSubmit}>
            <h5 className="grey-text text-darken-3">Create a New Watchable</h5>
            <div className="input-field">
              <input type="text" id='title' onChange={this.handleChange} />
              <label htmlFor="title">Watchable Title</label>
            </div>
            <div className="input-field">
              <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
              <label htmlFor="content">Watchable Content</label>
            </div>
            <ImageUpload  />
   
            <div className="input-field">
              <button className="btn  orange lighten-1">Create</button>
            </div>
          </form>
        </div>
      )
    }
  }
  
  const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      createProject: (project) => dispatch(createProject(project))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)