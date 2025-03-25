import PropTypes from "prop-types";
import { memo, useEffect, useState } from "react";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Button from "./Button";
import { useSelector } from "react-redux";
import {
	createSearchParams,
	useLocation,
	useNavigate,
	useSearchParams,
} from "react-router-dom";
const postPerPage = +import.meta.env.VITE_NUMBER_OF_POSTS_PER_PAGE;

function Pagination({ currentPage }) {
	const location = useLocation();
	const [searchParams] = useSearchParams();
	const { count, posts } = useSelector((state) => state.post);
	const [arrPage, setArrPage] = useState([]);
	const [hideEnd, setHideEnd] = useState(false);
	const [hideStart, setHideStart] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		const max = Math.ceil(count / postPerPage);
		const start = currentPage - 2 <= 0 ? 0 : currentPage - 2;
		const end = currentPage + 2 >= max - 1 ? max - 1 : currentPage + 2;
		const arr = [];
		for (let i = start; i <= end; i++) {
			arr.push(i);
		}
		start === 0 ? setHideStart(true) : setHideStart(false);
		end === max - 1 ? setHideEnd(true) : setHideEnd(false);
		setArrPage(arr);
	}, [count, posts, currentPage]);

	const handleNavigatePageNumber = (currentActivePage) => {
		const searchParams = new URLSearchParams(location.search);

		searchParams.set("page", currentActivePage);

		const objSearch = Object.fromEntries(searchParams.entries());
		navigate({
			pathname: location.pathname,
			search: createSearchParams(objSearch).toString(),
		});
	};
	return (
		<div className="flex items-center justify-center gap-1">
			<Button
				disabled={+currentPage === 0}
				number={+currentPage - 1}
				rounded="rounded-sm"
				shadow="shadow-sm"
				textColor="text-text"
				fontSize="text-sm"
				bgColor="bg-white"
				hoverEffect="none"
				iconLeft={<FaAngleLeft />}
				onClick={() => handleNavigatePageNumber(+currentPage - 1)}
			>
				Trang trước
			</Button>
			{!hideStart && (
				<>
					<Button
						rounded="rounded-sm"
						shadow="shadow-sm"
						textColor="text-text"
						fontSize="text-sm"
						bgColor="bg-white"
						hoverEffect="none"
					>
						...
					</Button>

					<Button
						rounded="rounded-sm"
						shadow="shadow-sm"
						textColor="text-text"
						fontSize="text-sm"
						bgColor="bg-white"
						hoverEffect="none"
						width={"w-[48px]"}
						height={"h-[36px]"}
						iconRight={<FaAngleLeft />}
						onClick={() => handleNavigatePageNumber(0)}
					></Button>
				</>
			)}
			{arrPage.length > 0 &&
				arrPage.map((item, index) => {
					return (
						<Button
							number={+item}
							key={index}
							currentPage={Number(searchParams.get("page")) || 0}
							activeClass={"!bg-redColor font-medium text-white"}
							rounded="rounded-sm"
							shadow="shadow-sm"
							s
							textColor="text-text"
							fontSize="text-sm"
							bgColor="bg-white"
							hoverEffect="none"
							onClick={() => handleNavigatePageNumber(item)}
						>
							{String(item)}
						</Button>
					);
				})}
			{!hideEnd && (
				<>
					<Button
						rounded="rounded-sm"
						shadow="shadow-sm"
						textColor="text-text"
						fontSize="text-sm"
						bgColor="bg-white"
						hoverEffect="none"
					>
						...
					</Button>

					<Button
						rounded="rounded-sm"
						shadow="shadow-sm"
						textColor="text-text"
						fontSize="text-sm"
						bgColor="bg-white"
						hoverEffect="none"
						width={"w-[48px]"}
						height={"h-[36px]"}
						iconRight={<FaAngleRight />}
						onClick={() =>
							handleNavigatePageNumber(
								Math.ceil(count / postPerPage) - 1
							)
						}
					></Button>
				</>
			)}
			<Button
				disabled={+currentPage === Math.ceil(count / postPerPage) - 1}
				number={+currentPage + 1}
				activeClass={"!bg-redColor font-medium text-white"}
				rounded="rounded-sm"
				shadow="shadow-sm"
				textColor="text-text"
				fontSize="text-sm"
				bgColor="bg-white"
				hoverEffect="none"
				iconRight={<FaAngleRight />}
				onClick={() => handleNavigatePageNumber(+currentPage + 1)}
			>
				Trang sau
			</Button>
		</div>
	);
}

Pagination.propTypes = {
	currentPage: PropTypes.string,
};

export default memo(Pagination);
