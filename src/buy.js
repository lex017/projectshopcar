const Buy = () => {
    return (
      <div className="container">
  
        {/* Profile 1 */}
        <div className="profile">
          <img src="tim.jpeg" alt="Profile 1" />
          <h2>Thudtim SOMMANY</h2>
          <p>Email: Thudtim04@gmail.com </p>
          <p>Tel: 020 54109398 </p>
          <hr />
          <h3>Studying</h3>
          <p>Soutsaka Institute of Technology</p>
          <p>Logos Institute of Foreign Language</p>
          <hr />
          <h3>Major</h3>
          <p>Programming</p>
          <p>English Language</p>
          <hr />
          <h3>Skill</h3>
          <p>Sleep, Eat, Sleep</p>
          <hr />
          <h3>About me</h3>
          <p>Hello</p>
        </div>
  
        {/* Profile 2 */}
        <div className="profile">
          <img src="alex.jpeg" alt="Profile 2" />
          <h2>Souliya Phenphomma </h2>
          <p>Email: alexphengphomma@gmail.com </p>
          <p>Tel: 020 77858585 </p>
          <hr />
          <h3>Studying</h3>
          <p>Soutsaka Institute of Technology</p>
          <p>Logos Institute of Foreign Language</p>
          <hr />
          <h3>Major</h3>
          <p>Programming</p>
          <p>English Language</p>
          <hr />
          <h3>Skill</h3>
          <p>JAVA,C#,HTML,CSS</p>
          <hr />
          <h3>About me</h3>
          <p>Hello</p>
        </div>
  
        {/* Profile 3 */}
        <div className="profile">
          <img src="boy1.jpeg" alt="Profile 3" />
          <h2>CHAKKAPHAT SILISANG </h2>
          <p>Email: cackkaphatsirisang@gmail.com </p>
          <p>Tel: 020 95422676 </p>
          <hr />
          <h3>Studying</h3>
          <p>Soutsaka Institute of Technology</p>
          <p>Logos Institute of Foreign Language</p>
          <hr />
          <h3>Major</h3>
          <p>Programming</p>
          <p>English Language</p>
          <hr />
          <h3>Skill</h3>
          <p>Sleep, Eat, Sleep</p>
          <hr />
          <h3>About me</h3>
          <p>Hello</p>
        </div>
  
        {/* Profile 4 */}
        <div className="profile">
          <img src="" alt="Profile 4" />
          <h2>Name: </h2>
          <p>Email: </p>
          <p>Tel: </p>
          <hr />
          <h3>Studying</h3>
          <p>Soutsaka Institute of Technology</p>
          <p>Logos Institute of Foreign Language</p>
          <hr />
          <h3>Major</h3>
          <p>Programming</p>
          <p>English Language</p>
          <hr />
          <h3>Skill</h3>
          <p>Sleep, Eat, Sleep</p>
          <hr />
          <h3>About me</h3>
          <p>Hello</p>
        </div>
  
        <style jsx>
          {`
          body{
          background-color: #212149;
          }
            h1 {
              align: center;
            }
  
            .profile {
              box-shadow: 10px 10px 10px;
              background-color: white;
              padding: 10px;
              margin: 30px;
              width: 230px;
              border-radius:20px
            }
  
            .profile:hover {
              box-shadow: 0 140px 200px rgba(0, 0, 0, 0.2);
              width: 500px;
              height: auto;
              transition:  1s;
            }
  
            .profile img {
              width: 120px;
              height: 120px;
              border-radius: 50%;
              object-fit: cover;
              border: 4px solid darkblue;
              margin-bottom: 15px;
            }
  
            .container {
              display: flex;
              flex-wrap: wrap;
            }
          `}
        </style>
      </div>
    );
  };
  
  export default Buy;