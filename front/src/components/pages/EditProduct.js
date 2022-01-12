import React from "react";
import {Form,Button} from 'react-bootstrap';
import axios from "axios";
// import {useParams} from 'react-router-dom';
class EditProduct extends React.Component{
    constructor(){
        super();
        this.state={
            id : '',
            name : '',
            cost : '',
            success: ''
        }
    }
    handleSubmit()
    {
        const product = {
            name: this.state.name,
            cost: this.state.cost
        };
        axios.post('http://localhost:8000/products', product)
            .then(res => {
            console.log(res);
            console.log(res.data);
            this.setState({success:res.data.message,name:'',cost:''});
            });
    }
    componentDidMount(){
        // const id = this.state.id;
        const id  = this.props.data;
        console.log('id')
        console.log(id)
        const result = axios.get('http://localhost:8000/products/1');
        console.log(result)
    }
    render(){
        return (
            <div className="container">

                <h1>Edit Product</h1>
                <span className="text-success">{this.state.success}</span>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Product Name" onChange={(e)=>{this.setState({name:e.target.value})}}  name="name" value={this.state.name} />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Product Cost</Form.Label>
                    <Form.Control type="number" placeholder="Cost" name="cost" onChange={(e)=>{this.setState({cost:e.target.value})}} value={this.state.cost} />
                </Form.Group>
                <Button variant="primary" onClick={()=>{this.handleSubmit()}} type="submit">
                    Submit
                </Button>
            </div>
        )
    }
}

export default EditProduct;