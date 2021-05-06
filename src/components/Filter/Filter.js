import { filter_input } from "./Filter.module.scss";

// Redux
import { useSelector, useDispatch } from "react-redux";
import contactsActions from "../../redux/contacts/contacts-actions";
import contactsSelectors from "../../redux/contacts/contacts-selectors";

// Material
import Input from "@material-ui/core/Input";

const Filter = () => {
  const filter = useSelector(contactsSelectors.filterSelector);

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    return dispatch(contactsActions.onChangeFilter(event.target.value));
  };
  return (
    <div>
      <Input
        type="text"
        placeholder="Search contact"
        name="filter"
        value={filter}
        onChange={handleInputChange}
        className={filter_input}
      />
    </div>
  );
};

export default Filter;
