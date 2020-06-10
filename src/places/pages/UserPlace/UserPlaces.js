import React from 'react'

import { useParams } from 'react-router-dom'

import PlaceList from '../../components/PlaceList/PlaceList'

const DUMMY_PLACES = [{
    id: 'pl1',
    title: 'Burj Khalifa',
    imageUrl: 'https://images.unsplash.com/photo-1526495124232-a04e1849168c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80',
    description: 'Spired 828-meter skyscraper with a viewing deck, restaurant, hotel and offices and 11-hectare park.',
    address: '1 Sheikh Mohammed bin Rashid Blvd - Downtown Dubai - Dubai - United Arab Emirates',
    location: {
        lat: 25.197197,
        lng: 55.2743764
    },
    creator: 'u1'
},
{
    id: 'pl2',
    title: 'Empire State Building',
    imageUrl: 'https://images.unsplash.com/photo-1550664890-c5e34a6cad31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    description: 'Iconic, art deco office tower from 1931 with exhibits & observatories on the 86th & 102nd floors.',
    address: '20 W 34th St, New York, NY 10001, United States',
    location: {
        lat: 40.7484405,
        lng: -73.9856644
    },
    creator: 'u2'
}
]

const UserPlaces = props => {
    const userId = useParams().id
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator ===userId)
    return <PlaceList items={loadedPlaces}/>
}

export default UserPlaces