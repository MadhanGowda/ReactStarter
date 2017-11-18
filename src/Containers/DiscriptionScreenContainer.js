import React from 'react';

import HeaderBar from '../Components/HeaderBar.js';
import ProductDiscription from '../Components/ProductDiscription.js';
import { ProductData } from '../stub';
import ProductDetails from '../Components/Product';
import ProductListComponent from '../Components/ProductListComponent.js';

const product={
        "id": 3,
        "name": "Very emollient body lotion coconut rescue",
        "slug": "very-emollient-body-lotion-coconut-rescue-32oz",
        "price": 0.0,
        "related_products": [
            {
        "id": 1,
        "name": "body in the buff revitalizing scrub",
        "slug": "body-in-the-buff-revitalizing-scrub-grapefruit-walnut-shell-9oz",
        "price": 0.0,
        "description": "To revitalize dull dry skin, this refreshingly fragrant formula first lathers you up then scrubs you down. The biodegradable buffing beads in this hypo-allergenic scrub contain real ground walnut shells. Warning: may cause exceedingly soft, smooth skin.",
        "url": "//hain-albabotanica-services-qa-01.galepartners.com//spree/products/131/original/AL00924_9oz_BITB_Grapefruit_Revializing_Scrub_402x.png?1481793358"
    },
    {
        "id": 2,
        "name": "body in the buff firming scrub",
        "slug": "body-in-the-buff-firming-scrub-espresso-coffee-bean-9oz",
        "price": 0.0,
        "description": "Ground espresso beans exfoliate away impurities while caffeine, coffee seed oil & green coffee bean extract help firm, tighten and tone skin texture.",
    	"url": "//hain-albabotanica-services-qa-01.galepartners.com//spree/products/131/original/AL00924_9oz_BITB_Grapefruit_Revializing_Scrub_402x.png?1481793358"
    },
        ],
        "description": "When your skin gets to the point that it irritates you at every touch, it’s time to smooth on the big kahuna and show discomfort the door. This rich, creamy lotion made with unrefined coconut oil, coconut milk and aloe vera instantly provides potent moisture relief, a hearty dose of antioxidants and a jolt of caffeine-fueled rejuvenation. Intensely hydrating and hypo-allergenic, it’s exactly the rebound relationship your skin needs.",
    	"url": "//hain-albabotanica-services-qa-01.galepartners.com//spree/products/131/original/AL00924_9oz_BITB_Grapefruit_Revializing_Scrub_402x.png?1481793358"
    };
class DiscriptionScreen extends React.Component{
	render(){
		//const item=ProductData;
		return(
			<div>
			<HeaderBar />
			<ProductDiscription produc={product} key={product.id}/>
			<div className="rp">Related Products</div>
			<ProductListComponent prod = {product.related_products} />
			</div>
			);
	}
}
export default DiscriptionScreen;