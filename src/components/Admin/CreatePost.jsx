import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiImageOn } from "react-icons/ci";
import { useEffect, useState } from "react";
import ImageUploading from "react-images-uploading";
import { MdDeleteOutline } from "react-icons/md";
import { getAllProvinces } from "../../store/actions/app";

function CreatePost() {
	const dispatch = useDispatch();
	const [images, setImages] = useState([]);
	const maxNumber = 69;
	const { categories, provinces } = useSelector((state) => state.app);
	console.log('provinces:', provinces)
	const { user } = useSelector((state) => state.auth);

	const onChange = (imageList, addUpdateIndex) => {
		// data for submit
		console.log(imageList, addUpdateIndex);
		setImages(imageList);
	};

	useEffect(() => {
		dispatch(getAllProvinces());
	}, [dispatch])

	return (
		<div className="flex flex-col items-center justify-center gap-4 py-5 bg-gray">
			<div className="w-[650px] bg-white rounded-sm shadow-sm mt-4 p-5">
				<h2 className="text-[18px] font-medium">Loại chuyên mục</h2>
				<div>
					<form className="w-[50%]">
						<label className="block mb-2 text-[14px] mt-4">
							Loại chuyên mục
						</label>
						<select
							id="countries"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						>
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
					</form>
				</div>
			</div>

			<div className="w-[650px] bg-white rounded-sm shadow-sm mt-4 p-5">
				<h2 className="text-[18px] font-medium">Khu vực</h2>
				<div>
					<form className="w-[50%]">
						<label className="block mb-2 text-[14px] mt-4">
							Chọn khu vực
						</label>
						<select
							id="countries"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						>
							{provinces &&
								provinces.length > 0 &&
								provinces.map((province) => {
									return (
										<option
											key={province.code}
											value={province.code}
										>
											{province.value}
										</option>
									);
								})}
						</select>
					</form>
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
				<h2 className="text-[18px] font-medium">Hình ảnh</h2>
				<ImageUploading
					multiple
					value={images}
					onChange={onChange}
					maxNumber={maxNumber}
					dataURLKey="data_url"
					acceptType={["jpg"]}
				>
					{({
						imageList,
						onImageUpload,
						onImageRemove,
						dragProps,
					}) => (
						// write your building UI
						<div className="upload__image-wrapper">
							<div
								className="w-[100%] border-2 border-primary border-dashed rounded-xl flex items-center justify-center p-5 flex-col mt-4 bg-lightBlue hover:cursor-pointer"
								onClick={onImageUpload}
								{...dragProps}
							>
								<CiImageOn
									className="w-[70px] h-[70px] object-cover"
									color="text-primary"
								/>
								<p className="mt-1 text-[13px]">
									Tải ảnh từ thiết bị
								</p>
							</div>
							&nbsp;
							<div className="grid grid-cols-12 gap-2">
								{imageList.map((image, index) => (
									<div
										key={index}
										className="image-item shadow-sm rounded-sm col-span-3 min-h-[125px] overflow-hidden"
									>
										<img
											src={image.data_url}
											alt=""
											className="w-[100%] object-cover h-[100px]"
										/>
										<div className="image-item__btn-wrapper text-center">
											<button
												onClick={() =>
													onImageRemove(index)
												}
												className="flex items-center justify-center w-[100%] hover:text-redColor hover:cursor-pointer p-1 text-redColor"
											>
												<MdDeleteOutline />

												<span className="text-[12px] font-medium">
													Xóa
												</span>
											</button>
										</div>
									</div>
								))}
							</div>
						</div>
					)}
				</ImageUploading>
			</div>

			<div className="w-[650px] bg-white rounded-sm shadow-sm mt-4 p-5">
				<h2 className="text-[18px] font-medium">Thông tin liên hệ</h2>
				<div className="grid grid-cols-12 gap-4 mt-4">
					<div className="col-span-6 flex flex-col">
						<label htmlFor="name" className="text-[13px] text-text">
							Họ tên
						</label>
						<input
							id="name"
							type="text"
							className=" py-1 px-2 border border-subtitle rounded-md outline-none"
							value={user?.name}
						/>
					</div>
					<div className="col-span-6 flex flex-col">
						<label htmlFor="name" className="text-[13px] text-text">
							Số điện thoại
						</label>
						<input
							id="name"
							type="text"
							className=" py-1 px-2 border border-subtitle rounded-md outline-none"
							value={user?.phone}
						/>
					</div>
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
