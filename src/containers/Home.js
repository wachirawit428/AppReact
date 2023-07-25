import React, {Component} from 'react';
import Header from "../components/Header";
import Monitor from "../components/monitor/Monitor";
import Footer from "../components/Footer";
import axios from "axios";

class Home extends Component{
    constructor(props){
      super(props);
      this.state = {products : ""};
    }
    
  componentDidMount(){
    axios.get("http://localhost:3001/products").then(res => {
			this.setState({ products: res.data });
		});
	}

  render(){
    return (
      <div>
        <Header />
        <Monitor products={this.state.products}/>
        <Footer company ="Ku" email="wachirawitwalairat@gmail.com"/>
      </div>
    );
  }
}


export default Home;
