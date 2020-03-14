import React, { Component} from 'react';
import Loader from '../../components/Common/Loader';

class Home extends Component{
  render(){
    return(
      <div>
        Home 페이지 입니다.
        <Loader/>
      </div>
    )
  }
}

export default Home;