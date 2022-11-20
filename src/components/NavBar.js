/* eslint-disable jsx-a11y/anchor-is-valid */
// import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
	static propTypes = {};

	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<div className="container-fluid">
						<Link className="navbar-brand" to="/">
							NewsBulletin
						</Link>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarNav">
							<ul className="navbar-nav ">
								<li className="nav-item">
									<Link className="nav-link" to="/business">
										Business
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/entertainment">
										Entertainment
									</Link>
								</li>

								<li className="nav-item">
									<Link className="nav-link" to="/health">
										Health
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/science">
										Science
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/sports">
										Sports
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/technology">
										Technology
									</Link>
								</li>
							</ul>
							{/* <form className="d-flex" role="search">
								<input
									className="form-control me-2"
									type="search"
									placeholder="Search"
									aria-label="Search"
								/>
								<button className="btn btn-outline-success" type="submit">
									Search
								</button>
							</form> */}
						</div>
					</div>
				</nav>
			</div>
		);
	}
}
