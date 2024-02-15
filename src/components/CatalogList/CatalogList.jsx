import React, { useState } from 'react'

import './CatalogList.scss'
import Item from '../Item/Item';
// import { useState } from 'react';


const CatalogList = () => {

    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState([])

    const handleChange = (event) => {
        setSearchTerm(event.target.value)

        const filteredResults = nbaPlayers.filter((player) =>
            player.name.toLowerCase().includes(event.target.value.toLowerCase()))
        setSearchResults(filteredResults)
    }

    const nbaPlayers = [
        {
            id: 1,
            name: 'LeBron James',
            team: 'Los Angeles Lakers',
            position: 'Forward',
            pointsPerGame: 25.0,
            reboundsPerGame: 7.7,
            assistsPerGame: 7.8,
            imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg', // Los Angeles Lakers
            teamColor: '#552583',
        },
        {
            id: 2,
            name: 'Kevin Durant',
            team: 'Brooklyn Nets',
            position: 'Forward',
            pointsPerGame: 27.0,
            reboundsPerGame: 7.1,
            assistsPerGame: 5.9,
            imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.svg', // Brooklyn Nets
            teamColor: '#000000',
        },
        {
            id: 3,
            name: 'Stephen Curry',
            team: 'Golden State Warriors',
            position: 'Guard',
            pointsPerGame: 30.1,
            reboundsPerGame: 5.5,
            assistsPerGame: 6.1,
            imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg', // Golden State Warriors
            teamColor: '#1D428A',
        },
        {
            id: 4,
            name: 'Giannis Antetokounmpo',
            team: 'Milwaukee Bucks',
            position: 'Forward',
            pointsPerGame: 28.1,
            reboundsPerGame: 11.0,
            assistsPerGame: 6.1,
            imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203507.png',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612749/primary/L/logo.svg', // Milwaukee Bucks
            teamColor: '#00471B',
        },
        {
            id: 5,
            name: 'Kawhi Leonard',
            team: 'Los Angeles Clippers',
            position: 'Forward',
            pointsPerGame: 26.9,
            reboundsPerGame: 6.6,
            assistsPerGame: 4.9,
            imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202695.png',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612746/primary/L/logo.svg', // Los Angeles Clippers
            teamColor: '#1D428A',
        },
        {
            id: 6,
            name: 'Luka Dončić',
            team: 'Dallas Mavericks',
            position: 'Guard',
            pointsPerGame: 27.7,
            reboundsPerGame: 8.0,
            assistsPerGame: 9.0,
            imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629029.png',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612742/primary/L/logo.svg', // Dallas Mavericks
            teamColor: '#00538C',
        },
        {
            id: 7,
            name: 'Anthony Davis',
            team: 'Los Angeles Lakers',
            position: 'Forward',
            pointsPerGame: 24.0,
            reboundsPerGame: 10.4,
            assistsPerGame: 3.1,
            imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203076.png',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg', // Los Angeles Lakers
            teamColor: '#552583',
        },
        {
            id: 8,
            name: 'James Harden',
            team: 'Brooklyn Nets',
            position: 'Guard',
            pointsPerGame: 24.6,
            reboundsPerGame: 5.5,
            assistsPerGame: 10.9,
            imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201935.png',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.svg', // Brooklyn Nets
            teamColor: '#000000',
        },
        {
            id: 9,
            name: 'Joel Embiid',
            team: 'Philadelphia 76ers',
            position: 'Center',
            pointsPerGame: 28.5,
            reboundsPerGame: 10.6,
            assistsPerGame: 3.5,
            imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203954.png',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612755/primary/L/logo.svg', // Philadelphia 76ers
            teamColor: '#006BB6',
        },
        {
            id: 10,
            name: 'Damian Lillard',
            team: 'Portland Trail Blazers',
            position: 'Guard',
            pointsPerGame: 28.8,
            reboundsPerGame: 4.2,
            assistsPerGame: 7.5,
            imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203081.png',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612757/primary/L/logo.svg', // Portland Trail Blazers
            teamColor: '#E03A3E',
        },
        {
            id: 11,
            name: 'Kyrie Irving',
            team: 'Brooklyn Nets',
            position: 'Guard',
            pointsPerGame: 26.9,
            reboundsPerGame: 4.8,
            assistsPerGame: 6.0,
            imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202681.png',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.svg', // Brooklyn Nets
            teamColor: '#000000',
        },
        {
            id: 12,
            name: 'Khris Middleton',
            team: 'Milwaukee Bucks',
            position: 'Forward',
            pointsPerGame: 20.4,
            reboundsPerGame: 6.0,
            assistsPerGame: 5.4,
            imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203114.png',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612749/primary/L/logo.svg', // Milwaukee Bucks
            teamColor: '#00471B',
        },
        {
            id: 13,
            name: 'Paul George',
            team: 'Los Angeles Clippers',
            position: 'Forward',
            pointsPerGame: 23.3,
            reboundsPerGame: 6.6,
            assistsPerGame: 5.2,
            imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202331.png',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612746/primary/L/logo.svg', // Los Angeles Clippers
            teamColor: '#1D428A',
        },
        {
            id: 14,
            name: 'Kristaps Porziņģis',
            team: 'Dallas Mavericks',
            position: 'Center',
            pointsPerGame: 20.1,
            reboundsPerGame: 8.9,
            assistsPerGame: 1.6,
            imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/204001.png',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612742/primary/L/logo.svg', // Dallas Mavericks
            teamColor: '#00538C',
        },
        {
            id: 15,
            name: 'Devin Booker',
            team: 'Phoenix Suns',
            position: 'Guard',
            pointsPerGame: 25.6,
            reboundsPerGame: 3.6,
            assistsPerGame: 4.3,
            imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626164.png',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612756/primary/L/logo.svg', // Phoenix Suns
            teamColor: '#1D1160',
        },
        {
            id: 16,
            name: 'Jayson Tatum',
            team: 'Boston Celtics',
            position: 'Forward',
            pointsPerGame: 26.4,
            reboundsPerGame: 7.4,
            assistsPerGame: 4.3,
            imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628369.png',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg', // Boston Celtics
            teamColor: '#007A33',
        },
        {
            id: 17,
            name: 'Jimmy Butler',
            team: 'Miami Heat',
            position: 'Forward',
            pointsPerGame: 21.5,
            reboundsPerGame: 6.9,
            assistsPerGame: 7.1,
            imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202710.png',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg', // Miami Heat
            teamColor: '#98002E',
        },
        {
            id: 18,
            name: 'Zion Williamson',
            team: 'New Orleans Pelicans',
            position: 'Forward',
            pointsPerGame: 27.0,
            reboundsPerGame: 7.2,
            assistsPerGame: 3.7,
            imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629627.png',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612740/primary/L/logo.svg', // New Orleans Pelicans
            teamColor: '#0C2340',
        },
        {
            id: 19,
            name: 'CJ McCollum',
            team: 'Portland Trail Blazers',
            position: 'Guard',
            pointsPerGame: 20.3,
            reboundsPerGame: 4.2,
            assistsPerGame: 4.7,
            imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203468.png',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612757/primary/L/logo.svg', // Portland Trail Blazers
            teamColor: '#E03A3E',
        },
        {
            id: 20,
            name: 'Rudy Gobert',
            team: 'Utah Jazz',
            position: 'Center',
            pointsPerGame: 14.4,
            reboundsPerGame: 13.5,
            assistsPerGame: 1.3,
            imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203497.png',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612762/primary/L/logo.svg', // Utah Jazz
            teamColor: '#002B5C',
        },
        {
            id: 21,
            name: 'Klay Thompson',
            team: 'Golden State Warriors',
            position: 'Guard',
            pointsPerGame: 19.5,
            reboundsPerGame: 3.5,
            assistsPerGame: 2.3,
            imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202691.png',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg', // Golden State Warriors
            teamColor: '#1D428A',
        },
    ];


    return (
        <section className="catalog">
            <div className="container">
                <h2 className="section-title">Top Players</h2>

                <div className="search">
                    <input type="text" value={searchTerm} onChange={handleChange} />

                    <div className={`search__list ${searchTerm ? 'active' : ''}`}>
                        {searchResults.map((player) => (
                            <div className="search__item" key={player.id}>
                                <img src={player.imageUrl} alt="img" />
                                <p>{player.name}</p>
                                <b>{player.team}</b>
                            </div>
                        ))}

                    </div>

                </div>

                <div className="catalog__wrapper wrap">

                    {nbaPlayers.map((item) => (
                        <Item props={item} key={item.id} />
                    ))}


                </div>
            </div>
        </section>
    )
}

export default CatalogList