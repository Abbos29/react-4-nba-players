import React, { useState } from 'react'

import './TeamList.scss'

import Item from '../Item/Item.jsx'

const TeamList = () => {

  const teamsData = {
    Lakers: [
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
        id: 3,
        name: 'Russell Westbrook',
        team: 'Los Angeles Lakers',
        position: 'Guard',
        pointsPerGame: 22.2,
        reboundsPerGame: 7.0,
        assistsPerGame: 8.5,
        imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201566.png',
        logoUrl: 'https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg', // Los Angeles Lakers
        teamColor: '#552583',
      },
      {
        id: 4,
        name: 'Carmelo Anthony',
        team: 'Los Angeles Lakers',
        position: 'Forward',
        pointsPerGame: 13.4,
        reboundsPerGame: 3.1,
        assistsPerGame: 1.5,
        imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2546.png',
        logoUrl: 'https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg', // Los Angeles Lakers
        teamColor: '#552583',
      },
      {
        id: 5,
        name: 'Dwight Howard',
        team: 'Los Angeles Lakers',
        position: 'Center',
        pointsPerGame: 7.1,
        reboundsPerGame: 6.9,
        assistsPerGame: 0.8,
        imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2730.png',
        logoUrl: 'https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg', // Los Angeles Lakers
        teamColor: '#552583',
      },
      {
        id: 6,
        name: 'Talen Horton-Tucker',
        team: 'Los Angeles Lakers',
        position: 'Guard',
        pointsPerGame: 9.0,
        reboundsPerGame: 2.6,
        assistsPerGame: 2.8,
        imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627823.png',
        logoUrl: 'https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg', // Los Angeles Lakers
        teamColor: '#552583',
      },
      {
        id: 7,
        name: 'Malik Monk',
        team: 'Los Angeles Lakers',
        position: 'Guard',
        pointsPerGame: 11.7,
        reboundsPerGame: 2.7,
        assistsPerGame: 1.4,
        imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628370.png',
        logoUrl: 'https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg', // Los Angeles Lakers
        teamColor: '#552583',
      },
      {
        id: 8,
        name: 'Kent Bazemore',
        team: 'Los Angeles Lakers',
        position: 'Guard',
        pointsPerGame: 7.2,
        reboundsPerGame: 3.4,
        assistsPerGame: 1.5,
        imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203145.png',
        logoUrl: 'https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg', // Los Angeles Lakers
        teamColor: '#552583',
      },
      {
        id: 9,
        name: 'Wayne Ellington',
        team: 'Los Angeles Lakers',
        position: 'Guard',
        pointsPerGame: 6.1,
        reboundsPerGame: 1.6,
        assistsPerGame: 1.0,
        imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201961.png',
        logoUrl: 'https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg', // Los Angeles Lakers
        teamColor: '#552583',
      },
      {
        id: 10,
        name: 'Avery Bradley',
        team: 'Los Angeles Lakers',
        position: 'Guard',
        pointsPerGame: 5.2,
        reboundsPerGame: 1.9,
        assistsPerGame: 1.2,
        imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202340.png',
        logoUrl: 'https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg', // Los Angeles Lakers
        teamColor: '#552583',
      },
    ],

    GSW: [
      {
        id: 1,
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
        id: 2,
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
      {
        id: 3,
        name: 'Andrew Wiggins',
        team: 'Golden State Warriors',
        position: 'Forward',
        pointsPerGame: 18.6,
        reboundsPerGame: 4.3,
        assistsPerGame: 2.4,
        imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203952.png',
        logoUrl: 'https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg', // Golden State Warriors
        teamColor: '#1D428A',
      },
      {
        id: 4,
        name: 'Draymond Green',
        team: 'Golden State Warriors',
        position: 'Forward',
        pointsPerGame: 7.0,
        reboundsPerGame: 7.0,
        assistsPerGame: 9.0,
        imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203110.png',
        logoUrl: 'https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg', // Golden State Warriors
        teamColor: '#1D428A',
      },
      {
        id: 5,
        name: 'James Wiseman',
        team: 'Golden State Warriors',
        position: 'Center',
        pointsPerGame: 11.5,
        reboundsPerGame: 5.8,
        assistsPerGame: 0.7,
        imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630206.png',
        logoUrl: 'https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg', // Golden State Warriors
        teamColor: '#1D428A',
      },
      {
        id: 6,
        name: 'Jordan Poole',
        team: 'Golden State Warriors',
        position: 'Guard',
        pointsPerGame: 12.0,
        reboundsPerGame: 2.4,
        assistsPerGame: 1.9,
        imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629673.png',
        logoUrl: 'https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg', // Golden State Warriors
        teamColor: '#1D428A',
      },
      {
        id: 7,
        name: 'Kevon Looney',
        team: 'Golden State Warriors',
        position: 'Center',
        pointsPerGame: 3.4,
        reboundsPerGame: 4.3,
        assistsPerGame: 1.2,
        imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626172.png',
        logoUrl: 'https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg', // Golden State Warriors
        teamColor: '#1D428A',
      },
      {
        id: 8,
        name: 'Otto Porter Jr.',
        team: 'Golden State Warriors',
        position: 'Forward',
        pointsPerGame: 9.7,
        reboundsPerGame: 5.0,
        assistsPerGame: 1.7,
        imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203490.png',
        logoUrl: 'https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg', // Golden State Warriors
        teamColor: '#1D428A',
      },
      {
        id: 9,
        name: 'Nemanja Bjelica',
        team: 'Golden State Warriors',
        position: 'Forward',
        pointsPerGame: 7.2,
        reboundsPerGame: 3.3,
        assistsPerGame: 1.3,
        imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202357.png',
        logoUrl: 'https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg', // Golden State Warriors
        teamColor: '#1D428A',
      },
      {
        id: 10,
        name: 'Andre Iguodala',
        team: 'Golden State Warriors',
        position: 'Forward',
        pointsPerGame: 4.4,
        reboundsPerGame: 3.8,
        assistsPerGame: 2.3,
        imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2738.png',
        logoUrl: 'https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg', // Golden State Warriors
        teamColor: '#1D428A',
      },
    ],

    Clippers: [
      {
        id: 1,
        name: 'Kawhi Leonard',
        team: 'Los Angeles Clippers',
        position: 'Forward',
        pointsPerGame: 27.1,
        reboundsPerGame: 6.8,
        assistsPerGame: 4.9,
        imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202695.png',
        logoUrl: 'https://cdn.nba.com/logos/nba/1610612746/primary/L/logo.svg', // Los Angeles Clippers
        teamColor: '#1D428A',
      },
      {
        id: 2,
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
        id: 3,
        name: 'Reggie Jackson',
        team: 'Los Angeles Clippers',
        position: 'Guard',
        pointsPerGame: 18.8,
        reboundsPerGame: 4.0,
        assistsPerGame: 5.2,
        imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202704.png',
        logoUrl: 'https://cdn.nba.com/logos/nba/1610612746/primary/L/logo.svg', // Los Angeles Clippers
        teamColor: '#1D428A',
      },
      {
        id: 4,
        name: 'Marcus Morris Sr.',
        team: 'Los Angeles Clippers',
        position: 'Forward',
        pointsPerGame: 13.4,
        reboundsPerGame: 3.2,
        assistsPerGame: 1.4,
        imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202694.png',
        logoUrl: 'https://cdn.nba.com/logos/nba/1610612746/primary/L/logo.svg', // Los Angeles Clippers
        teamColor: '#1D428A',
      },
      {
        id: 5,
        name: 'Ivica Zubac',
        team: 'Los Angeles Clippers',
        position: 'Center',
        pointsPerGame: 8.3,
        reboundsPerGame: 7.5,
        assistsPerGame: 1.3,
        imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627826.png',
        logoUrl: 'https://cdn.nba.com/logos/nba/1610612746/primary/L/logo.svg', // Los Angeles Clippers
        teamColor: '#1D428A',
      },
      {
        id: 6,
        name: 'Luke Kennard',
        team: 'Los Angeles Clippers',
        position: 'Guard',
        pointsPerGame: 8.3,
        reboundsPerGame: 3.5,
        assistsPerGame: 1.8,
        imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628379.png',
        logoUrl: 'https://cdn.nba.com/logos/nba/1610612746/primary/L/logo.svg', // Los Angeles Clippers
        teamColor: '#1D428A',
      },
      {
        id: 7,
        name: 'Nicolas Batum',
        team: 'Los Angeles Clippers',
        position: 'Forward',
        pointsPerGame: 8.6,
        reboundsPerGame: 4.7,
        assistsPerGame: 2.2,
        imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201587.png',
        logoUrl: 'https://cdn.nba.com/logos/nba/1610612746/primary/L/logo.svg', // Los Angeles Clippers
        teamColor: '#1D428A',
      },
      {
        id: 8,
        name: 'Terance Mann',
        team: 'Los Angeles Clippers',
        position: 'Guard',
        pointsPerGame: 7.0,
        reboundsPerGame: 3.6,
        assistsPerGame: 1.7,
        imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629611.png',
        logoUrl: 'https://cdn.nba.com/logos/nba/1610612746/primary/L/logo.svg', // Los Angeles Clippers
        teamColor: '#1D428A',
      },
      {
        id: 9,
        name: 'Serge Ibaka',
        team: 'Los Angeles Clippers',
        position: 'Center',
        pointsPerGame: 7.5,
        reboundsPerGame: 4.3,
        assistsPerGame: 1.2,
        imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201586.png',
        logoUrl: 'https://cdn.nba.com/logos/nba/1610612746/primary/L/logo.svg', // Los Angeles Clippers
        teamColor: '#1D428A',
      },
      {
        id: 10,
        name: 'Amir Coffey',
        team: 'Los Angeles Clippers',
        position: 'Forward',
        pointsPerGame: 5.5,
        reboundsPerGame: 1.8,
        assistsPerGame: 1.2,
        imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629599.png',
        logoUrl: 'https://cdn.nba.com/logos/nba/1610612746/primary/L/logo.svg', // Los Angeles Clippers
        teamColor: '#1D428A',
      },
    ],

    Nets: [
      {
        id: 1,
        name: 'Kevin Durant',
        team: 'Brooklyn Nets',
        position: 'Forward',
        pointsPerGame: 29.0,
        reboundsPerGame: 7.3,
        assistsPerGame: 5.3,
        imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png',
        logoUrl: 'https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.svg', // Brooklyn Nets
        teamColor: '#000000',
      },
      {
        id: 2,
        name: 'James Harden',
        team: 'Brooklyn Nets',
        position: 'Guard',
        pointsPerGame: 24.6,
        reboundsPerGame: 5.6,
        assistsPerGame: 10.2,
        imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201935.png',
        logoUrl: 'https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.svg', // Brooklyn Nets
        teamColor: '#000000',
      },
      {
        id: 3,
        name: 'Kyrie Irving',
        team: 'Brooklyn Nets',
        position: 'Guard',
        pointsPerGame: 27.4,
        reboundsPerGame: 4.8,
        assistsPerGame: 6.3,
        imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202681.png',
        logoUrl: 'https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.svg', // Brooklyn Nets
        teamColor: '#000000',
      },
      {
        id: 4,
        name: 'Joe Harris',
        team: 'Brooklyn Nets',
        position: 'Guard-Forward',
        pointsPerGame: 10.0,
        reboundsPerGame: 3.5,
        assistsPerGame: 1.9,
        imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203925.png',
        logoUrl: 'https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.svg', // Brooklyn Nets
        teamColor: '#000000',
      },
      {
        id: 5,
        name: 'Blake Griffin',
        team: 'Brooklyn Nets',
        position: 'Forward',
        pointsPerGame: 11.0,
        reboundsPerGame: 4.9,
        assistsPerGame: 2.5,
        imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201933.png',
        logoUrl: 'https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.svg', // Brooklyn Nets
        teamColor: '#000000',
      },
      {
        id: 6,
        name: 'DeAndre Jordan',
        team: 'Brooklyn Nets',
        position: 'Center',
        pointsPerGame: 7.5,
        reboundsPerGame: 7.5,
        assistsPerGame: 1.8,
        imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201599.png',
        logoUrl: 'https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.svg', // Brooklyn Nets
        teamColor: '#000000',
      },
      {
        id: 7,
        name: 'Bruce Brown',
        team: 'Brooklyn Nets',
        position: 'Guard-Forward',
        pointsPerGame: 8.8,
        reboundsPerGame: 5.4,
        assistsPerGame: 1.6,
        imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202347.png',
        logoUrl: 'https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.svg', // Brooklyn Nets
        teamColor: '#000000',
      },
      {
        id: 8,
        name: 'Nicolas Claxton',
        team: 'Brooklyn Nets',
        position: 'Center',
        pointsPerGame: 8.1,
        reboundsPerGame: 4.0,
        assistsPerGame: 1.3,
        imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629651.png',
        logoUrl: 'https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.svg', // Brooklyn Nets
        teamColor: '#000000',
      },
      {
        id: 9,
        name: 'Patty Mills',
        team: 'Brooklyn Nets',
        position: 'Guard',
        pointsPerGame: 11.3,
        reboundsPerGame: 2.4,
        assistsPerGame: 2.9,
        imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201988.png',
        logoUrl: 'https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.svg', // Brooklyn Nets
        teamColor: '#000000',
      },
      {
        id: 10,
        name: 'LaMarcus Aldridge',
        team: 'Brooklyn Nets',
        position: 'Forward-Center',
        pointsPerGame: 13.7,
        reboundsPerGame: 4.5,
        assistsPerGame: 1.7,
        imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/200746.png',
        logoUrl: 'https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.svg', // Brooklyn Nets
        teamColor: '#000000',
      },
    ],

    Heat: [
      {
        id: 1,
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
        id: 2,
        name: 'Bam Adebayo',
        team: 'Miami Heat',
        position: 'Center',
        pointsPerGame: 19.0,
        reboundsPerGame: 9.2,
        assistsPerGame: 5.4,
        imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628389.png',
        logoUrl: 'https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg', // Miami Heat
        teamColor: '#98002E',
      },
      {
        id: 3,
        name: 'Kyle Lowry',
        team: 'Miami Heat',
        position: 'Guard',
        pointsPerGame: 13.0,
        reboundsPerGame: 4.3,
        assistsPerGame: 9.0,
        imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/200768.png',
        logoUrl: 'https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg', // Miami Heat
        teamColor: '#98002E',
      },
      {
        id: 4,
        name: 'Duncan Robinson',
        team: 'Miami Heat',
        position: 'Guard-Forward',
        pointsPerGame: 13.1,
        reboundsPerGame: 3.5,
        assistsPerGame: 1.8,
        imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629130.png',
        logoUrl: 'https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg', // Miami Heat
        teamColor: '#98002E',
      },
      {
        id: 5,
        name: 'Tyler Herro',
        team: 'Miami Heat',
        position: 'Guard',
        pointsPerGame: 15.1,
        reboundsPerGame: 5.1,
        assistsPerGame: 3.4,
        imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627823.png',
        logoUrl: 'https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg', // Miami Heat
        teamColor: '#98002E',
      },
      {
        id: 6,
        name: 'P.J. Tucker',
        team: 'Miami Heat',
        position: 'Forward',
        pointsPerGame: 6.3,
        reboundsPerGame: 4.5,
        assistsPerGame: 1.1,
        imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/200782.png',
        logoUrl: 'https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg', // Miami Heat
        teamColor: '#98002E',
      },
      {
        id: 7,
        name: 'Markieff Morris',
        team: 'Miami Heat',
        position: 'Forward-Center',
        pointsPerGame: 7.3,
        reboundsPerGame: 4.3,
        assistsPerGame: 1.2,
        imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202693.png',
        logoUrl: 'https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg', // Miami Heat
        teamColor: '#98002E',
      },
      {
        id: 8,
        name: 'Max Strus',
        team: 'Miami Heat',
        position: 'Guard-Forward',
        pointsPerGame: 8.5,
        reboundsPerGame: 2.4,
        assistsPerGame: 1.2,
        imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629622.png',
        logoUrl: 'https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg', // Miami Heat
        teamColor: '#98002E',
      },
      {
        id: 9,
        name: 'Goran Dragić',
        team: 'Miami Heat',
        position: 'Guard',
        pointsPerGame: 11.4,
        reboundsPerGame: 3.1,
        assistsPerGame: 4.4,
        imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201609.png',
        logoUrl: 'https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg', // Miami Heat
        teamColor: '#98002E',
      },
      {
        id: 10,
        name: 'Omer Yurtseven',
        team: 'Miami Heat',
        position: 'Center',
        pointsPerGame: 6.0,
        reboundsPerGame: 5.0,
        assistsPerGame: 0.9,
        imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627824.png',
        logoUrl: 'https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg', // Miami Heat
        teamColor: '#98002E',
      },
    ],

  }


  const [selectedTeam, setSelectedTab] = useState('Lakers')

  const handleTabChange = (team) => {
    setSelectedTab(team)
  }

  // const selectedPlayers = selectedTeam === 'Lakers' ? LakersPlayers : GswPlayers

  const selectedPlayers = teamsData[selectedTeam];

  return (
    <section className="teams">
      <div className="container">
        <div className="teams__top">
          <select className='select' onChange={(e) => handleTabChange(e.target.value)} value={selectedTeam}>
            <option value="Lakers">Lakers</option>
            <option value="GSW">GSW</option>
            <option value="Clippers">Clippers</option>
            <option value="Nets">Brooklyn Nets</option>
            <option value="Heat">Miami Heat</option>
          </select>
        </div>

        <div className="teams__wrapper wrap">
          {selectedPlayers.map((item) => (
            <Item props={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamList