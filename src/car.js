import React, { useState, useEffect } from 'react';

const Car = () => {
  const [cart, setCart] = useState([]);
  const [productIndex, setProductIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const product = [{
    id: 1,
    img:'https://static.wixstatic.com/media/b50766_6eabaac95e0649b28ed8be53e2afa995~mv2.jpg/v1/fill/w_980,h_479,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b50766_6eabaac95e0649b28ed8be53e2afa995~mv2.jpg',
    name:'Nike',
    price: 7000,
    description:'nike lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e ullamcorper lorem',
    type:'passenger'
},{
    id: 2,
    img:'https://media.wltx.com/assets/WTLV/images/a013327b-d764-4817-aab4-8808c24fe8a1/a013327b-d764-4817-aab4-8808c24fe8a1_1140x641.jpg',
    name:'Adidas',
    price: 5500,
    description:'nike lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e ullamcorper lorem',
    type:'passenger'
},{
    id: 3,
    img:'https://m.eshiptrading.com/Upload/Bt_Image/20220628104944430936407.jpg',
    name:'puma',
    price: 3500,
    description:'nike lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e ullamcorper lorem',
    type:'passenger'
},{
    id: 4,
    img:'https://www.cruisetradenews.com/resources/uploads/2018/07/SkyPrincess-600x400.jpg',
    name:'Debo',
    price: 7500,
    description:'nike lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e ullamcorper lorem',
    type:'passenger'
},{
  id: 5,
  img:'https://cdn.britannica.com/25/123125-050-8E6C8227/rowboat.jpg',
  name:'Nike',
  price: 7000,
  description:'nike lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e ullamcorper lorem',
  type:'Boat'
},{
  id: 6,
  img:'https://www.tessllc.us/wp-content/uploads/2020/07/yacht-post-825x510.jpg',
  name:'Adidas',
  price: 5500,
  description:'nike lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e ullamcorper lorem',
  type:'Boat'
},{
  id: 7,
  img:'https://cdn.boatinternational.com/convert/files/2023/08/30942590-400a-11ee-bc8e-5ddbc07249de-bunty-exterior.jpg/r%5Bwidth%5D=320/30942590-400a-11ee-bc8e-5ddbc07249de-bunty-exterior.webp',
  name:'puma',
  price: 3500,
  description:'nike lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e ullamcorper lorem',
  type:'Boat'
},{
  id: 8,
  img:'https://www.sailandleisure.co.za/wp-content/uploads/2017/07/GettyImages-503108753-590116e33df78c545640ee88.jpg',
  name:'Debo',
  price: 7500,
  description:'nike lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e ullamcorper lorem',
  type:'Boat'
}
    
  ];

  useEffect(() => {
    setFilteredProducts(product); // Initialize with full product list
  }, []);

  const numberWithCommas = (x) => {
    x = x.toString();
    const pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) {
      x = x.replace(pattern, '$1,$2');
    }
    return x;
  };

  const openProductdetail = (index) => {
    setProductIndex(index);
    setModalVisible(true);
  };

  const addtocart = () => {
    const updatedCart = [...cart];
    const existingItem = updatedCart.find(item => item.index === productIndex);

    if (existingItem) {
      existingItem.count += 1;
    } else {
      updatedCart.push({
        index: productIndex,
        id: product[productIndex].id,
        name: product[productIndex].name,
        price: product[productIndex].price,
        img: product[productIndex].img,
        count: 1
      });
    }

    setCart(updatedCart);
    document.getElementById('cartcount').style.display = 'flex';
    document.getElementById('cartcount').innerText = updatedCart.length;
  };

  const searchsomething = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchValue(value);
    const filtered = product.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    setFilteredProducts(filtered);
  };

  const searchproduct = (param) => {
    if (param === 'all') {
      setFilteredProducts(product);
    } else {
      const filtered = product.filter((item) => item.type === param);
      setFilteredProducts(filtered);
    }
  };

  const rendercart = () => {
    if (cart.length > 0) {
      return cart.map((item, index) => (
        <div className="cartlist-item" key={index}>
          <div className="cartlist-left">
            <img src={item.img} alt="" />
            <div className="cartlist-detail">
              <p style={{ fontSize: '1.5vw' }}>{item.name}</p>
              <p style={{ fontSize: '1.2vw' }}>{numberWithCommas(item.price * item.count)}</p>
            </div>
          </div>
          <div className="cartlist-right">
            <button onClick={() => deinitem('-', index)} className="btnc">-</button>
            <p id={`countitem${index}`} style={{ margin: '0 20px' }}>{item.count}</p>
            <button onClick={() => deinitem('+', index)} className="btnc">+</button>
          </div>
        </div>
      ));
    } else {
      return <p>Cart is empty</p>;
    }
  };

  const deinitem = (action, index) => {
    const updatedCart = [...cart];
    if (action === '-') {
      if (updatedCart[index].count > 1) {
        updatedCart[index].count -= 1;
      } else {
        updatedCart.splice(index, 1);
      }
    } else {
      updatedCart[index].count += 1;
    }
    setCart(updatedCart);
  };

  const closemodal = () => {
    setModalVisible(false);
    setCartVisible(false);
  };

  return (
    <div>
      <nav>
        <div className="nav-container">
          <a href="#">
            <p className='logo-nav'>Shipshop</p>
          </a>
          <div className="nav-profile">
          <img src="/whitebag.png" className="logo-bag"></img>
            <div onClick={() => setCartVisible(true)} style={{ cursor: 'pointer' }} className="nav-profile-cart">
              <i className="fa-solid fa-bag-shopping"></i>
              <div id="cartcount" className="cartcount" style={{ display: 'none' }}>
                0
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="sidebar">
          <input onKeyUp={searchsomething} id="txt_search" type="text" className="sidebar-search" placeholder="Search..." />
          <button onClick={() => searchproduct('all')} className="sidebar-item">All ship</button>
          <button onClick={() => searchproduct('passenger')} className="sidebar-item">Passenger Ship</button>
          <button onClick={() => searchproduct('Boat')} className="sidebar-item">Boat</button>
        </div>

        <div id="productchoice" className="product">
          {filteredProducts.map((item, index) => (
            <div key={item.id} onClick={() => openProductdetail(index)} className={`product-item ${item.type}`}>
              <img src={item.img} className="product-img" alt={item.name} />
              <p style={{ fontSize: '1.2vw' }}>{item.name}</p>
              <p style={{ fontSize: '.9vw' }}>{numberWithCommas(item.price)}</p>
            </div>
          ))}
        </div>
      </div>

      {modalVisible && (
        <div id="modaldesc" className="modal">
          <div onClick={closemodal} className="modal-bg"></div>
          <div className="modal-page">
            <h2>Detail</h2>
            <div className="modal-content">
              <img id="mdd-img" src={product[productIndex].img} className="modal-img" alt="Product" />
              <div className="modaldec-detail">
                <p id="mdd-name" style={{ fontSize: '1.5vw' }}>{product[productIndex].name}</p>
                <p id="mdd-price" style={{ fontSize: '1.2vw' }}>{numberWithCommas(product[productIndex].price)} $</p>
                <p id="mdd-desc" style={{ color: '#adadad' }}>{product[productIndex].description}</p>
                <div className="btn-control">
                  <button className="btn" onClick={closemodal}>Close</button>
                  <button onClick={addtocart} className="btn btn-buy">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {cartVisible && (
        <div id="modalcart" className="modal">
          <div onClick={closemodal} className="modal-bg"></div>
          <div className="modal-page">
            <h2>My Cart</h2>
            <div id="mycart" className="cartlist">{rendercart()}</div>
            <div className="btn-control">
              <button onClick={closemodal} className="btn">Cancel</button>
              <button className="btn btn-buy">Buy</button>
            </div>
          </div>
        </div>
      )}

<style jsx>
{`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'Arial', sans-serif;
}
body {
  background-color: #212149;
}
nav {
  width: 100%;
  height: 70px;
  background: linear-gradient(125deg, #2e86c1 , black);
  display: block;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.nav-container {
  max-width: 90vw;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo-nav {
  width: 100px;
  object-fit: contain;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
  color: #fff;
  font-family: cursive;
  font-size:30px;
}
  .logo-bag {
  width: 30px;
  object-fit: contain;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
}
.nav-profile {
  display: flex;
  align-items: center;
}
.nav-profile-name {
  color: #fff;
  font-size: 1.2vw;
  margin-right: 10px;
  font-weight: bold;
}
.fa-bag-shopping {
  font-size: 2vw;
  color: #fff;
}
.nav-profile-cart {
  position: relative;
  cursor: pointer;
}
.cartcount {
  position: absolute;
  top: -5px;
  right: -5px;
  width: 18px;
  height: 18px;
  background: #f8d948;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: 0.7rem;
  font-weight: bold;
}

.container {
  max-width: 90vw;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
}
.sidebar {
  width: 20%;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
.sidebar-search {
  padding: 12px;
  border: 2px solid transparent;
  width: 100%;
  font-size: 1rem;
  outline: none;
  border-radius: 8px;
  background: #f9f9f9;
  transition: 0.3s;
  margin-bottom: 20px;
}
.sidebar-search:focus {
  border: 2px solid #e61b36;
}
.sidebar-item {
  background: #fff;
  margin-bottom: 10px;
  padding: 12px;
  border-radius: 8px;
  color: black;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}
.sidebar-item:hover {
  background: #9c1032;
  color: #fff;
}

.product {
  width: 75%;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
}
.product-item {
  background: #fff;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  text-align: center;
}
.product-item:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}
.product-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 10px;
}
.product-item p {
  margin: 5px 0;
}

.modal, .modal-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-page {
  z-index: 99;
  min-width: 30vw;
  max-width: 60vw;
  max-height: 80vh;
  overflow-y: auto;
  background: #fff;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
.modal-content {
  display: flex;
}
.modaldec-detail {
  margin-left: 20px;
}
.modal-img {
  width: 400px;
  height: 300px;
  object-fit: cover;
  border-radius: 15px;
}
.btn-control {
  display: flex;
  justify-content: flex-end;
}
.btn {
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
}
.btn-buy {
  background: linear-gradient(125deg, #e61b36, #9c1032);
  color: #fff;
  margin-left: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
.btn-buy:hover {
  background: linear-gradient(125deg, #ff3c4c, #b81646);
}

.cartlist-item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 10px;
  background: #f9f9f9;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.cartlist-left {
  display: flex;
}
.cartlist-right {
  display: flex;
  align-items: center;
}
.cartlist-left img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 15px;
}
.btnc {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  cursor: pointer;
}
.btnc:hover {
  background: #e61b36;
  color: #fff;
  transition: 0.2s;
}
`}
</style>

    </div>
  );
};

export default Car;
