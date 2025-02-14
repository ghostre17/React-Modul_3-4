import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="col-lg-6 col-sm-12 p-2">
        <div className="card">
          <div className="card-body row">
            {/* menampilkan Gambar / cover */}
            <div className="col-5">
              <img src={this.props.cover} className="img" height="200" />
            </div>

            {/* menampilkan deskripsi */}
            <div className="col-7">
              <h5 className="text-dark">{this.props.judul}</h5>
              <h6 className="text-dark">Penulis: {this.props.penulis}</h6>
              <h6 className="text-dark">Album: {this.props.album}</h6>

              {/* button untuk mengedit */}
              <button
                className="btn btn-sm btn-primary m-1"
                onClick={this.props.onEdit}
              >
                Edit
              </button>

              {/* button untuk menghapus */}
              <button
                className="btn btn-sm btn-danger m-1"
                onClick={this.props.onDrop}
              >
                Hapus
              </button>
              {/* button untuk menambah ke keranjang belanja */}
              <button
                className="btn btn-sm btn-success m-1"
                onClick={this.props.onCart}
              >
                Tambahkan ke keranjang belanja
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
