import React from 'react'
import './HomeList.scss'
import HomeItem from '../HomeItem/HomeItem';

const HomeList = () => {

    const newsData = [
        {
            id: 1,
            preview: 'https://cdn.nba.com/manage/2023/12/lebron-2.jpg?w=384&h=224',
            title: 'Top Viral Moments of the 2023 Calendar Year',
            duration: '52:38'
        },
        {
            id: 2,
            preview: 'https://cdn.nba.com/manage/2023/12/Performance-2023-Calendar-Year.jpg?w=384&h=224',
            title: 'Top performances from 2023 calendar year',
            duration: '32:28'
        },
        {
            id: 3,
            preview: 'https://cdn.nba.com/manage/2023/10/luka-reacts-cropped.jpg?w=384&h=224',
            title: 'Top 10 clutch plays of the 2023 calendar year',
            duration: '03:34'
        },
        {
            id: 4,
            preview: 'https://cdn.nba.com/manage/2023/11/USATSI_21892277-scaled.jpg?w=384&h=224',
            title: 'Top 10 Crossovers of the 2023 Calendar Year',
            duration: '03:25'
        },
        {
            id: 5,
            preview: 'https://cdn.nba.com/manage/2023/12/IMG_4687.jpg?w=384&h=224',
            title: 'Top 10 Blocks of the 2023 Calendar Year',
            duration: '03:52'
        },
        {
            id: 6,
            preview: 'https://cdn.nba.com/manage/2023/12/GettyImages-1463993781-scaled-e1703876257263.jpg?w=384&h=224',
            title: "LeBron James' Milestone Year",
            duration: '00:47'
        },
        {
            id: 7,
            preview: 'https://cdn.nba.com/manage/2023/12/haliburton-6.jpg?w=384&h=224',
            title: 'Top 10 assists of the 2023 calendar year',
            duration: '03:29'
        },
        {
            id: 8,
            preview: 'https://cdn.nba.com/manage/2023/12/keegan-murray-3-pointer.jpg?w=384&h=224',
            title: 'Top 10 3-pointers of the 2023 calendar year',
            duration: '03:41'
        },
    ];



    return (
        <section className="home">
            <div className="container">
                <h2 className="section-title">BEST OF 2023</h2>


                <div className="home__wrapper wrap">

                    {newsData.map((item) => (
                        <HomeItem key={item.id} props={item} />
                    ))}

                </div>
            </div>
        </section>
    )
}

export default HomeList