import { useEffect, useState } from "react";
import { WHITELIST_KEY } from "../utils/constants";

const useWhitelist = () => {
	const [whitelist, setWhitelist] = useState(() => {
		try {
			const stored = localStorage.getItem(WHITELIST_KEY);
			return stored ? JSON.parse(stored) : [];
		} catch (error) {
			console.error("Error parsing whitelist from localStorage:", error);
			return [];
		}
	});

	// Sync state with localStorage changes (optional, for debugging)
	useEffect(() => {
		console.log("Current whitelist state:", whitelist);
	}, [whitelist]);

	const addToWhitelist = (post) => {
		// Validate post
		if (!post || !post.id) {
			console.error("Invalid post object:", post);
			return;
		}

		setWhitelist((prevWhitelist) => {
			console.log("Adding post:", post);
			console.log("Previous whitelist:", prevWhitelist);

			// Ensure prevWhitelist is an array
			const currentWhitelist = Array.isArray(prevWhitelist)
				? prevWhitelist
				: [];

			// Check if post already exists
			if (!currentWhitelist.find((item) => item.id === post.id)) {
				const newWhitelist = [...currentWhitelist, post];
				console.log("New whitelist:", newWhitelist);

				try {
					localStorage.setItem(
						WHITELIST_KEY,
						JSON.stringify(newWhitelist)
					);
				} catch (error) {
					console.error("Error saving to localStorage:", error);
				}
				return newWhitelist;
			} else {
				console.log("Post already in whitelist");
				return currentWhitelist;
			}
		});
	};

	const removeFromWhitelist = (post) => {
		if (!post || !post.id) {
			console.error("Invalid post object for removal:", post);
			return;
		}

		setWhitelist((prevWhitelist) => {
			const currentWhitelist = Array.isArray(prevWhitelist)
				? prevWhitelist
				: [];
			const newWhitelist = currentWhitelist.filter(
				(item) => item.id !== post.id
			);
			console.log("Removed post, new whitelist:", newWhitelist);

			try {
				localStorage.setItem(
					WHITELIST_KEY,
					JSON.stringify(newWhitelist)
				);
			} catch (error) {
				console.error("Error saving to localStorage:", error);
			}
			return newWhitelist;
		});
	};

	return {
		whitelist,
		addToWhitelist,
		removeFromWhitelist,
	};
};

export default useWhitelist;
