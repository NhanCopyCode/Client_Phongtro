import Button from "../Button";

function ListItem() {
	return (
		<div className="p-[14px] shadow-sm rounded-md flex items-center justify-between bg-white">
			<div className="flex items-center gap-2 w-[664px]">
				<div className="w-[180px] h-[170px] shrink-0">
					<img
						src="https://via.placeholder.com/180x170"
						className="w-[100%] h-[100%] object-cover"
					/>
				</div>
				<div className="flex flex-col items-start gap-1">
					<div>
						<Button
							fontSize="text-[9px]"
							sizeButton="sm"
							textColor="text-text"
							subClass={"uppercase"}
						>
							Phòng trọ
						</Button>
					</div>
					<h3 className="text-[13px]">
						Thông tin mô tả hông tin mô tả, Thông tin mô tả, Thông
						tin mô tả
					</h3>
					<div className="flex items-center flex-wrap text-[13px] gap-2">
						<span className="text-green-700 font-medium">
							2 triệu/tháng
						</span>
						<span className="text-center">20 m2</span>
						<span className="">
							Cho thuê phòng trọ Quận 1, Hồ Chí Minh thuê phòng
							trọ Quận 1, Hồ Chí Minh trọ Quận 1, Hồ Chí Minh trọ
							Quận 1, Hồ Chí Minh trọ Quận 1, Hồ Chí Minh trọ Quận
							1, Hồ Chí Minh
						</span>
					</div>
					<div className="flex items-center justify-between text-[11px] text-subtitle gap-8">
						<div className="flex flex-col">
							<span>Mã tin</span>
							<span>12312321</span>
						</div>
						<div className="flex flex-col">
							<span>Mã tin</span>
							<span>12312321</span>
						</div>
						<div className="flex flex-col">
							<span>Mã tin</span>
							<span>12312321</span>
						</div>
					</div>
				</div>
			</div>

			<div className="p-5 flex-1 bg-gray h-full rounded-sm ml-3">
				<h3 className="uppercase text-center text-[16px] text-success">
					Tin đang đăng
				</h3>
				<div className="grid grid-cols-12 gap-2 mt-4">
					<Button
						fontSize="text-[9px]"
						sizeButton="sm"
						textColor="text-text"
						subClass={"uppercase col-span-6"}
					>
						Sửa tin
					</Button>

					<Button
						fontSize="text-[9px]"
						sizeButton="sm"
						textColor="text-text"
						subClass={"uppercase col-span-6"}
					>
						Ẩn tin
					</Button>
					<Button
						fontSize="text-[9px]"
						sizeButton="sm"
						textColor="text-text"
						subClass={"uppercase col-span-6"}
					>
						Nâng cấp vip
					</Button>
				</div>
			</div>
		</div>
	);
}

export default ListItem;
