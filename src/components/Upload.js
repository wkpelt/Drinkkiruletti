import React from "react";

class Upload extends React.Component {
  state = { url: "" };
  uploadImage() {
    const r = new XMLHttpRequest();
    const d = new FormData();
    const e = document.getElementsByClassName("input-image")[0].files[0];

    d.append("image", e);

    r.open("POST", "https://api.imgur.com/3/image/");
    r.setRequestHeader("Authorization", `Client-ID 7063f02fb0ce4ab`);
    r.onreadystatechange = function() {
      if (r.status === 200 && r.readyState === 4) {
        let res = JSON.parse(r.responseText);
        this.setState({ url: `https://i.imgur.com/${res.data.id}.png` });
        this.props.handler(this.state.url);
      }
    }.bind(this);
    r.send(d);
  }

  render() {
    return (
      <div className="upload">
          <input
            type="file"
            className="input-image"
            onChange={this.uploadImage.bind(this)}
          />
      </div>
    );
  }
}

export default Upload;
