import React, { useState } from "react";
import { BsYoutube } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import "../index.css";

export default function Header() {
	const [text, setText] = useState("");
	const { keyword } = useParams();
	const navigate = useNavigate();

	const handleChange = (e) => {
		setText(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`/videos/${text}`);
	};

	useEffect(() => setText(keyword || ""), [keyword]);

	return (
		<header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
			<Link to="/" className="flex items-center">
				<BsYoutube className="text-4xl mt-2 text-brand" />
				<h1 className="font-bold ml-2 text-3xl">Youtube</h1>
			</Link>

			<form
				onSubmit={handleSubmit}
				className="w-full flex justify-center"
			>
				<input
					placeholder="Search..."
					type="text"
					value={text}
					onChange={handleChange}
					className="w-7/12 p-2 outline-none bg-black text-gray-50"
				/>
				<button className="bg-zinc-600 p-4">
					<BsSearch />
				</button>
			</form>
		</header>
	);
}
