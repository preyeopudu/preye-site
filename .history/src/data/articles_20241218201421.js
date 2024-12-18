import React from "react";

function article_1() {
	return {
		date: "18 Dec 2023",
		title: "Can you hack?",
		description: "Become a problem solver",
		keywords: ["Leadership", "Coding", "Opudu Tamarapreye", "Software"],
		link: "https://splashdev.hashnode.dev/can-you-hack", // Add the link here
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
		date: "29 Dec 2023",
		title: "UseRef! What the Heck Is It? ",
		description:
			"Understand the useref hook.",
		style: ``,
		keywords: [
			"React",
			"HOOKS",
			"FRONT END",
			"OPUDU TAMARAPREYE",
		],
link: "https://splashdev.hashnode.dev/can-you-hack", // Add the link here
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
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
