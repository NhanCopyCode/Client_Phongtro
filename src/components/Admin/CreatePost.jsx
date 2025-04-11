import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiImageOn } from "react-icons/ci";
import { useEffect, useState } from "react";
import ImageUploading from "react-images-uploading";
import { MdDeleteOutline } from "react-icons/md";
import { getAllPrices, getAllProvinces } from "../../store/actions/app";
import NavContent from "./NavContent";
import { navItemsCreatePost } from "../../utils/constants";
import { requiredFieldsCreatePostForm } from "../../utils/constants";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { scrollToElement, scrollToTop } from "../../utils/scrollEffect";
import { useRef } from "react";
import readMoneyVND from "../../utils/readMoneyVND";
import isNumeric from "../../utils/isNumeric";
import { createPostService } from "../../services/postService";

function CreatePost() {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);
	const [price, setPrice] = useState("");
	const [errors, setErrors] = useState({});
	const [data, setData] = useState({
		name: user?.name || "",
		phone: user?.phone || "",
		categoryCode: "",
		provinceCode: "",
		areaCode: "",
		description: "",
		title: "",
		address: "",
		priceCode: "",
		images: [],
	});
	const [images, setImages] = useState([]);
	const maxNumber = 69;
	const { categories, provinces } = useSelector((state) => state.app);

	const refs = {
		categoryCode: useRef(),
		provinceCode: useRef(),
		areaCode: useRef(),
		description: useRef(),
		title: useRef(),
		address: useRef(),
		priceCode: useRef(),
		images: useRef(),
	};

	const onChange = (imageList) => {
		setImages(imageList);
		const imageData = imageList.map((image) => image.file);

		setData((prevData) => ({
			...prevData,
			images: imageData,
		}));
	};

	const validation = () => {
		let newErrors = {};
		let firstErrorKey = null;
		requiredFieldsCreatePostForm.forEach((field) => {
			if (!data[field] || data[field].trim === "") {
				newErrors[field] = "Trường này là bắt buộc";
				if (!firstErrorKey) {
					firstErrorKey = field;
				}
			}
		});

		if (data["images"]?.length < 6) {
			newErrors["images"] = "Yêu cầu tải ít nhất 6 ảnh";
			if (!firstErrorKey) {
				firstErrorKey = "images";
			}
		}

		setErrors(newErrors);
		if (firstErrorKey && refs[firstErrorKey]) {
			scrollToElement(refs[firstErrorKey]);
		}
		console.log("new errors: ", newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmitData = async () => {
		console.log("data submit: ", data);

		if (!validation()) return;

		const formData = new FormData();

		// Append all fields to formData
		for (let key in data) {
			if (key === "images") {
				data.images.forEach((image) => {
					formData.append("images", image); // 'images' must match your backend field name
				});
			} else {
				formData.append(key, data[key]);
			}
		}

		try {
			formData.append("userId", user?.id);
			const result = await createPostService(formData);
			if (result) {
				setData({
					name: user?.name || "",
					phone: user?.phone || "",
					categoryCode: "",
					provinceCode: "",
					areaCode: "",
					description: "",
					title: "",
					address: "",
					priceCode: "",
					images: [],
				});
				setImages([]);
				setPrice("");
				setErrors({});

				withReactContent(Swal).fire({
					icon: "success",
					title: <span>Đăng tin thành công</span>,
				});

				scrollToTop();
			}
		} catch (err) {
			console.log("Submit error: ", err);
			withReactContent(Swal).fire({
				icon: "error",
				title: <span>Đã xảy ra lỗi khi đăng tin</span>,
			});
		}
	};

	useEffect(() => {
		dispatch(getAllProvinces());
		dispatch(getAllPrices());
	}, [dispatch]);

	const handleSetData = (key, code) => {
		setData((prev) => {
			return {
				...prev,
				[key]: code,
			};
		});
	};

	const handleDisplayMoney = (num) => {
		setPrice(readMoneyVND(num));
		if (num.trim() === "") {
			setPrice("");
		}
	};
	return (
		<>
			<NavContent
				title={"Đăng tin cho thuê"}
				navItems={navItemsCreatePost}
			/>
			<div className="flex flex-col items-center justify-center gap-4 py-8 bg-gray ">
				<div
					id="chuyen-muc"
					className="w-[650px] bg-white rounded-sm shadow-sm mt-4 p-5"
				>
					<h2 className="text-[18px] font-medium">Loại chuyên mục</h2>
					<div>
						<form className="w-[50%]">
							<label className="block mb-2 text-[14px] mt-4">
								Loại chuyên mục
							</label>
							<select
								id="countries"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								onChange={(e) =>
									handleSetData(
										"categoryCode",
										e.target.value
									)
								}
								value={data.categoryCode}
							>
								<option>Chọn loại chuyên mục</option>
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
							{errors.categoryCode && (
								<span className="text-redColor text-[12px]">
									{errors.categoryCode}
								</span>
							)}
						</form>
					</div>
				</div>

				<div
					id="khu-vuc"
					className="w-[650px] bg-white rounded-sm shadow-sm mt-4 p-5"
				>
					<h2 className="text-[18px] font-medium">Khu vực</h2>
					<div>
						<form className="w-[50%]">
							<label className="block mb-2 text-[14px] mt-4">
								Chọn khu vực
							</label>
							<select
								id="countries"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								onChange={(e) =>
									handleSetData(
										"provinceCode",
										e.target.value
									)
								}
								value={data.provinceCode}
							>
								<option>Chọn loại khu vực</option>
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
							{errors.provinceCode && (
								<span className="text-redColor text-[12px]">
									{errors.provinceCode}
								</span>
							)}
						</form>
					</div>
				</div>

				<div
					id="thong-tin-mo-ta"
					className="w-[650px] bg-white rounded-sm shadow-sm mt-4 p-5"
				>
					<h2 className="text-[18px] font-medium">Thông tin mô tả</h2>
					<p className="text-[14px] mt-4">Tiêu đề</p>
					<textarea
						name=""
						id=""
						className="border border-text rounded-md p-2 w-[100%] border-subtitle outline-none"
						onChange={(e) => handleSetData("title", e.target.value)}
						value={data.title}
					></textarea>
					<div className="text-[11px]">
						<p className="text-secondaryText">
							(Tối thiểu 30 ký tự, tối đa 100 ký tự)
						</p>
						{errors.title && (
							<p className="text-redColor">
								Tiêu đề không được để trống
							</p>
						)}
					</div>
					<p className="text-[14px] mt-4">Nội dung mô tả</p>
					<textarea
						name=""
						id=""
						className="border border-text rounded-md p-2 w-[100%] border-subtitle outline-none"
						onChange={(e) =>
							handleSetData("description", e.target.value)
						}
						value={data.description}
					></textarea>
					<div className="text-[11px]">
						<p className="text-secondaryText">
							(Tối thiểu 50 ký tự, tối đa 5000 ký tự)
						</p>
						{errors.description && (
							<p className="text-redColor">
								Bạn chưa nhập nội dung
							</p>
						)}
					</div>

					<p className="text-[14px] mt-4">Địa chỉ cho thuê</p>
					<textarea
						name=""
						id=""
						className="border border-text rounded-md p-2 w-[100%] border-subtitle outline-none"
						onChange={(e) =>
							handleSetData("address", e.target.value)
						}
						value={data.address}
					></textarea>
					{errors.address && (
						<span className="text-redColor text-[12px]">
							{errors.address}
						</span>
					)}
					<p className="text-[14px] mt-4">Giá cho thuê</p>
					<div className="w-[50%] flex items-center">
						<input
							type="number"
							className="rounded-s-md border-subtitle border w-[80%] py-1 px-3 outline-none border-r-0"
							onChange={(e) =>
								handleSetData("priceCode", e.target.value)
							}
							onBlur={(e) => handleDisplayMoney(e.target.value)}
							value={data.priceCode}
						/>
						<span className="py-1 px-3 border border-subtitle rounded-e-md ">
							đồng/tháng
						</span>
					</div>
					<div className="text-[11px] mt-2">
						<p className="text-success font-medium">{price}</p>
						<p className="text-secondaryText">
							Nhập đầy đủ số, ví dụ 1 triệu thì nhập là 1000000
						</p>
						<p className="text-redColor">Bạn chưa nhập giá phòng</p>
					</div>

					<p className="text-[14px] mt-4">Diện tích (*)</p>

					<div className="w-[50%] flex items-center">
						<input
							className="rounded-s-md border-subtitle border w-[90%] py-1 px-3 outline-none border-r-0"
							onChange={(e) =>
								handleSetData("areaCode", e.target.value)
							}
							type="number"
							value={data.areaCode}
						/>
						<span className="py-1 px-3 border border-subtitle rounded-e-md ">
							m2
						</span>
					</div>
					<div className="text-[11px]">
						<p className="text-redColor">Bạn chưa nhập diện tích</p>
					</div>
				</div>

				<div
					id="hinh-anh"
					className="w-[650px] bg-white rounded-sm shadow-sm mt-4 p-5"
				>
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
								<ul className="text-[10px] text-subtitle flex flex-col items-start gap-1 mt-3 list-disc pl-4">
									<li>
										Tải lên tối đa 20 ảnh trong một bài đăng
									</li>
									<li>Dung lượng ảnh tối đa 10MB</li>
									<li>
										Hình ảnh phải liên quan đến phòng trọ,
										nhà cho thuê
									</li>
									<li>
										Không chèn văn bản, số điện thoại lên
										ảnh
									</li>
								</ul>
								{errors.images && (
									<span className="text-redColor text-[12px]">
										{errors.images}
									</span>
								)}
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

				<div
					id="thong-tin-lien-he"
					className="w-[650px] bg-white rounded-sm shadow-sm mt-4 p-5"
				>
					<h2 className="text-[18px] font-medium">
						Thông tin liên hệ
					</h2>
					<div className="grid grid-cols-12 gap-4 mt-4">
						<div className="col-span-6 flex flex-col">
							<label
								htmlFor="name"
								className="text-[13px] text-text"
							>
								Họ tên
							</label>
							<input
								id="name"
								type="text"
								className=" py-1 px-2 border border-subtitle rounded-md outline-none"
								value={user?.name}
								onChange={(e) =>
									handleSetData("name", e.target.value)
								}
							/>
						</div>
						<div className="col-span-6 flex flex-col">
							<label
								htmlFor="name"
								className="text-[13px] text-text"
							>
								Số điện thoại
							</label>
							<input
								id="name"
								type="text"
								className=" py-1 px-2 border border-subtitle rounded-md outline-none"
								value={user?.phone}
								onChange={(e) =>
									handleSetData("phone", e.target.value)
								}
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
					onClick={handleSubmitData}
				>
					Tiếp tục
				</Button>
			</div>
		</>
	);
}

export default CreatePost;
