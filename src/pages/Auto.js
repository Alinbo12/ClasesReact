import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';
import { BotonComponent, FormCarComponent, TableCarComponent } from "../components";

const AutoPage = () => {
    const navigate = useNavigate();
    const GreenSwitch = styled(Switch)(({ theme }) => ({
        '& .MuiSwitch-switchBase.Mui-checked': {
          color: pink[600],
          '&:hover': {
            backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
          },
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
          backgroundColor: pink[600],
        },
      }));
    const handleOnClick = useCallback(
      () => navigate ("/", {}, [navigate]))
      const label = { inputProps: { 'aria-label': 'Color switch demo' } };
    
    return (
        <div>
            <div>
            <div class="container mt-3">
            <div class="row">
                <div class="col">
                    <FormCarComponent/>
                    <GreenSwitch {...label} defaultChecked />
                </div>
            </div>
            </div>
            </div>
            <br/>
            <BotonComponent infoBoton={"ir a Home"} handleOnClick = {handleOnClick}></BotonComponent>
            <hr />
            <div class="row">
                <div class="col">
                    <TableCarComponent/>
                </div>
            </div>
        </div>
    )
}

export default AutoPage;