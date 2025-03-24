const formatDate = (date) => {
    return new Date(date)
		.toLocaleDateString("en-GB")
		.replace(/\//g, "-");
}

export default formatDate;