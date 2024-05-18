import React from "react";
import { Component } from "react";
import Alert from "./Alert";

class Osis extends Component {
  render() {
    const Kirim = () => {
      alert("Formulir anda sudah terkirim!");
    };

    return (
      <div className="container mt-5">
        <Alert type="warning">Form Pendaftaran OSIS</Alert>
        <form>
          <div className="mb-3">
            <label htmlFor="nama" className="form-label">
              Nama
            </label>
            <input type="text" className="form-control" id="nama" placeholder="Nama" />
          </div>
          <div className="mb-3">
            <label>Jenis Kelamin</label>
            <div className="form-check">
              <input type="radio" className="form-check-input" name="jenis_kelamin" value="Laki-laki" />
              <label className="form-check-label" htmlFor="Laki-laki">
                Laki-laki
              </label>
            </div>
            <div className="form-check">
              <input type="radio" className="form-check-input" name="jenis_kelamin" value="Perempuan" />
              <label className="form-check-label" htmlFor="Perempuan">
                Perempuan
              </label>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="alamat" className="form-label">
              Alamat
            </label>
            <input type="text" className="form-control" id="alamat" placeholder="Alamat" />
          </div>
          <button type="button-submit" className="btn btn-primary" onClick={Kirim}>
            Kirim
          </button>
        </form>
      </div>
    );
  }
}

export default Osis;
