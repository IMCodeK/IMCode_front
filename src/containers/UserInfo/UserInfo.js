import React, {Component, Suspense} from 'react'
import Loader from '../../components/Common/Loader';
class UserInfo extends Component {
  // api로 데이터 불러오기
  render() {
    return(
      <Suspense fallback={<Loader/>}>
        <div>
          프로필 보여지는 곳
        </div>
      </Suspense>
    )
  }
}

export default UserInfo;