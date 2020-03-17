import React from 'react'
import { connect } from 'react-redux';

import { Modal, Button } from 'antd';
import 'antd/dist/antd.css'
import { addNewMovie, handleEdit } from '../Js/actions/actions'


class Maodal extends React.Component {

  state = { 

    name : this.props.cardInfo? this.props.cardInfo.name : "",

    img : this.props.cardInfo? this.props.cardInfo.img : "",

    star : this.props.cardInfo? this.props.cardInfo.star : 3,

    duration:this.props.cardInfo? this.props.cardInfo.duration : "",

    year:this.props.cardInfo? this.props.cardInfo.year : "",

    discription:this.props.cardInfo? this.props.cardInfo.discription : "",

    visible: false 

  };

  showModal = () => {

    this.setState({
      visible: true,
    });

  };

  handleOk = () => {

    this.props.cardInfo?

    this.props.handleEdit({img:this.state.img,
      name:this.state.name,
      star:this.state.star,
      id:this.props.cardInfo.id,
      duration:this.state.duration,
      year:this.state.year,
      discription:this.state.discription
      })

      &&

      this.setState({
        visible: false
      })

    :
    
    this.props.addNewMovie({img:this.state.img,
      name:this.state.name,
      star:this.state.star,
      duration:this.state.duration,
      year:this.state.year,
      discription:this.state.discription
      })

  &&

    this.setState({
      visible: false,
      name:'',
      img:'',
      star:3,
      duration:'',
      year:'',
      discription:'',
    });
  };

  handleCancel = () => {

    this.setState({
      visible: false,
    });

  };

  handleChange=(e)=>{

    this.setState({

      [e.target.name]:e.target.value
    })

  }


  render() {

    return (

      <div className="modal">
        <Button type="primary" onClick={this.showModal}>
          Add movie
        </Button>

        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={()=>{this.handleOk()} }
          onCancel={this.handleCancel}
        >

         <form className="formAdd">
         
                       <span>Name:  <input type="text" placeholder="Enter Name" name='name' onChange={this.handleChange} value={this.state.name}/></span>
                       <span>Rating: <input type="text" placeholder="Enter Rating" name='star' onChange={this.handleChange} value={this.state.star}/></span>
                       <span>Duration :<input type="text" placeholder="Enter Image URL" name='duration' onChange={this.handleChange} value={this.state.duration}/> </span>
                       <span>Image URL :<input type="text" placeholder="Enter Image URL" name='img' onChange={this.handleChange} value={this.state.img}/></span>
                       <span>Year: <input type="text" placeholder="Enter Rating" name='year' onChange={this.handleChange} value={this.state.year}/></span>
                       <span>Discription<input type="text" placeholder="Enter Image URL" name='discription' onChange={this.handleChange} value={this.state.discription}/></span>
                  
                       </form>
               
           <Button color="secondary" className="add-btn" onClick={this.toggle}>Cancel</Button>
               
        </Modal>
      </div>
    );
  }
}

export default connect(null, {addNewMovie, handleEdit})(Maodal);