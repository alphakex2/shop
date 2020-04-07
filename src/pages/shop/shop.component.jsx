import React, { useState } from "react"

import StoreData from "./shop-data"
import CollectionPreview from './../../components/collection-preview/collection-preview.component';

const ShopPage = () => {
  const [collections] = useState(StoreData)
  return (
    <div className="shop-page">
      {collections.map(({id, ...otherCollectionProps}) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
}

export default ShopPage
