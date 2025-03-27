export const path = {
	HOME: "/*",
	LOGIN: "login",
	CHO_THUE_CAN_HO: "cho-thue-can-ho",
	CHO_THUE_MAT_BANG: "cho-thue-mat-bang",
	CHO_THUE_PHONG_TRO: "cho-thue-phong-tro",
	NHA_CHO_THUE: "nha-cho-thue",
	DETAIL_POST: "chi-tiet/:title/:postId",
	THE_NEWS_SAVED: 'tin-da-luu',
};

export const WHITELIST_KEY = 'whitelist_posts';
export const text = [
	{
		PAGE_URL: "/",
		HOME_TITLE: "Cho Thuê Căn Hộ Chung Cư, Giá Rẻ, View Đẹp, Mới Nhất 2025",
		HOME_SUB_TITLE: "Có 25.538 tin đăng cho thuê",
	},
	{
		PAGE_URL: path.CHO_THUE_CAN_HO,
		HOME_TITLE: "Cho Thuê Nhà Nguyên Căn, Giá Rẻ, Chính Chủ, Mới Nhất 2025",
		HOME_SUB_TITLE: "Có 10.199 tin đăng cho thuê",
	},
	{
		PAGE_URL: path.CHO_THUE_MAT_BANG,
		HOME_TITLE: "Cho Thuê Mặt Bằng, Giá Rẻ, Chính Chủ, Mới Nhất 2025",
		HOME_SUB_TITLE: "Có 3.342 tin đăng cho thuê",
	},
	{
		PAGE_URL: path.CHO_THUE_PHONG_TRO,
		HOME_TITLE: "Kênh thông tin Phòng trọ số 1 Việt Nam",
		HOME_SUB_TITLE: "Có 70.904 tin đăng cho thuê",
	},
	{
		PAGE_URL: path.NHA_CHO_THUE,
		HOME_TITLE: "Cho Thuê Nhà Nguyên Căn, Giá Rẻ, Chính Chủ, Mới Nhất 2025",
		HOME_SUB_TITLE: "Có 10.200 tin đăng cho thuê",
	},
];

export const locations = [
	{
		id: "hcm",
		name: "Phòng trọ Hồ Chí Minh",
		image: "https://phongtro123.com/images/location_hcm.jpg",
	},
	{
		name: "Phòng trọ Hà Nội",
		image: "https://phongtro123.com/images/location_hn.jpg",
		id: "hn",
	},
	{
		name: "Phòng trọ Đà nẵng",
		image: "https://phongtro123.com/images/location_dn.jpg",
		id: "dn",
	},
];

export const filterPrice = {
	title: "Xem theo khoảng giá",
	prices: [
		{
			code: "/?gia_den=1000000",
			value: "Dưới 1 triệu",
		},
		{
			code: "/?gia_tu=1000000&gia_den=2000000",
			value: "Từ 1 - 2 triệu",
		},
		{
			code: "/?gia_tu=2000000&gia_den=3000000",
			value: "Từ 2 - 3 triệu",
		},
		{
			code: "/?gia_tu=3000000&gia_den=5000000",
			value: "Từ 3 - 5 triệu",
		},
		{
			code: "/?gia_tu=5000000&gia_den=7000000",
			value: "Từ 5 - 7 triệu",
		},
		{
			code: "/?gia_tu=7000000&gia_den=10000000",
			value: "Từ 7 - 10 triệu",
		},
		{
			code: "/?gia_tu=10000000&gia_den=15000000",
			value: "Từ 10 - 15 triệu",
		},
		{
			code: "/?gia_tu=15000000",
			value: "Trên 15 triệu",
		},
	],
};

export const filterAcreage = {
	title: "Xem theo diện tích",
	acreages: [
		{
			code: "/?dien_tich_den=20",
			value: "Dưới 20m2",
		},
		{
			code: "/?dien_tich_tu=20&dien_tich_den=30",
			value: "Từ 20 - 30m2",
		},
		{
			code: "/?dien_tich_tu=30&dien_tich_den=50",
			value: "Từ 30 - 50m2",
		},
		{
			code: "/?dien_tich_tu=50&dien_tich_den=70",
			value: "Từ 50 - 70m2",
		},
		{
			code: "/?dien_tich_tu=70&dien_tich_den=90",
			value: "Từ 70 - 90m2",
		},
		{
			code: "/?dien_tich_tu=90",
			value: "Từ 90m2",
		},
	],
};

export const viewByRegionTitle = "Xem theo khu vực";


export const customStylesModal = {
	content: {
		background: "white",
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		width: "600px",
		height: "600px",
		overFlowY: "auto",
		borderRadius: "12px",
		color: "#212529",
		padding: 0,
	},
	overlay: {
		position: "fixed",
		zIndex: 1020,
		top: 0,
		left: 0,
		width: "100vw",
		height: "100vh",
		background: "rgba(0,0,0,0.5)",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
};