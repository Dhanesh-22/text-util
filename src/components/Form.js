import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Alert from "./Alert";
const { SpeechSynthesisUtterance, speechSynthesis } = window;

export default function Form(props) {
	const [text, setText] = useState("");
	const [characterCount, setCharacterCount] = useState(0);
	const [wordCount, setWordCount] = useState(0);
	const [timeTaken, setTimeTaken] = useState(0);
	const [showAlert, setShowAlert] = useState(false);
	const [alertText, setAlertText] = useState("");

	const upper = () => {
		let newtext = text.toUpperCase();
		setText(newtext);
		setAlertText("converted to upper case");
		setShowAlert(true);
		dismissAlertAfterDelay();
	};

	const lower = () => {
		let newtext = text.toLowerCase();
		setText(newtext);
		setAlertText("converted to lower case");
		setShowAlert(true);
		dismissAlertAfterDelay();
	};

	const clear = () => {
		let newtext = "";
		setText(newtext);
		setAlertText("text cleared");
		setShowAlert(true);
		dismissAlertAfterDelay();
	};

	const space = () => {
		let newtext = text.replace(/ +/g, " ");
		newtext = newtext.replace(/(\n\s*)+/g, "\n");
		setText(newtext);
		setAlertText("removed extra spaces");
		setShowAlert(true);
		dismissAlertAfterDelay();
	};

	const speech = () => {
		const utterance = new SpeechSynthesisUtterance(text);
		speechSynthesis.speak(utterance);
		setAlertText("playing text to speech");
		setShowAlert(true);
		dismissAlertAfterDelay();
	};

	const copy = () => {
		navigator.clipboard.writeText(text);
		setAlertText("text copied to clipboard");
		setShowAlert(true);
		dismissAlertAfterDelay();
	};

	useEffect(() => {
		setCharacterCount(text.length);
	}, [text]);

	useEffect(() => {
		const newText = text.trim();
		setWordCount(newText.split(/\s+/).filter(Boolean).length);
		setTimeTaken(newText.split(/\s+/).filter(Boolean).length / 200);
	}, [text]);

	const handelonchange = (event) => {
		const newText = event.target.value;
		setText(newText);
	};

	const dismissAlertAfterDelay = () => {
		setTimeout(() => {
			setShowAlert(false);
			setAlertText("");
		}, 2500);
	};
	const [dstyles, setDStyles] = useState({
		color: "#272841",
		backgroundColor: "#F0F0F0",
	});
	const [wstyles, setWStyles] = useState({
		color: "#F0F0F0 ",
		backgroundColor: "#272841",
	});
	const [ftext, setFText] = useState();
	const [rtext, setRText] = useState();
	const [noOfmatch, setNoOfmatch] = useState();

	const fhandle = (event) => {
		const newText = event.target.value;
		setFText(newText);
	};

	const rhandle = (event) => {
		const newText = event.target.value;
		setRText(newText);
	};
	const rclick = () => {
		setAlertText("string replaced");
		setShowAlert(true);
		dismissAlertAfterDelay();
		try {
			const searchTerm = ftext.toLowerCase();
			const modifiedText = text.replace(
				new RegExp(searchTerm, "gi"),
				rtext
			);
			setText(modifiedText);
		} catch (error) {}
	};
	const fclick = () => {
		try {
			const searchTerm = ftext.toLowerCase();
			const newMatches = text.match(new RegExp(searchTerm, "gi"));
			setNoOfmatch(newMatches.length);
			setAlertText(`Found ${newMatches.length} matching strings`);
			setShowAlert(true);
			dismissAlertAfterDelay();
		} catch (error) {}
	};
	


	return (
		<>
			<div class=" container  a">
				{" "}
				{showAlert && <Alert alertText={alertText} />}
			</div>

			<div className=" text-center">
				<div className="container c flex-grow-1 d-flex r my-1 f i">
					<textarea
						className="form-control"
						id="exampleFormControlTextarea1"
						rows="7"
						value={text}
						onChange={handelonchange}
						style={props.mode ? dstyles : wstyles}
					></textarea>
				</div>

				<p className="mx-1 my-1">
					Character Count: {characterCount} - Word Count: {wordCount}
				</p>
				<p className="mx-1 my-1"></p>
				<p className="mx-1 my-1">time to read in min: {timeTaken}</p>

				<div class="container c flex-grow-1 d-flex u">
					<input
						style={props.mode ? dstyles : wstyles}
						type="text"
						class="rounded-end form-control mx-1 my-1 d"
						aria-label="Recipient's username"
						aria-describedby="basic-addon2 "
						onChange={rhandle}
					/>
					<input
						style={props.mode ? dstyles : wstyles}
						type="text"
						class="rounded-end form-control mx-1 my-1 d"
						aria-label="Recipient's username"
						aria-describedby="basic-addon2 "
						onChange={fhandle}
					/>
				</div>

				<div className="flex-grow-1 d-flex flex-wrap">
					<div className="container c flex-grow-1 d-flex u">
						<button
							onClick={rclick}
							type="button"
							class="btn btn-primary mx-1 my-1 d"
							disabled={!text || !ftext}
						>
							replace
						</button>
						<button
							onClick={fclick}
							type="button"
							class="btn btn-primary rounded-start d mx-1btn btn-primary mx-1 my-1 d "
							disabled={!text}
						>
							find
						</button>
					</div>
					<div className="container c flex-grow-1 d-flex u">
						<button
							type="button"
							className="btn btn-primary mx-1 my-1 d"
							onClick={upper}
							disabled={!text}
						>
							upper case
						</button>
						<button
							type="button"
							className="btn btn-primary mx-1 my-1 d "
							onClick={lower}
							disabled={!text}
						>
							lower case
						</button>
					</div>

					<div className="container c flex-grow-1 d-flex u">
						<button
							type="button"
							className="btn btn-primary mx-1 my-1 d "
							onClick={copy}
							disabled={!text}
						>
							Copy
						</button>
						<button
							type="button"
							className="btn btn-primary mx-1 my-1 d "
							onClick={speech}
							disabled={!text}
						>
							speech
						</button>
					</div>
					<div className="container c flex-grow-1 d-flex u">
						<button
							type="button"
							className="btn btn-primary mx-1 my-1 d  "
							onClick={space}
							disabled={!text}
						>
							trim
						</button>
						<button
							type="button"
							className="btn btn-primary mx-1 my-1 d  "
							onClick={clear}
							disabled={!text}
						>
							Clear
						</button>
					</div>
				</div>
				<div className="g"></div>
			</div>
		</>
	);
}

Form.propTypes = {
	texttitle: PropTypes.string.isRequired,
};
