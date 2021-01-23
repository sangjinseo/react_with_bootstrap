import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }

  //   입력한 값을 username에 변수를 담음
  myChangeHandler = evt => {
    this.setState({ username: evt.target.value });
  };
  //   버튼 클릭시 onClick에서 호출
  doSave = () => {
    alert(this.state.username);
  };
  render() {
    return (
      <div>
        {/*  form 객체를 핸들링하는 방법 */}
        <p> Enter your name: </p>
        <input type="text" onChange={this.myChangeHandler} />
        <button type="button" className="btn btn-primary" onClick={this.doSave}>
          저장
        </button>
      </div>
    );
  }
}
export default About;
