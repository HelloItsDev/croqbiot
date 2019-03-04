import React from 'react';

const Product = (props) => (
		<div className="section product-section">
			<div className="grid">
				<div className="col sm-11 sm-push-1 md-6 md-push-0 lg-5 lg-push-1">
					<img src={
							!!props.image.img.childImageSharp
							? props.image.img.childImageSharp.fluid.src
							: props.image.img
							}
						 alt={props.image.alt} 
						 />
					
				</div>

				<div className="col fluid md-6 lg-5">
					<h1 style={{ marginTop: 0 }}> {props.title} </h1>
					<h3 className="color-salmon1">{props.subTitle} </h3>

					{props.soldout && (
						<div>
							<h3 className="color-salmon1 yellow"> {props.status} </h3>
							<p dangerouslySetInnerHTML={{ __html: props.description}}>
							</p>
							<p className="postcode-message" dangerouslySetInnerHTML={{ __html: props.message}}>
							</p>
						</div>
					)}

				</div>
			</div>
		</div>
)

export default Product;


