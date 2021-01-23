import React from 'react';

class BusinessName extends React.Component {
  constructor(props) {
    super(props);
    this.state = { brand: '개발자테스트', region: '서울' };
  }
  //   방법 1
  //   changeBrand = () => {
  //     this.setState({ brand: 'Sangjinseo' });
  //   };
  changeBrand = v => {
    this.setState({ brand: v });
  };

  render() {
    // return <h1>{this.props.brand}</h1>; props 내장 오브젝트로 사용
    return (
      <div>
        <h1>{this.state.brand}</h1>
        <button
          type="button"
          className="btn btn-primary"
          //  방법 1
          //   onClick={this.changeBrand}
          onClick={() => this.changeBrand('Sangjin')}
        >
          Change Button
        </button>
      </div>
    );
  }
}

class Contact extends React.Component {
  render() {
    return (
      <div>
        <BusinessName />
        <ul className="list-group">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Morbi leo risus</li>
          <li className="list-group-item">Porta ac consectetur ac</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
      </div>
    );
  }
}
export default Contact;
