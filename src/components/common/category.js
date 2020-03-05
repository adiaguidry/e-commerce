import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";

const Category = () => {
  const handleChange = name => e => {
    console.log(name, e.target.checked);
  };
  return (
    <div className="category-layout">
      <h4>
        Filter:
        <span>
          <small className="clear-category">Clear All</small>
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
                value="Black and White"
                onChange={handleChange("Black and White")}
              />
            }
            label="Black and White"
          />
          <FormControlLabel
            control={
              <Checkbox value="Floral" onChange={handleChange("Floral")} />
            }
            label="Floral"
          />
          <FormControlLabel
            control={
              <Checkbox value="Abstract" onChange={handleChange("Abstract")} />
            }
            label="Abstract"
          />
          <FormControlLabel
            control={
              <Checkbox value="Colorful" onChange={handleChange("Colorful")} />
            }
            label="Coloful"
          />
          <FormControlLabel
            control={
              <Checkbox value="Nature" onChange={handleChange("Nature")} />
            }
            label="Nature"
          />
        </FormGroup>
      </div>
    </div>
  );
};

export default Category;
