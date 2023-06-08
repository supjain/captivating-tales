import { Snackbar,Alert } from "@mui/material";
import { IAlertProps } from "../../Types/AlertType.types";
import { useState } from "react";

const CustomeAlert : React.FC<IAlertProps> = (
    props: IAlertProps
)=>{

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
  props.setOpen(false);
};

    return (
        <Snackbar open={props.open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }} >
         Added Blog Successfully
        </Alert>
       </Snackbar>
    );

}

export default CustomeAlert;
