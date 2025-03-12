function Header(){
    return(
        <div>
<div className="header">
      <h1>Vegetables</h1>
      <div className="left" >
        <div className="img2"> 
          <img src="/fb.png" alt="fb" style={{ width: 24, height: 24 }} />
        </div> 
        <div className="img2"> 
          <img src="/ig.png" alt="ig" style={{ width: 24, height: 24 }} />
        </div> 
      <a >|</a>
      <button className="button">LOGIN</button>
      <button className="button">JOIN</button>
      </div>
      </div>
      <div className="header">
      <ul>
          <li><h2 href="">Home</h2></li>
          <li><h2 href="">About Us</h2></li>
          <li><h2 href="">Vegetables</h2></li>
          <li><h2 href="">Online</h2></li>
          <li><h2 href="">Contact</h2></li>
        </ul>
      </div>  

        <br/>
        <div className="row ">
        <img src="/img_main_pumpkin.png" alt="pumpkin"></img>
        </div>
        </div>
    );
}

export default Header;