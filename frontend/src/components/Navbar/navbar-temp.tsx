import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import React from "react";
import './navbar.css';


const SubNav: React.FC = (): ReactElement => {
    return(
        <nav>
          <ul>
            <li>
              <Link to="/fetch">
                <Button variant="contained" color="primary">Fetch API</Button>
              </Link>
            </li>
            <li>
              <Link to="/axios">
                <Button variant="contained" color="primary">Axios</Button>
              </Link>
            </li>
            <li>
              <Link to="/test">
                <Button variant="contained" color="primary">Damn</Button>
              </Link>
            </li>
          </ul>
        </nav>
    )
};

export default SubNav;