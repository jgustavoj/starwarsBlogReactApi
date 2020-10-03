import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export class PlanetCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="card">
				<Context.Consumer>
					{({ actions, store }) => {
						return (
							<>
								<img className="card-img-top" src="#" alt="Card image cap" />
								<div className="card-body">
									<h5 className="card-title">{this.props.planet.name}</h5>
									<p className="card-text">
										Some quick example text to build on the card title and make up the bulk of the
										cards content.
									</p>
									<Link to="/details">
										<a href="#" className="btn btn-primary">
											Details
										</a>
									</Link>
								</div>
							</>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}

//validation

PlanetCard.propTypes = {
	planet: PropTypes.object,
	index: PropTypes.number
};

//comments
//line 9 - makes the name dynamic and youre running props as an argument on line 4
//we also have to import the proptypes
