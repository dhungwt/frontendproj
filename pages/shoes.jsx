//list all shoes
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllShoesThunk } from "../redux/shoes/shoes.actions";
import ListItems from "../components/ListItems";

const shoes = () =>{
    //selector here wants to access master state in rootreducer
    const allShoes = useSelector((state) => state.shoes.allShoes);
    const dispatch = useDispatch();
    const fetchAllShoes = () => {
      console.log('RUNNING DISPATCH FROM FETCHALLSHOES')
      return dispatch(fetchAllShoesThunk());
    };
    //when component mounts, want to make the call w/ a useEffect
    useEffect(()=>{
        console.log("FETCH ALL SHOES FIRING IN USEEFFECT")
        fetchAllShoes();
    }, []);

    return (
    <div>
    <h1>Shoes Page</h1>
    {/* send items to listItems comp */}
    <ListItems list={allShoes}/>
   </div>
   )
}

export default shoes;