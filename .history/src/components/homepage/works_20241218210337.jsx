import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./facebook.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Zendit</div>
							<div className="work-subtitle">
								Frontend Engineer
							</div>
							<div className="work-duration">2024 - Present</div>
						</div>

						<div className="work">
							<img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Nubis Logistics</div>
							<div className="work-subtitle">
								Full Stack Engineer
							</div>
							<div className="work-duration">2023 - 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
