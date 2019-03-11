import React from 'react';

export function Contact(props) {
	return (
		<div className="contact" >
			<div className="grid">
				<h1 className="col md-push-1 lg-push-2"> {props.heading} </h1>
			</div>

			<div className="grid">
				<p className="col sm-12 md-5 lg-3 md-push-1 lg-push-3 contact">
					{props.subheading}
					<a href={"mailto:" + props.mail }className="contact-link">
						{props.mail }
					</a>
				</p>

				<div className="col fluid md-3 lg-2 md-push-1 lg-push-2 button-group">
					<a href={props.instagram} className="button -block">
						Instagram
					</a>
					<a href={props.facebook} className="button -block">
						Facebook
					</a>
				</div>
			</div>
		</div>
	);
}

Contact.defaultProps = {
	facebook: 'https://facebook.com/croqbiot',
	heading: 'Nous contacter',
	instagram: 'https://instagram.com/croqbiot',
	mail: 'croqbiot@gmail.com',
	subheading: 'Ecrivez-nous à'
  };
