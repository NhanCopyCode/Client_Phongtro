const scrollToTop = () => {
	window.scroll({ top: 0, left: 0, behavior: "smooth" });
};

const scrollToElement = (ref) => {
    console.log('ref', ref);
    if(ref?.current) {
        ref.current.scrollIntoView({ behavior: "smooth", top: 145})
    }
}

export {
    scrollToTop,
    scrollToElement
}