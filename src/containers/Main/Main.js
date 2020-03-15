import React, {Component, Suspense} from 'react'
import Viewpager from '../../components/Spring/ViewPager'
import './Main.css';
import Loader from '../../components/Common/Loader';
class Main extends Component {
  render() {
    return(
      <div className="MainBody">
        <Viewpager/>
      </div>
    )
  }
}

export default Main;