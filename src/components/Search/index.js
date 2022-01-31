import React,{ useState, useEffect } from 'react';
import style from './style.module.css';
import { useDispatch } from 'react-redux';
import { get_Data,loading_Data } from '../../store/type';
import {data} from '../../data/data';

const Search = () => {
  const dispatch = useDispatch();
  const [searchValue, changeValue] = useState("");
  useEffect(() => {
    dispatch({type: loading_Data});
    let newData = data.filter((d) =>{
      return d?.title?.toLowerCase().includes(searchValue.toLocaleLowerCase())
    });
    console.log(newData);
    dispatch({ type: get_Data, payload: newData });
  },[dispatch, searchValue])
  return (
<>
<input type="text" className={style.input} placeholder='Search Album' value={searchValue} onChange={(e)=>changeValue(e.target.value)} />
</>
  )
}

export default Search;
