import React, { useState } from "react";

export default function Navbar(props) {
	const [dstyles, setDStyles] = useState({
		backgroundColor: "#F0F0F0",
		padding: "0px",
		border: "4px solid #F0F0F0",
	});
	const [wstyles, setWStyles] = useState({
		backgroundColor: "#272841",
		padding: "0px",
		border: "4px solid #272841",
	});
	var l = {
		color: "#FFFFFF",
		padding: "0px",
		margin: "0x",
	};
	var d = {
		color: "#000000",
		padding: "0px",
		margin: "0x",
	};
	return (
		<nav
			class="navbar navbar-expand-lg bg-body-tertiary "
			style={props.mode ? dstyles : wstyles}
		>
			<div
				class="container-fluid "
				style={props.mode ? dstyles : wstyles}
			>
				<a class="navbar-brand " href="#">
					<div style={props.mode ? d : l}>{props.title}</div>
				</a>
				<button
					class="navbar-toggler "
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon "></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div class="navbar-nav ">
						<a
							class="nav-link active "
							aria-current="page"
							href="/"
						>
							<div style={props.mode ? d : l}>{props.home}</div>{" "}
						</a>
						<a
							class="nav-link "
							href="/About"
						>
							<div style={props.mode ? d : l}>{props.about}</div>{" "}
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}
