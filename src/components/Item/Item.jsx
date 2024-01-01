import React from 'react'
import PropTypes from 'prop-types';

import './Item.scss'

const Item = ({ props }) => {
    return (

        <div className="item" style={{ backgroundColor: `${props.teamColor}`, filter: `drop-shadow(1px 1px 8px ${props.teamColor})` }} key={props.id}>
            <div className="item__box">
                <img className="item__img" src={props.imageUrl} alt="" style={{ filter: `drop-shadow(1px 1px 20px ${props.teamColor})` }} />
                <img className="item__logo" src={props.logoUrl} alt="" style={{ filter: `drop-shadow(1px 1px 6px ${props.teamColor})` }} />
                <div className="item__info" >
                    <h4 className="item__name" style={{ borderColor: `${props.teamColor}` }}>{props.name}</h4>
                    <h3 className="item__team" style={{ borderColor: `${props.teamColor}` }}>{props.team}</h3>

                    <div className="item__inner" style={{ borderColor: `${props.teamColor}` }}>
                        <div className="item__per" style={{ borderColor: `${props.teamColor}` }}>
                            <p className="item__per-name">PPG</p>
                            <p className="item__per-stat">{props.pointsPerGame}</p>
                        </div>

                        <div className="item__per" style={{ borderColor: `${props.teamColor}` }}>
                            <p className="item__per-name">RPG</p>
                            <p className="item__per-stat">{props.reboundsPerGame}</p>
                        </div>

                        <div className="item__per" style={{ borderColor: `${props.teamColor}` }}>
                            <p className="item__per-name">APG</p>
                            <p className="item__per-stat">{props.assistsPerGame}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


Item.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    pointsPerGame: PropTypes.number.isRequired,
    reboundsPerGame: PropTypes.number.isRequired,
    assistsPerGame: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    logoUrl: PropTypes.string.isRequired,
    teamColor: PropTypes.string.isRequired,
};

export default Item