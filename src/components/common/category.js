import React, { useState, useEffect } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import * as createAction from "../../actions/productActions";
import { formatMs } from "@material-ui/core";

const Category = () => {
  const [category, setCategory] = useState([]);
  const [selected, setSelected] = useState({
    blackAndWhite: false,
    floral: false,
    abstract: false,
    colorful: false,
    nature: false
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createAction.setCategory(category));
  }, [category]);

  const handleChange = (name, checked) => {
    // if checked add to array
    if (checked) {
      setCategory([...category, name]);
      setSelected({ ...selected, [name]: true });
    } else if (!checked && name) {
      const list = category.filter(catName => catName !== name);
      setCategory([...list]);
      setSelected({ ...selected, [name]: false });
    }
  };

  const handleClearAll = () => {
    setSelected({
      blackAndWhite: false,
      floral: false,
      abstract: false,
      colorful: false,
      nature: false
    });
    setCategory([]);
  };

  return (
    <div className="category-layout">
      <h4>
        Filter:
        <span>
          <small
            className="clear-category"
            style={{ cursor: "pointer" }}
            onClick={() => handleClearAll()}
          >
            Clear All
          </small>
        </span>
      </h4>
      <div className="category">
        <div>
          <h4>Category</h4>
        </div>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                name="Black and White"
                value="Black and White"
                checked={selected.blackAndWhite}
                onClick={e => handleChange("blackAndWhite", e.target.checked)}
              />
            }
            label="Black and White"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="Floral"
                checked={selected.floral}
                onClick={e => handleChange("floral", e.target.checked)}
              />
            }
            label="Floral"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="Abstract"
                checked={selected.abstact}
                onClick={e => handleChange("abstract", e.target.checked)}
              />
            }
            label="Abstract"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="Colorful"
                checked={selected.colorful}
                onClick={e => handleChange("colorful", e.target.checked)}
              />
            }
            label="Coloful"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="Nature"
                checked={selected.nature}
                onClick={e => handleChange("nature", e.target.checked)}
              />
            }
            label="Nature"
          />
        </FormGroup>
      </div>
    </div>
  );
};

export default Category;
