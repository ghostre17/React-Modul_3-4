import React from "react";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      user: "",
      total: 0,
    };
  }

  componentDidMount() {
    this.iniCart()
  }

  iniCart = () => {
    let tempCart = [];
    if (localStorage.getItem("cart") !== null) {
      tempCart = JSON.parse(localStorage.getItem("cart"));
    }
    let userName = sessionStorage.getItem("user");

    // kalkulasi total harga
    let totalBarang = 0;
    tempCart.map((item) => {
      totalBarang += parseInt(item.jumlahBeli);
    });

    // memasukkan data cart, user, dan total harga pada state
    this.setState({
      cart: tempCart,
      user: userName,
      total: totalBarang,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="card col-12 mt-2">
          <div className="card-header bg-primary text-white">
            <h4>Data Keranjang Belanja</h4>
          </div>

          <div className="card-body">
            <h5 className="text-primary">Nama User: {this.state.user}</h5>

            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Nama Item</th>
                  <th>Penulis</th>
                  <th>Album</th>
                  <th>Jumlah</th>
                </tr>
              </thead>

              <tbody>
                {this.state.cart.map((item, index) => (
                  <tr key={index}>
                    <td>{item.judul}</td>
                    <td>{item.penulis}</td>
                    <td>{item.album}</td>
                    <td>{item.jumlahBeli}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h4 className="text-danger">Total Barang: {this.state.total}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
