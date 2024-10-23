import React from 'react'

export default function Alert(props) {
    return (
        props.alert &&<div class="alert alert-warning alert-dismissible fade show" role="alert">
            {/* <strong>Holy guacamole!</strong> You should check in on some of those fields below. */}
            <strong>{props.alert.type}</strong>  {props.alert.msg}
        </div>
    )
}
