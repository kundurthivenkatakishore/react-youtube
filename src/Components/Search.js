import { IconButton, Input } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import React, { useState } from "react";

function Search({ onFormSubmit }) {
	const [term, setTerm] = useState("");

	const submit = (e) => {
		e.preventDefault();
		onFormSubmit(term);
	}

	return (
		<header>
			<form onSubmit={submit}>
				<Input
					type='text'
					placeholder='Search'
					style={{ flex: "1" }}
					value={term}
					onChange={(e) => setTerm(e.target.value)}
				/>
				<IconButton type='submit'>
					<SearchOutlined />
				</IconButton>
			</form>
		</header>
	);
}

export default Search;
