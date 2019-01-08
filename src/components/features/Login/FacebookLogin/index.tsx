import FacebookLogin from "react-facebook-login";
import React, { PureComponent } from "react";

interface ILoginState {
  isLogin: boolean;
  userID?: string;
  name?: string;
  email?: string;
  picture?: string;
}

interface IDataResponse {
  height: number;
  is_silhouette: boolean;
  url: string;
  width: number;
}

interface IPictureData {
  data: IDataResponse;
}

interface IFacebookResponse {
  accessToken: string;
  data_access_expiration_time: number;
  expiresIn: number;
  id: string;
  name: string;
  reauthorize_required_in: number;
  signedRequest: string;
  userID: string;
  email: string;
  picture: IPictureData;
}

export default class Index extends PureComponent<{}, ILoginState> {
  public state = {
    isLogin: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  };

  public responseFacebook = (response: IFacebookResponse) => {
    this.setState({
      isLogin: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
  };

  public render() {
    let fbContent;

    if (!process.env.REACT_APP_FACEBOOK_ID) {
      return null;
    }

    if (this.state.isLogin) {
      fbContent = (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            backgroundColor: "lightGray",
            width: "350px",
            height: "125px"
          }}
        >
          <img alt={this.state.name} src={this.state.picture} />
          <h2>Welcome {this.state.name}</h2>
          <p>Email: {this.state.email}</p>
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId={process.env.REACT_APP_FACEBOOK_ID}
          autoLoad={true}
          fields="name,email,picture"
          callback={this.responseFacebook}
          textButton="Zenfolio login with Facebook"
        />
      );
    }

    return <div>{fbContent}</div>;
  }
}
