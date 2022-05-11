import React from "react";

const Card = ({ data }) => {
    return (
        <div className="card">
            <h2>{data.titel}</h2>
            <h5>{data.description}</h5>
            {/* <div className="fakeimg" style={{ height: 200 }}>Image</div> */}
            <img src={data.img} alt="fakeimg" className="fakeimg" style={{ height: 200 }} />
            {/* <p>Some text..</p> */}
            <p>{data.contestants}</p>
        </div>
    )
}

export default Card;

