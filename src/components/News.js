import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
export class News extends Component {
	static defaultProps = {
		country: "in",
		pageSize: 21,
		category: "general",
	};
	static propTypes = {
		country: PropTypes.string,
		pageSize: PropTypes.number,
		category: PropTypes.string,
	};
	constructor() {
		super();
		this.state = {
			articles: [],
			loading: false,
			page: 1,
		};
	}
	async componentDidMount() {
		let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=393a9db86e494ca3a9760e22b8854313&page=1&pagesize=${this.props.pageSize}`;
		this.setState({ loading: true });
		let data = await fetch(url);
		let parsedData = await data.json();
		this.setState({
			articles: parsedData.articles,
			totalResults: parsedData.totalResults,
			loading: false,
		});
	}

	handlePrevClick = async () => {
		let url = `https://newsapi.org/v2/top-headlines?country=${
			this.props.country
		}&category=${
			this.props.category
		}&apiKey=393a9db86e494ca3a9760e22b8854313&page=${
			this.state.page - 1
		}&pagesize=${this.props.pageSize}`;
		this.setState({ loading: true });
		let data = await fetch(url);
		let parsedData = await data.json();

		this.setState({
			articles: parsedData.articles,
			page: this.state.page - 1,
			loading: false,
		});
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	};

	handleNextClick = async () => {
		let url = `https://newsapi.org/v2/top-headlines?country=${
			this.props.country
		}&category=${
			this.props.category
		}&apiKey=393a9db86e494ca3a9760e22b8854313&page=${
			this.state.page + 1
		}&pagesize=${this.props.pageSize}`;
		this.setState({ loading: true });
		let data = await fetch(url);
		let parsedData = await data.json();

		this.setState({
			articles: parsedData.articles,
			page: this.state.page + 1,
			loading: false,
		});
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	};
	render() {
		return (
			<div className="container my-3">
				<h1 className="text-center my-s">NewsBulletin - Top Headlines</h1>
				{this.state.loading && <Spinner />}
				<div className="row">
					{!this.state.loading &&
						this.state.articles.map((ele) => {
							return (
								<div className="col-md-4 my-2" key={ele.url}>
									<NewsItem
										title={ele.title}
										description={ele.description}
										imageUrl={ele.urlToImage}
										newsUrl={ele.url}
									/>
								</div>
							);
						})}
				</div>
				<div className="d-flex container justify-content-between my-5">
					<button
						disabled={this.state.page <= 1}
						type="button"
						className="btn btn-dark"
						onClick={this.handlePrevClick}
					>
						&larr; Previous
					</button>
					<button
						disabled={
							this.state.page + 1 >
							Math.ceil(this.state.totalResults / this.props.pageSize)
						}
						type="button"
						className="btn btn-dark"
						onClick={this.handleNextClick}
					>
						Next &rarr;
					</button>
				</div>
			</div>
		);
	}
}

export default News;
