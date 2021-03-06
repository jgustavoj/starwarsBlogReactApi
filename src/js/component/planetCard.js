import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import planet from "../../img/planet.jpg";

export class PlanetCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<Context.Consumer>
				{({ actions, store }) => {
					return (
						<>
							<div className="card ml-3 mr-3" style={{ minWidth: "18rem" }}>
								<img className="card-img-top" src={planet} />
								<div className="card-body">
									<h5 className="card-title">{this.props.planet.name}</h5>
									<p className="card-text">
										Some quick example text to build on the card title and make up the bulk of the
										cards content.
									</p>
									<Link to={`/details/${this.props.index + 1}`}>
										<a href="#" className="btn btn-primary">
											Details
										</a>
									</Link>
									<button onClick={() => actions.addFavorite(this.props.planet.name)}>
										<i className="far fa-heart" />
									</button>
								</div>
							</div>
						</>
					);
				}}
			</Context.Consumer>
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
