import React, { Component } from 'react'
import {storage} from '../config/fbConfig'
import { connect } from 'react-redux'
import url from '../store/reducers/authReducer'

class ImageUpload extends Component {
    
    state = {
        image: null,
        url: '',
        progress: 0
      }
    
    handleChanges = e => {
        if(e.target.files[0]) {
            const image = e.target.files[0];
            this.setState( () => ({image}));
        }
    }
    handleUploads = (e) => {
       
        e.preventDefault();
        const {image} = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed',
        (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            this.setState({progress}) ;
        },
        (error) => {

        },
        () => {
            //complete
            storage.ref('images').child(image.name).getDownloadURL().then(url => {
                this.setState({url})
                console.log(url);
                this.props.url(this.state)
            })
        })
    }
    render() {
      
        return (
                <div>
                    <progress value={this.state.progress} max="100" />
                    <input type = "file" onChange={ this.handleChanges}/>
                    <button onClick={this.handleUploads} > Upload </button>
                    <br/>
                    <img src={this.state.url || 'http://via.placeholder.com/400x300' } alt="Uploaded Images" height ="300" width="400"/>
                </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      url: (image) => dispatch(url(image))
    }
  }

export default connect(null,mapDispatchToProps)(ImageUpload)