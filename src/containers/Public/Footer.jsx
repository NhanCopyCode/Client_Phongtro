import React, { useState } from "react";
import { memo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Footer() {
	const [isShowMore, setShowMore] = useState(true);
	const { categories } = useSelector((state) => state.app);

	const handleShowMore = () => {
		setShowMore(false);
	};

	const classShow = `bg-white p-4 shadow-sm rounded-sm text-[13px] flex flex-col gap-3 my-4 relative overflow-hidden ${
		isShowMore ? "max-h-[350px]" : ""
	}`;
	return (
		<div className="w-5xl mx-auto max-w-[100%] pb-4">
			<div className={classShow}>
				{isShowMore && (
					<div className="inline-flex items-center justify-center w-[100%] absolute bottom-0 py-12 bg-gradient-to-b from-transparent to-white">
						<button
							onClick={handleShowMore}
							className="text-primary text-sm underline px-4 py-2 rounded-md bg-[#f4f4f4] cursor-pointer inline-block"
						>
							Xem thêm
						</button>
					</div>
				)}
				<h3 className="text-center uppercase font-medium text-[17px]">
					CHO THUÊ PHÒNG TRỌ, NHÀ TRỌ TẠI PHONGTRO123.COM
				</h3>
				<p>
					Khi có nhu cầu thuê phòng trọ, chắc hẳn bạn sẽ băn khoăn với
					hàng loạt câu hỏi như: “Không biết bắt đầu từ đâu? Sợ bị mất
					cọc oan vì những phòng trọ “ảo”? Tìm mãi nhưng không ra
					phòng ưng ý?...”
				</p>
				<p>
					Đừng quá lo lắng, vì Phongtro123.com chính là giải pháp tối
					ưu dành cho những vấn đề đó. Nơi bạn có thể tìm phòng trọ mà
					không cần lặn lội khắp nơi, chỉ cần vài cú nhấp chuột là tìm
					thấy ngay một nơi ở tiềm năng.
				</p>
				<h4 className="font-medium text-[16px]">
					Giới thiệu về Phongtro123.com
				</h4>
				<p>
					Phongtro123.com là kênh thông tin Phòng trọ số 1 Việt Nam,
					một nền tảng chuyên biệt về cho thuê phòng trọ, nhà trọ lớn
					nhất hiện nay. Được ra đời năm 2015 với 10 năm không ngừng
					phát triển, Phongtro123.com xây dựng cho mình hơn 71.229 tin
					đăng riêng về phòng trọ và trên 200.000 tin đăng ở tất cả
					chuyên mục. Tổng lượng user đăng ký tại website là 130.000+
					người trong đó có cả chính chủ và môi giới, cùng với hơn 3
					triệu lượt truy cập mỗi tháng. Xứng đáng là cầu nối tốt nhất
					giữa người thuê và người cho thuê, giúp tiết kiệm tối đa
					thời gian, công sức, và tiền bạc của cả 2 bên.
				</p>
				<h4 className="font-medium text-[16px]">
					Ưu điểm của website Phongtro123.com
				</h4>

				<p>
					Phongtro123.com giúp bạn có được trải nghiệm tìm thuê nhà
					trọ nhanh chóng và dễ dàng nhất. Dưới đây là những ưu điểm
					khiến Phongtro123.com trở thành người bạn đồng hành đáng tin
					cậy:
				</p>
				<h4 className="font-bold text-[15px]">
					1. Chuyên môn hóa về phòng trọ
				</h4>
				<p>
					Không giống những trang bất động sản khác, Phongtro123.com
					chỉ tập trung vào cho thuê phòng trọ. Điều này giúp khách
					tìm kiếm tiết kiệm thời gian và tránh phải lọc qua những tin
					không liên quan.
				</p>
				<h4 className="font-bold text-[15px]">
					2. Nguồn tin dồi dào, cập nhật liên tục
				</h4>
				<p>
					Hiện tại với hơn 130.000 người dùng (kể cả chủ nhà và các
					bạn môi giới) và tiếp tục tăng, luôn đảm bảo mỗi ngày đều có
					tin đăng mới, từ những căn phòng trọ giá rẻ cho đến cao cấp,
					đáp ứng mọi nhu cầu của bạn.
				</p>

				<h4 className="font-bold text-[15px]">
					3. Thông tin minh bạch - hạn chế rủi ro
				</h4>
				<p>
					Tất cả tin được kiểm duyệt kỹ lưỡng, từ hình ảnh cho đến nội
					dung, giúp bạn tránh được những rủi ro, những phòng trọ
					“ảo”.
				</p>
				<h4 className="font-bold text-[15px]">
					4. Bộ lọc thông minh, thân thiện, dễ dùng
				</h4>
				<p>
					Chỉ cần vài nhấp chuột là bạn đã có thể lọc ra những phòng
					trọ theo khu vực, giá cả, hay loại phòng mà bạn mong muốn.
					Giúp dễ dàng so sánh để tìm ra đâu là căn phù hợp nhất.
				</p>
			</div>

			<div className="bg-white px-4 py-6 shadow-sm rounded-sm flex flex-col gap-3 text-[13px]">
				<h3 className="text-center uppercase font-medium text-[17px]">
					CHO THUÊ PHÒNG TRỌ, NHÀ TRỌ TẠI PHONGTRO123.COM
				</h3>
				<p className="text-center">
					Chúng tôi biết bạn có rất nhiều lựa chọn, nhưng
					Phongtro123.com tự hào là trang web đứng top google về các
					từ khóa:{" "}
					{categories.map((category, index) => (
						<React.Fragment key={index}>
							<Link  to={"/" + category.code} className="text-primary cursor-pointer hover:text-redColor">
								{category.value.toLowerCase()}
							</Link>
							{index < categories.length - 1 && ", "}
						</React.Fragment>
					))}
					...Vì vậy tin của bạn đăng trên website sẽ tiếp cận được với
					nhiều khách hàng hơn, do đó giao dịch nhanh hơn, tiết kiệm
					chi phí hơn
				</p>

				<div className="grid grid-cols-12 gap-2">
					<div className="xl:col-span-3 md:col-span-6 col-span-12">
						<div className="bg-white shadow-sm rounded-md flex flex-col text-[13px] border items-center border-[#ccc] py-3">
							<span className="font-bold ">130.000+</span>
							<p>Chủ nhà & Môi giới</p>
						</div>
					</div>
					<div className="xl:col-span-3 md:col-span-6 col-span-12">
						<div className="bg-white shadow-sm rounded-md flex flex-col text-[13px] border items-center border-[#ccc] py-3">
							<span className="font-bold ">130.000+</span>
							<p>Chủ nhà & Môi giới</p>
						</div>
					</div>
					<div className="xl:col-span-3 md:col-span-6 col-span-12">
						<div className="bg-white shadow-sm rounded-md flex flex-col text-[13px] border items-center border-[#ccc] py-3">
							<span className="font-bold ">130.000+</span>
							<p>Chủ nhà & Môi giới</p>
						</div>
					</div>
					<div className="xl:col-span-3 md:col-span-6 col-span-12">
						<div className="bg-white shadow-sm rounded-md flex flex-col text-[13px] border items-center border-[#ccc] py-3">
							<span className="font-bold ">130.000+</span>
							<p>Chủ nhà & Môi giới</p>
						</div>
					</div>
				</div>
				<h3 className="text-center font-medium text-[13px]">
					Chi phí thấp, hiệu quả tối đa
				</h3>
				<p className="text-center">
					Trước khi biết website phongtro123, mình phải tốn nhiều công
					sức và chi phí cho việc đăng tin cho thuê: từ việc phát tờ
					rơi, dán giấy, và đăng lên các website khác nhưng hiệu quả
					không cao. Từ khi biết website phongtro123.com, mình đã thử
					đăng tin lên và đánh giá hiệu quả khá cao trong khi chi phí
					khá thấp, không còn tình trạng phòng trống kéo dài
				</p>
			</div>
		</div>
	);
}

export default memo(Footer);
