import { Link } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as actions from "../store/actions";
import { useDispatch } from "react-redux";

function LoginForm() {
	const [name, setName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [password, setPassword] = useState("");
	const [invalidFields, setInvalidFields] = useState([]);

	const dispatch = useDispatch();

	const location = useLocation();
	const [isRegister, setIsRegister] = useState(location.state?.type);

	useEffect(() => {
		setIsRegister(location.state?.type);
	}, [location.state?.type]);

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

		validateInput(payload);
		isRegister
			? dispatch(actions.register(payload))
			: dispatch(actions.login(payload));
	};

	const validateInput = (payload) => {
		
		console.log(payload);
	};

	return (
		<div className=" flex items-center justify-center w-lg-container h-full my-0 mx-auto px-2">
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
							onClick={(e) => setIsRegister(false)}
						>
							Bạn có tài khoản ?
						</small>
					) : (
						<small
							className="text-sm underline underline-offset-2 text-primary hover:text-red-700 cursor-pointer"
							onClick={(e) => setIsRegister(true)}
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
