import PropTypes from "prop-types";
import { memo, useEffect, useState } from "react";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Button from "./Button";
import { useSelector } from "react-redux";
import {
	createSearchParams,
	useNavigate,
	useSearchParams,
} from "react-router-dom";

function Pagination({ currentPage }) {
	const [searchParams] = useSearchParams();
	const { count, posts } = useSelector((state) => state.post);
	const [arrPage, setArrPage] = useState([]);
	const [hideEnd, setHideEnd] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		const max = Math.floor(count / posts.length);
		const start = currentPage - 2 <= 0 ? 0 : currentPage - 2;
		const end = currentPage + 2 >= max ? max : currentPage + 2;
	const arr = [];
		for (let i = start; i <= end; i++) {
			arr.push(i);
		}

		end === max ? setHideEnd(true) : setHideEnd(false);

		setArrPage(arr);
	}, [count, posts, currentPage]);

	const handleNavigatePageNumber = (currentActivePage) => {
		navigate({
			pathname: "/",
			search: createSearchParams({
				page: +currentActivePage,
			}).toString(),
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
			{arrPage.length > 0 &&
				arrPage.map((item, index) => {
					return (
						<Button
							number={+item}
							key={index}
							currentPage={Number(searchParams.get("page")) || 0}
							activeClass={"!bg-redColor font-medium text-white"}
							rounded="rounded-sm"
							shadow="shadow-sm"s
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
								Math.floor(count / posts.length)
							)
						}
					></Button>
				</>
			)}
			<Button
				disabled={+currentPage === Math.floor(count / posts.length)}
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
