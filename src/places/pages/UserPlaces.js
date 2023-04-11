import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Rowan University",
    description: "One of the best Unversities in the country!",
    imageUrl: "http://elvis.rowan.edu/~burnse/assets/rowan-campus.jpeg",
    address: "201 Mullica Hill Rd, Glassboro, NJ 08028",
    location: {
      lat: 39.7099689,
      lng: -75.1213872,
    },
    creator: "u1",
  },
];

const UserPlaces = () => {
  const myParams = useParams();
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  const [userPlaces, setUserPlaces] = React.useState([]);

  const getPlaces = async () => {
    await fetch(`http://localhost:3001/api/places/user/${userId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUserPlaces(data.places);
      });
  };

  useEffect(() => {
    getPlaces();
  }, []);

  useEffect(() => {
    console.log(userPlaces);
  }, [userPlaces]);

  console.log(myParams);
  console.log(userId);
  return (
    <PlaceList items={userPlaces.length === 0 ? loadedPlaces : userPlaces} />
  );
};

export default UserPlaces;
