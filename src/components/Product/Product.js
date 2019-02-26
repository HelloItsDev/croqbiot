import React from 'react';

import productImg from '../../img/product.png';

export class Product extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			userHasInteracted: false,
			postcode: '',
			outcode: '',
			isValid: false,
			isDeliverable: false
		};
	}



	render() {
		return (
			<div className="section product-section">
				<div className="grid">
					<div className="col sm-11 sm-push-1 md-6 md-push-0 lg-5 lg-push-1">
						<img src={productImg} />
					</div>

					<div className="col fluid md-6 lg-5">
						<h1 style={{ marginTop: 0 }}>Bake-at-home frozen pack.</h1>
						<h3 className="color-salmon1">15 cheesy balls – £5.</h3>

						{this.props.soldout && (
							<div>
								<h3 className="color-salmon1 yellow">CLOSED.</h3>
								<p>
									If you'd like to read more about our closure,{' '}
									<a href="https://medium.com/@OiDonaRita/time-to-say-goodbye-e56803c3f084">
										read our goodbye letter
									</a>
									.
								</p>
								<p className="postcode-message">
									If you really need some Pao de Queijo in your life, Rita might be able
									to offer a catering option. You can contact her at{' '}
									<a href="mailto:ritaduarte@hotmail.co.uk">ritaduarte@hotmail.co.uk</a>.
								</p>
							</div>
						)}

					</div>
				</div>
			</div>
		);
	}
}
