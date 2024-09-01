import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure this import is present

export default function Alert(props) {
    return (
      <div style={{height: '50px'}}>
{    props.alert  &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.type}</strong>{props.alert.message}
          
        </div>}
        </div>
    );
}

<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
