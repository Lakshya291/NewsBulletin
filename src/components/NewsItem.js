import React, { Component } from "react";

export class NewsItem extends Component {
	render() {
		let { title, description, imageUrl, newsUrl } = this.props;
		return (
			<div className="my">
				<div className="card" style={{ height: "420px" }}>
					<img
						src={
							imageUrl
								? imageUrl
								: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
						}
						className="card-img-top img-fluid"
						style={{ height: "185px" }}
						alt="..."
					/>
					<div className="card-body d-flex align-items-start flex-column">
						<h5
							className="card-title"
							style={{ maxHeight: "25px", overflowY: "Hidden" }}
						>
							{" "}
							{title}
						</h5>
						<p
							className="card-text"
							style={{ maxHeight: "94px", overflowY: "Hidden" }}
						>
							{description}
						</p>
						<a
							href={newsUrl}
							target="_blank"
							className="btn btn-sm btn-dark mt-auto p-2"
							rel="noreferrer"
						>
							Read More...
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default NewsItem;
