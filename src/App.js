import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import "./styles.css";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";

const App = () => {
  const [num, setNum] = useState(0);
  const incNum = () => {
    setNum(num + 1);
  };

  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      alert("Limit Reached");
      setNum(0);
    }
  };

  return (
    <div className="main_div">
      <div className="center_div">
        <h1>{num}</h1>
        <div className="btn-div">
          <Tooltip title="Add">
            <Button onClick={incNum} className="green">
              <AddIcon />
            </Button>
          </Tooltip>
          <Tooltip title="Delete" className="red">
            <Button onClick={decNum}>
              <RemoveIcon />
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
export default App;
