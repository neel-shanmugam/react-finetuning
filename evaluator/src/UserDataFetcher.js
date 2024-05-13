import React from 'react';
import axios from 'axios';

class UserDataFetcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null
    };
  }

  componentDidMount() {
    const { url } = this.props;
    axios.get(url)
      .then(response => {
        this.setState({ userData: response.data });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const { userData } = this.state;
    return (
      <div>
        {userData &&
          <div>
            <h2>{userData.name}</h2>
            <p>{userData.email}</p>
          </div>
        }
      </div>
    );
  }
}

export default UserDataFetcher;

