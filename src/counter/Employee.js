import React from 'react'

const Employee = (props) => {
    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">Employee Details</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.emp.name}</h6>
                    <p className="card-text">{props.emp.subject}</p>

                </div>
            </div>
        </div>
    )
}

export default Employee