import React from "react";
class Juho extends React.Component {
  state = {
    title: ""
  };

  handleTitleChange = event => {
    this.setState({ title: event.target.value });
  };
  render() {
    return (
      <div
        style={{
          backgroundColor: "pink",
          height: "130vh",
          textAlign: "center"
        }}
      >
        <h1 style={{ margin: "0" }}>Juhon nettisivut</h1>
        <img
          style={{ display: "flex", justifyContent: "center", margin: "auto" }}
          alt=""
          src="https://media.licdn.com/dms/image/C4E03AQE1yzmqZkVYLg/profile-displayphoto-shrink_200_200/0?e=1559174400&v=beta&t=sIYYbqVHiKMXDQG9nhQuQigN_44C6f_02xIVp3YphYs"
        />

        <h2>tervetuloa </h2>
        <h4>myydään mainostilaa</h4>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            backgroundColor: "pink"
          }}
        >
          <img
            alt=""
            style={{ width: "200px", height: "200px" }}
            src="http://scd.en.rfi.fr/sites/english.filesrfi/dynimagecache/0/376/3299/1861/1024/578/sites/images.rfi.fr/files/aef_image/img_1046_1.jpg"
          />
        </div>
        <button
          style={{ margin: "30px", backgroundColor: "orange" }}
          onClick={() => alert(":DD painoit :DD viruksii tuli koneelles XD")}
        >
          paina tästä
        </button>
        <p style={{ backgroundColor: "pink" }}>{this.state.title}</p>

        <h5
          style={{ textAlign: "center", backgroundColor: "pink", margin: "0" }}
        >
          moi mä oon <span style={{ color: "green" }}> juho</span>, 27v
          nepalista, tykkään mainoksista ja double baconeist
        </h5>

        <p
          style={{ textAlign: "center", backgroundColor: "pink", margin: "0" }}
        >
          ota yhteyt täst:
        </p>

        <form style={{ backgroundColor: "pink" }}>
          <center>
            <input placeholder="tähä nimi" />
            <center>
              <input placeholder="tähä sposti" />
            </center>
            <center>
              <input
                onChange={this.handleTitleChange}
                style={{ height: "100px", marginBottom: "30px" }}
                placeholder="tähä asia"
              />
            </center>
          </center>
        </form>
      </div>
    );
  }
}

export default Juho;
