
import PropTypes from 'prop-types';
import Filter from "./Filter";
import ListNewPost from "./ListNewPost";


function Sidebar({ isShowFilter = true, isShowListNewPost = true}) {

	return (
		<>
			{isShowFilter && <Filter />}
			{isShowListNewPost && <ListNewPost />}
		</>
	);
}

Sidebar.proType = {
	isShowFilter: PropTypes.bool,
	isShowListNewPost: PropTypes.bool,
};

export default Sidebar;
