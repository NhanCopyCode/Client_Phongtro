import { CiCircleRemove, CiLocationOn, CiSearch } from "react-icons/ci";
import { Button, SearchItem } from "../../components";
import { GrNext } from "react-icons/gr";
import { IoPricetagsOutline } from "react-icons/io5";
import { FaRegSquare } from "react-icons/fa";

function SearchBottom() {
	return (
		<div className="mt-[100px] pt-4">
			<div
				className="w-5xl max-w-[100%] h-auto p-2 mx-auto rounded-xl bg-[#febb02] 
			grid  gap-4 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1"
			>
				<SearchItem
					iconStart={<CiSearch />}
					iconEnd={<CiCircleRemove />}
					textBold={true}
				>
					Phòng trọ, nhà trọ
				</SearchItem>
				<SearchItem iconStart={<CiLocationOn />} iconEnd={<GrNext />}>
					Toàn quốc
				</SearchItem>
				<SearchItem
					iconStart={<IoPricetagsOutline />}
					iconEnd={<GrNext />}
				>
					Chọn giá
				</SearchItem>
				<SearchItem iconStart={<FaRegSquare />} iconEnd={<GrNext />}>
					Chọn diện tích
				</SearchItem>
				<Button
					iconLeft={<CiSearch />}
					bgColor="bg-primary"
					hoverEffect=""
					textColor="text-white text-[14px]"
				>
					Tìm kiếm
				</Button>
			</div>
		</div>
	);
}

export default SearchBottom;
