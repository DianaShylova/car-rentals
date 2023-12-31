import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "redux/filterSlice";
import { getFilter } from "redux/selectors";
import css from "./Filter.module.css";

export const Filter = () => {
  const dispatch = useDispatch()
  const filter = useSelector(getFilter);
  return (
    <input
      className={css.filter_shape}      
      value={filter}      
      onChange={(event) => dispatch(setFilter(event.target.value.trim()))} type="text" name="filter" />
  );
};