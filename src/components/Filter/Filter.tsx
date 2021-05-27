import React from "react";
import { filter_input, filter_wrapper } from "./FilterStyle";

// Redux
import { Dispatch } from "redux";

import { useSelector, useDispatch } from "react-redux";
import contactsActions from "../../redux/contacts/contacts-actions";
import contactsSelectors from "../../redux/contacts/contacts-selectors";

// Material
import Input from "@material-ui/core/Input";

type TEvent = React.ChangeEvent<HTMLInputElement>;

const Filter: React.FC = () => {
  const filter = useSelector(contactsSelectors.filterSelector);

  const dispatch = useDispatch<Dispatch>();

  const handleInputChange = (event: TEvent) => {
    return dispatch(contactsActions.onChangeFilter(event.target.value));
  };
  return (
    <div style={filter_wrapper}>
      <Input
        type="text"
        placeholder="Search contact"
        name="filter"
        value={filter}
        onChange={handleInputChange}
        style={filter_input}
      />
    </div>
  );
};

export default Filter;
