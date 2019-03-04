import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { Aux } from '../utility'

export class FakeImg extends React.Component {

	state = { inView: false };

	handleChange = isVisible => {
		this.setState({ inView: isVisible });
	};

	render() {
		console.log(!this.props.indexable)
		return (
			<Aux>
				{!this.props.indexable && (
					<VisibilitySensor
						onChange={this.handleChange}
						partialVisibility
						active={!this.state.inView}>
						
							<div
							className={`fake-img ${this.props.className} ${
								this.state.inView ? 'is-loaded' : ''
							}`}
							style={{ backgroundImage: `url(${this.props.img})` }}
						/>
					</VisibilitySensor>
				)}
				{!!this.props.indexable && (
					<VisibilitySensor
						onChange={this.handleChange}
						partialVisibility
						active={!this.state.inView}>
							<img 
							src={this.props.img} 
							alt={this.props.alt}
							className={`${
								this.state.inView ? 'is-loaded' : ''
							}`} />
					</VisibilitySensor>
				)}
			</Aux>
			
		);
	}
}
