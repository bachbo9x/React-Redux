import React, { Component } from 'react'
import ProductList from 'components/ProductList/ProductList'
import ProductItems from 'components/ProductItems/ProductItem'

export default class ProductListPage extends Component {
    render() {
        let products = []
        return (
            <>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <button type="button" className="btn btn-info">
                        Thêm sản phẩm
                    </button>
                    <ProductList>
                        {this.showProducts(products)}
                    </ProductList>
                </div>
            </>
        )
    }
    showProducts(products){
        let result = null
        if(products.length > 0){
            result = products.map((product, index) =>{
                return(
                    <ProductItems
                        key={index}
                        product={product}
                        index = {index}
                    />
                )
            })
        }
        return result
    }
}