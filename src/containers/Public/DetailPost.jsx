import { useParams } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import BreadCrumb from "../../components/BreadCrumb";
import { FaStar } from "react-icons/fa";
import { MdOutlineLocationOn, MdOutlineMessage } from "react-icons/md";
import defaultUser from "../../assets/default-user.svg";
import { GoDotFill } from "react-icons/go";

import Button from "../../components/Button";
import { IoMdCall } from "react-icons/io";
import { FiMessageCircle } from "react-icons/fi";
import houseImage from "../../assets/house_image.jpg";
import { useEffect, useState } from "react";
import * as postService from "../../services/postService";
import formatDate from "../../utils/formatDate";

function DetailPost() {
	const { postId } = useParams();
	const [post, setPost] = useState({});

	useEffect(() => {
		window.scroll({ top: 0, left: 0, behavior: "smooth" });

		const fetchPostById = async () => {
			const postFound = await postService.getPostByIdService(postId);
			setPost(postFound.data.data);
		};

		fetchPostById();
	}, [postId]);
	return (
		<div className="w-5xl max-w-[100%] m-auto mt-[100px]">
			<BreadCrumb />

			<div className="grid grid-cols-12 gap-2">
				<div className="xl:col-span-8 col-span-12">
					{post.images?.image && post.images?.image.length > 0 && (
						<div className="rounded-md shadow-sm bg-white overflow-hidden ">
							Xin chào
						</div>
					)}
					<div className="mt-3 bg-white rounded-md shadow-sm p-5">
						{post.star && +post.star > 0 && (
							<div className="bg-redColor rounded-md inline-flex items-center py-1 px-2 text-yellow gap-1 text-sm">
								{[...Array(+post.star)].map((_, index) => {
									return <FaStar key={index} />;
								})}
								<span className="text-[10px] uppercase text-white">
									tin vip nổi bật
								</span>
							</div>
						)}
						<div className="text-redColor text-[16px] font-medium">
							{post.title}
						</div>
						<div className="flex items-center gap-2  mt-1">
							<MdOutlineLocationOn className="text-text text-sm" />
							<span className="text-text text-[13px]">
								{post.address}
							</span>
						</div>

						<div className="flex items-center justify-between text-[13px] text-text mt-2 border-b-1 border-[#ccc] pb-4">
							<div className="flex items-center gap-4">
								<span className="text-success font-bold text-[16px]">
									{post.attributes?.price}
								</span>
								<span>{post.attributes?.acreage}</span>
								<span>
									Cập nhật: {post.attributes?.published}
								</span>
							</div>
							<div className="text-text text-[13px]">
								<span>Mã tin: #{post.id}</span>
							</div>
						</div>
						<div className="mt-4 ">
							<h3 className="text-black text-[16px] font-medium my-4">
								Thông tin mô tả
							</h3>
							<div className="text-text text-[13px] flex flex-col gap-2 pb-4 border-b-1 border-[#ccc]">
								{post.description &&
									JSON.parse(post.description).map(
										(item, index) => {
											return <p key={index}>{item}</p>;
										}
									)}
							</div>

							<div className="pb-4 border-b-1 border-[#ccc]">
								<h3 className="text-black text-[16px] font-medium mt-4">
									Đặc điểm tin đăng
								</h3>
								<ul className="grid grid-cols-10 text-sm text-[13px] gap-y-2 mt-2">
									<li className="col-span-5 flex items-center gap-2">
										<span>Mã tin: </span>
										<span>{post.id}</span>
									</li>

									<li className="col-span-5 flex items-center gap-2">
										<span>Gói tin: </span>
										<span>Tin VIP nổi bật</span>
									</li>
									<li className="col-span-5 flex items-center gap-2">
										<span>Ngày đăng: </span>
										<span>
											{formatDate(post.createdAt)}
										</span>
									</li>
								</ul>
							</div>

							<div className="pb-4  border-[#ccc]">
								<h3 className="text-black text-[16px] font-medium mt-4">
									Thông tin liên hệ
								</h3>
								<div className="flex items-center gap-3 mt-2">
									<div className="w-[100px] h-[100px] rounded-[50%] border-1 border-[#d5dbdf] p-1">
										<img
											src={defaultUser}
											alt=""
											className="w-full h-full object-cover"
										/>
									</div>
									<div className="ml-2 flex flex-col gap-1">
										<div className="flex items-center space-x-2">
											<span className="col-span-5 font-medium text-sm">
												{post.user?.name}
											</span>
											<div className="col-span-5 text-subtitle text-[12px] flex items-center">
												<GoDotFill className="text-success w-[10px] h-[10px]" />
												Đang hoạt động
											</div>
										</div>
										<div className="flex items-center space-x-2">
											<span className="col-span-5 text-text text-[12px]">
												{post.user?.postCount} tin đăng
											</span>
											<div className="col-span-5 text-text text-[12px] flex items-center">
												<GoDotFill className="text-subtitle w-[7px] h-[7px]" />
												Tham gia từ:{" "}
												{formatDate(
													post.user?.createdAt
												)}
											</div>
										</div>

										<div className="flex items-center space-x-2 mt-2">
											<Button
												iconLeft={
													<IoMdCall className="text-white w-3 h-3 text-sm" />
												}
												textColor="text-white"
												bgColor="bg-success"
												sizeButton="sm"
												hoverEffect="none"
											>
												{post.user?.phone}
											</Button>
											<Button
												iconLeft={
													<FiMessageCircle className="text-white" />
												}
												textColor="text-white"
												bgColor="bg-primary"
												sizeButton="sm"
												hoverEffect="none"
											>
												Nhắn zalo
											</Button>
										</div>
									</div>
								</div>
							</div>

							<div className="border border-yellow rounded-sm bg-[#fffae8] p-4 text-[#664d03] mt-4">
								<h3 className="text-[10px] font-bold  ">
									Lưu ý:
								</h3>
								<div className="flex flex-col gap-2 text-[10px] mt-2">
									<p>
										Chỉ đặt khi cọc xác định được chủ nhà và
										có thỏa thuận biên nhận rõ ràng. Kiểm
										tra mọi điều khoản và yêu cầu liệt kê
										tất cả chi phí hàng tháng vào hợp đồng.
										Xem thêm
									</p>
									<p>
										Mọi thông tin liên quan đến tin đăng này
										chỉ mang tính chất tham khảo. Nếu bạn
										thấy rằng tin đăng này không đúng hoặc
										có dấu hiệu lừa đảo, hãy phản ánh với
										chúng tôi.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="xl:col-span-4 col-span-12">
					<div className="bg-white rounded-sm shadow-sm px-4 py-6  flex flex-col items-center justify-center text-text ">
						<div className="w-[100px] h-[100px] rounded-[50%] border-1 border-[#d5dbdf] p-1">
							<img
								src={defaultUser}
								alt=""
								className="w-full h-full object-cover"
							/>
						</div>
						<h3 className="text-[16px]  font-medium mt-4">
							{post.user?.name}
						</h3>
						<p className="text-[11px]">Đang hoạt động</p>
						<div className="flex items-center gap-2 text-[12px] mt-2">
							<span>{post.user?.postCount} tin đăng</span>
							<div className="flex items-center gap-1">
								<GoDotFill className="text-success text-[10px]" />
								<span>
									Tham gia từ:{" "}
									{formatDate(post.user?.createdAt)}
								</span>
							</div>
						</div>
						<Button
							subClass="w-full mt-4"
							hoverEffect="none"
							bgColor="bg-success"
							fontSize="text-[16px]"
							iconLeft={<IoMdCall className="text-[24px]" />}
						>
							{post.user?.phone}
						</Button>
						<Button
							subClass="w-full mt-2"
							hoverEffect="none"
							bgColor="bg-primary"
							fontSize="text-[16px]"
							iconLeft={
								<MdOutlineMessage className="text-[20px]" />
							}
						>
							Nhắn Zalo
						</Button>
					</div>

					<div className="border border-primary px-3 py-5 mt-4 rounded-sm bg-[#cff4fc] sticky top-[120px]">
						<h3 className="text-sm text-text font-medium">
							Tin đăng nổi bật
						</h3>
						<div className="flex flex-col space-y-3 mt-3">
							<div className="inline-flex items-center">
								<div className="w-[90px] h-[80px] flex-none">
									<img
										src={houseImage}
										alt=""
										className="w-full h-full object-cover rounded-md"
									/>
								</div>
								<div className="flex flex-col ml-3">
									<h4 className="text-redColor uppercase text-[13px] line-clamp-2">
										PHÒNG CHO THUÊ NGAY LOTTE Q.7 - CHỈ TỪ
										3.5TR - BAO GIÁ TỐT - Alo 0988.373.731
									</h4>
									<div className="flex items-center justify-between mt-3">
										<span className="text-success font-medium text-[12px]">
											3,6 triệu/tháng
										</span>
										<span className="text-subtitle text-[12px]">
											2 ngày trước
										</span>
									</div>
								</div>
							</div>
							<div className="inline-flex items-center">
								<div className="w-[90px] h-[80px] flex-none">
									<img
										src={houseImage}
										alt=""
										className="w-full h-full object-cover rounded-md"
									/>
								</div>
								<div className="flex flex-col ml-3">
									<h4 className="text-redColor uppercase text-[13px] line-clamp-2">
										PHÒNG CHO THUÊ NGAY LOTTE Q.7 - CHỈ TỪ
										3.5TR - BAO GIÁ TỐT - Alo 0988.373.731
									</h4>
									<div className="flex items-center justify-between mt-3">
										<span className="text-success font-medium text-[12px]">
											3,6 triệu/tháng
										</span>
										<span className="text-subtitle text-[12px]">
											2 ngày trước
										</span>
									</div>
								</div>
							</div>
							<div className="inline-flex items-center">
								<div className="w-[90px] h-[80px] flex-none">
									<img
										src={houseImage}
										alt=""
										className="w-full h-full object-cover rounded-md"
									/>
								</div>
								<div className="flex flex-col ml-3">
									<h4 className="text-redColor uppercase text-[13px] line-clamp-2">
										PHÒNG CHO THUÊ NGAY LOTTE Q.7 - CHỈ TỪ
										3.5TR - BAO GIÁ TỐT - Alo 0988.373.731
									</h4>
									<div className="flex items-center justify-between mt-3">
										<span className="text-success font-medium text-[12px]">
											3,6 triệu/tháng
										</span>
										<span className="text-subtitle text-[12px]">
											2 ngày trước
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DetailPost;
