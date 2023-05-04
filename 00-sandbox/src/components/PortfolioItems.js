import React from 'react';
// import {useNavigate} from "react-router-dom";

export default function PortfolioItems(props) {
    // const navigation = useNavigate();
  
    return (
      <div className="portfolioItem"
           onClick={() => {
             if (props.url) {
            //    navigation(props.url);
             }
           }}>
        <h3>{props.name}</h3>
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          <div style={{ backgroundImage: `url(${props.image})` }} className='bgImage' />
        </a>
      </div>
    );
  }