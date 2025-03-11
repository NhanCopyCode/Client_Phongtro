import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as actions from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function LoginForm() {
	const [name, setName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [password, setPassword] = useState("");
	const [invalidFields, setInvalidFields] = useState([]);
	const { isLoggedIn, msg, update } = useSelector((state) => state.auth);
	const navigate = useNavigate();

	const dispatch = useDispatch();

	const location = useLocation();
	const [isRegister, setIsRegister] = useState(location.state?.type);

	useEffect(() => {
		handleTogglePage();
	}, [location.state?.type]);

	useEffect(() => {
		isLoggedIn && navigate("/");
	}, [isLoggedIn]);

	useEffect(() => {
		if (msg) {
			Swal.fire({
				text: msg,
				icon: "error",
			});
		}
	}, [msg, update]);

	const handleTogglePage = () => {
		setIsRegister(location.state?.type);
		setInvalidFields([]);
		setName("");
		setPhoneNumber("");
		setPassword("");
	};
	const handleSubmit = async () => {
		const payload = isRegister
			? {
					name,
					phone: phoneNumber,
					password,
			  }
			: {
					phone: phoneNumber,
					password,
			  };

		const errors = validateInput(payload);
		console.log("InvalidField ", errors);
		if (errors.length === 0) {
			isRegister
				? dispatch(actions.register(payload))
				: dispatch(actions.login(payload));
		}
	};

	const validateInput = (payload) => {
		const credentials = Object.entries(payload);
		let errors = [];

		credentials.forEach(([key, value]) => {
			switch (key) {
				case "password":
					if (value.length < 6) {
						errors.push({
							name: key,
							message: "Mật khẩu phải ít nhất 6 ký tự.",
						});
					}
					break;
				case "phone":
					if (!/^\d+$/.test(value)) {
						errors.push({
							name: key,
							message: "Số điện thoại không hợp lệ",
						});
					} else if (!String(value).startsWith("0")) {
						errors.push({
							name: key,
							message: "Số điện thoại không hợp lệ",
						});
					} else if (value.length !== 10) {
						errors.push({
							name: key,
							message: "Số điện thoại phải đủ 10 số",
						});
					}
					break;
				default:
					if (!value || value.trim() === "") {
						errors.push({
							name: key,
							message: "Trường này không được để trống.",
						});
					}
					break;
			}
		});

		setInvalidFields(errors);
		return errors;
	};

	return (
		<div className=" flex items-center justify-center w-5xl h-full my-0 mx-auto px-2">
			<div className="w-[552px] h-auto p-6 flex flex-col space-y-4 rounded-md !shadow-md my-7 bg-white">
				<h3 className="font-semibold text-2xl text-center">
					{isRegister ? "Đăng kí" : "Đăng nhập"}
				</h3>
				{isRegister ? (
					<Input
						inputSize={"md"}
						border={"border border-borderColor"}
						rounded={"rounded-xl"}
						width={"w-full"}
						value={name}
						setValue={setName}
						name="name"
						invalidField={invalidFields}
						setInvalidFields={setInvalidFields}
					>
						Tên
					</Input>
				) : null}
				<Input
					inputSize={"md"}
					border={"border border-borderColor"}
					rounded={"rounded-xl"}
					width={"w-full"}
					value={phoneNumber}
					setValue={setPhoneNumber}
					name="phone"
					invalidField={invalidFields}
					setInvalidFields={setInvalidFields}
				>
					Số điện thoại
				</Input>
				<Input
					inputSize={"md"}
					border={"border border-borderColor"}
					rounded={"rounded-xl"}
					width={"w-full"}
					type="password"
					value={password}
					setValue={setPassword}
					name="password"
					invalidField={invalidFields}
					setInvalidFields={setInvalidFields}
				>
					Mật khẩu
				</Input>
				<Button
					className="w-full"
					bgColor="bg-[#e51f40]"
					hoverEffect="lighten"
					fontSize="text-[18px]"
					onClick={handleSubmit}
				>
					{isRegister ? "Đăng ký" : "Đăng nhập"}
				</Button>
				<div className="flex items-center justify-between">
					<Link
						to={"/forgot-password"}
						className="text-sm underline underline-offset-2 text-primary hover:text-red-700"
					>
						Bạn quên mật khẩu
					</Link>
					{isRegister ? (
						<small
							className="text-sm underline underline-offset-2 text-primary hover:text-red-700 cursor-pointer"
							onClick={() => {
								setIsRegister(false);
								setInvalidFields([]);
								setName("");
								setPhoneNumber("");
								setPassword("");
							}}
						>
							Bạn có tài khoản ?
						</small>
					) : (
						<small
							className="text-sm underline underline-offset-2 text-primary hover:text-red-700 cursor-pointer"
							onClick={() => {
								setIsRegister(true);
								setInvalidFields([]);
								setName("");
								setPhoneNumber("");
								setPassword("");
							}}
						>
							Tạo tài khoản mới
						</small>
					)}
				</div>
			</div>
		</div>
	);
}

export default LoginForm;
