import React from "react";

function article_1() {
	return {
		date: "7 May 2023",
		title: "Can you hack?",
		description: "Become a problem solver",
		keywords: ["Leadership", "Coding", "Opudu Tamarapreye", "Software"],
		link: "https://example.com/article-1", // Add the link here
		body: (
			<React.Fragment>
				<div className="article-content">
					<a
						href="https://splashdev.hashnode.dev/can-you-hack"
						target="_blank"
						rel="noopener noreferrer"
						className="article-link"
					>
						Read the full article: Can you hack?
					</a>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "7 May 2023",
		title: "Artificial Intelligence in Healthcare",
		description:
			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
