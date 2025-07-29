import react from 'react';
import "./AllInOne.css";
function Card({icon, title, description}){
    return (
        <div className="card">
            <div className="card-icon">
                <img src={icon} alt={title} />
                </div>

            <div className='card-content'>
                <div className='card-title'>{title}</div>
                <p>{description}</p>
            </div>
        </div>
    );
}
export default Card;