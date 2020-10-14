import React from "react";

function Alert(props) {
    if(props.alert!==null){
        return (
            <div className={`alert alert-${props.alert.type}`}>
                <i className="fas fa-info-circle"></i> {props.alert.message}
            </div>
                
           )
    }
    else{
        return <></>
    }
 
  
}

export default Alert;
