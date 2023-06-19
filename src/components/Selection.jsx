// import React,{useState} from "react";
// export default function Selection(){
//     const [selectedButton, setSelectedButton] = useState(null);
//     const clickm=()=>{
//         console.log('clicked');
//     }
//     return(
//         <div className="select">
//             <button onClick={clickm}><p>All</p></button>
//             <button><p>Technology</p></button>
//             <button><p>Education</p></button>
//             <button><p>Lifestyle</p></button>
//             <button><p>HealthCare</p></button>
//             <button><p>Sport</p></button>
//             <button><p>Food</p></button>
//         </div>
//     )
// } 

import React, { useState } from "react";

export default function Selection() {
  const [selectedButton, setSelectedButton] = useState("all");

  const handleClick = (buttonName) => {
    console.log('clicked');
    setSelectedButton(buttonName);
  };

  return (
    <div className="select">
      <button onClick={() => handleClick("all")} className={selectedButton === "all" ? "selected" : ""}
        style={{ backgroundColor: selectedButton === "all" ? "#FFBB29" : "" }}>
        <p className={selectedButton === "all" ? "selected" : ""} style={{ color: selectedButton === "all" ? "#141518" : "" }}>All</p>
      </button>
      <button onClick={() => handleClick("technology")} className={selectedButton === "technology" ? "selected" : ""}
        style={{ backgroundColor: selectedButton === "technology" ? "#FFBB29" : "" }}>
        <p className={selectedButton === "technology" ? "selected" : ""} style={{ color: selectedButton === "technology" ? "#141518" : "" }}>Technology</p>
      </button>
      <button onClick={() => handleClick("education")} className={selectedButton === "education" ? "selected" : ""}
        style={{ backgroundColor: selectedButton === "education" ? "#FFBB29" : "" }}>
        <p className={selectedButton === "education" ? "selected" : ""} style={{ color: selectedButton === "education" ? "#141518" : "" }}>Education</p>
      </button>
      <button onClick={() => handleClick("lifestyle")} className={selectedButton === "lifestyle" ? "selected" : ""}
        style={{ backgroundColor: selectedButton === "lifestyle" ? "#FFBB29" : "" }}>
        <p className={selectedButton === "lifestyle" ? "selected" : ""} style={{ color: selectedButton === "lifestyle" ? "#141518" : "" }}>Lifestyle</p>
      </button>
      <button onClick={() => handleClick("healthcare")} className={selectedButton === "healthcare" ? "selected" : ""}
        style={{ backgroundColor: selectedButton === "healthcare" ? "#FFBB29" : "" }}>
        <p className={selectedButton === "healthcare" ? "selected" : ""} style={{ color: selectedButton === "healthcare" ? "#141518" : "" }}>HealthCare</p>
      </button>
      <button onClick={() => handleClick("sport")} className={selectedButton === "sport" ? "selected" : ""}
        style={{ backgroundColor: selectedButton === "sport" ? "#FFBB29" : "" }}>
        <p className={selectedButton === "sport" ? "selected" : ""} style={{ color: selectedButton === "sport" ? "#141518" : "" }}>Sport</p>
      </button>
      <button onClick={() => handleClick("food")} className={selectedButton === "food" ? "selected" : ""}
        style={{ backgroundColor: selectedButton === "food" ? "#FFBB29" : "" }}>
        <p className={selectedButton === "food" ? "selected" : ""} style={{ color: selectedButton === "food" ? "#141518" : "" }}>Food</p>
      </button>
      {(selectedButton==="all")&&(
        <div className='blogs'>
            <div className='blog1'>
                <img src='./image/blog1.jpg'/>
                <span className='com category'>LIFESTYLE</span>
                <span className='time'>2 hours ago</span>
                <h2>Changing people's lifestyles for the better</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis velit sint porro aut amet, animi consectetur, quae voluptatibus distinctio, cumque enim? Fuga blanditiis inventore sit distinctio nam tempore delectus hic!</p>
                <span className='read'>Read More</span>
            </div>
            <div className='blog2'>
                <img src='./image/blog2.jpg'/>
                <span className='com category'>TECHNOLOGY</span>
                <span className='time'>2 hours ago</span>
                <h2>Simple Solutions for Complex Connections</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis velit sint porro aut amet, animi consectetur, quae voluptatibus distinctio, cumque enim? Fuga blanditiis inventore sit distinctio nam tempore delectus hic!</p>
                <span className='read'>Read More</span>
            </div>
            <div className='blog3'>
                <img src='./image/blog3.jpg'/>
                <span className='com category'>SPORT</span>
                <span className='time'>2 hours ago</span>
                <h2>All things are difficult before they are easy</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis velit sint porro aut amet, animi consectetur, quae voluptatibus distinctio, cumque enim? Fuga blanditiis inventore sit distinctio nam tempore delectus hic!</p>
                <span className='read'>Read More</span>
            </div>
            <div className='blog4'>
                <img src='./image/blog4.jpg'/>
                <span className='com category'>EDUCATION</span>
                <span className='time'>2 hours ago</span>
                <h2>How to Memorize everything you read?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis velit sint porro aut amet, animi consectetur, quae voluptatibus distinctio, cumque enim? Fuga blanditiis inventore sit distinctio nam tempore delectus hic!</p>
                <span className='read'>Read More</span>
            </div>
        </div>
      )}
      {(selectedButton === "lifestyle") && (
        <div className="blog1">
          <img src="./image/blog1.jpg" alt="Blog 1" />
          <span className="com category">LIFESTYLE</span>
          <span className="time">2 hours ago</span>
          <h2>Changing people's lifestyles for the better</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis velit sint porro aut amet, animi consectetur,
            quae voluptatibus distinctio, cumque enim? Fuga blanditiis inventore sit distinctio nam tempore delectus hic!
          </p>
          <span className="read">Read More</span>
        </div>
      )}
      {(selectedButton === "technology") && (
        <div className="blog2">
          <img src="./image/blog2.jpg" alt="Blog 1" />
          <span className="com category">TECHNOLOGY</span>
          <span className="time">2 hours ago</span>
          <h2>Simple Solutions for Complex Connections</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis velit sint porro aut amet, animi consectetur,
            quae voluptatibus distinctio, cumque enim? Fuga blanditiis inventore sit distinctio nam tempore delectus hic!
          </p>
          <span className="read">Read More</span>
        </div>
      )}
      {(selectedButton === "sport") && (
        <div className="blog3">
          <img src="./image/blog3.jpg" alt="Blog 1" />
          <span className="com category">SPORT</span>
          <span className="time">2 hours ago</span>
          <h2>All things are difficult before they are easy</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis velit sint porro aut amet, animi consectetur,
            quae voluptatibus distinctio, cumque enim? Fuga blanditiis inventore sit distinctio nam tempore delectus hic!
          </p>
          <span className="read">Read More</span>
        </div>
      )}
      {(selectedButton === "education") && (
        <div className="blog4">
          <img src="./image/blog4.jpg" alt="Blog 1" />
          <span className="com category">EDUCATION</span>
          <span className="time">2 hours ago</span>
          <h2>How to Memorize everything you read?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis velit sint porro aut amet, animi consectetur,
            quae voluptatibus distinctio, cumque enim? Fuga blanditiis inventore sit distinctio nam tempore delectus hic!
          </p>
          <span className="read">Read More</span>
        </div>
      )}
    </div>
  );
}
