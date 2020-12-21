import React, { Component } from 'react'

export default class ProductItems extends Component {
    render() {
        let { product, index } = this.props
        let statusName = product.status ? 'Còn hàng' : 'Hết hàng'
        let statusClass = product.status ? 'warning' : 'default'
        return (
            <>
                <tr>
                    <td>{index + 1}</td>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>
                        <span className={`label label-${statusClass}`}>{statusName}</span>
                    </td>
                    <td>
                        <button type="button" className="btn btn-success">Edit</button>
                        <button type="button" className="btn btn-danger">Delete</button>
                    </td>
                </tr>
            </>
        )
    }
}