import { Formik } from "formik";
import { useSelector } from "react-redux";
import Button from "../Button";
import { FaArrowRightLong } from "react-icons/fa6";

function CreatePost() {
	const { categories } = useSelector((state) => state.app);

	return (
		<div className="flex flex-col items-center justify-center gap-4 py-5 bg-gray">
			<div className="w-[650px] bg-white rounded-sm shadow-sm mt-4 p-5">
				<h2 className="text-[18px] font-medium">Loại chuyên mục</h2>
				<div>
					<p className="text-[14px] mt-4">Loại chuyên mục</p>
					<select name="" id="">
						{categories &&
							categories.length > 0 &&
							categories.map((category) => {
								return (
									<option
										key={category.code}
										value={category.code}
									>
										{category.value}
									</option>
								);
							})}
					</select>
				</div>
			</div>

			<div className="w-[650px] bg-white rounded-sm shadow-sm mt-4 p-5">
				<h2 className="text-[18px] font-medium">Thông tin mô tả</h2>
				<p className="text-[14px] mt-4">Tiêu đề</p>
				<textarea
					name=""
					id=""
					className="border border-text rounded-md p-2 w-[100%] border-subtitle outline-none"
				></textarea>
				<div className="text-[11px]">
					<p className="text-secondaryText">
						(Tối thiểu 30 ký tự, tối đa 100 ký tự)
					</p>
					<p className="text-redColor">Tiêu đề không được để trống</p>
				</div>
				<p className="text-[14px] mt-4">Nội dung mô tả</p>
				<textarea
					name=""
					id=""
					className="border border-text rounded-md p-2 w-[100%] border-subtitle outline-none"
				></textarea>
				<div className="text-[11px]">
					<p className="text-secondaryText">
						(Tối thiểu 50 ký tự, tối đa 5000 ký tự)
					</p>
					<p className="text-redColor">Bạn chưa nhập nội dung</p>
				</div>

				<p className="text-[14px] mt-4">Giá cho thuê</p>
				<input className="rounded-md border-subtitle border w-[50%] py-1 px-3 outline-none" />
				<div className="text-[11px]">
					<p className="text-secondaryText">
						Nhập đầy đủ số, ví dụ 1 triệu thì nhập là 1000000
					</p>
					<p className="text-redColor">Bạn chưa nhập giá phòng</p>
				</div>

				<p className="text-[14px] mt-4">Diện tích (*)</p>
				<input className="rounded-md border-subtitle border w-[50%] py-1 px-3 outline-none" />
				<div className="text-[11px]">
					<p className="text-redColor">Bạn chưa nhập diện tích</p>
				</div>
			</div>

			<div className="w-[650px] bg-white rounded-sm shadow-sm mt-4 p-5">
				<h2 className="text-[18px] font-medium">Video</h2>
			</div>

			<div className="w-[650px] bg-white rounded-sm shadow-sm mt-4 p-5">
				<h2 className="text-[18px] font-medium">Hình ảnh</h2>
			</div>

			<div className="w-[650px] bg-white rounded-sm shadow-sm mt-4 p-5">
				<h2 className="text-[18px] font-medium">Thông tin liên hệ</h2>
				<div className="grid grid-cols-12 gap-4 mt-4">
					<input
						type="text"
						className="col-span-6 py-1 px-2 border border-subtitle rounded-md outline-none"
					/>
					<input
						type="text"
						className="col-span-6 py-1 px-2 border border-subtitle rounded-md outline-none"
					/>
				</div>
			</div>

			<Button
				iconRight={<FaArrowRightLong />}
				bgColor="bg-redColor"
				subClass={"w-[650px] mt-2"}
				hoverEffect="none"
                rounded="rounded-md"
                fontSize="text-[14px]"
			>
				Tiếp tục
			</Button>
		</div>
	);
}

export default CreatePost;
