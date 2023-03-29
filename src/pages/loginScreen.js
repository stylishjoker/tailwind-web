import { useState } from 'react';
import ReactFacebookLogin from 'react-facebook-login';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import classes from './login.module.css';
import LayoutPanes from '../layout/layoutPane';
import NewButton from '../components/newButton';
import { handleLogin } from '../firebase';
import { isPassword, isEmail } from '../validation';
import { setUser } from '../feature/user';
import { setToastMessage } from '../feature/operate';

const LoginScreen = () => {
	const dispatch = useDispatch();
	const [show, setShow] = useState(false);
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [errorEmail, setErrorEmail] = useState();
	const [errorPassword, setErrorPassword] = useState();
	const componentClick = (data) => {
		dispatch(setUser(data));
	};
	const Login = async () => {
		setErrorPassword(isPassword(password));
		setErrorEmail(isEmail(email));
		if (!errorEmail && !errorPassword) {
			const newData = {
				email: email,
				password: password,
			};
			const user = await handleLogin(newData);
			if (user) {
				dispatch(setUser(user));
				dispatch(
					setToastMessage({ type: 'susses', title: 'Đăng nhập thành công' })
				);
			}
			dispatch(
				setToastMessage({
					type: 'error',
					title: 'Tài khoản hoặc mật khẩu không chính xác',
				})
			);
		}
	};

	return (
		<LayoutPanes>
			<div className="container flex m-auto min-h-screen">
				<div className={classes.banner}>
					<img
						src="https://static.kfcvietnam.com.vn/images/web/signin/lg/signin.jpg?v=gdZwJL"
						alt="kfc"
					/>
				</div>
				<div className={classes.content}>
					<h1>Đăng nhập</h1>
					<form className={classes.form}>
						<div
							className={
								classes.fromGroup +
								(errorEmail
									? ' border-b border-red-500'
									: ' border-b border-[#333]')
							}
							onClick={() => setShow(!show)}>
							<input
								type="text"
								value={email}
								onBlur={() => setErrorEmail(isEmail(email))}
								onChange={(text) => setEmail(text.target.value)}
								required
							/>
							<span className={classes.lable}>Địa chỉ email của bạn</span>
							{errorEmail ? (
								<p className="absolute text-xs mt-[3px] text-[red]">
									{errorEmail}
								</p>
							) : (
								<></>
							)}
						</div>
						<div
							className={
								classes.fromGroup +
								(errorPassword
									? ' border-b border-red-500'
									: ' border-b border-[#333]')
							}>
							<input
								onBlur={() => setErrorPassword(isPassword(password))}
								type="password"
								value={password}
								onChange={(text) => setPassword(text.target.value)}
								required
							/>
							<span className={classes.lable}>Mật khẩu</span>
							{errorPassword ? (
								<p className="absolute text-xs mt-[3px] text-[red]">
									{errorPassword}
								</p>
							) : (
								<></>
							)}
						</div>
						<p className="mt-[25px] text-right">Bạn quên mật khẩu ?</p>
						<div className="w-[100%]">
							<NewButton
								text="Đăng nhập"
								bg="bg-emerald-500"
								color="text-white"
								callback={Login}
							/>
							<div className="mt-[20px] text-[14px]">
								<h5>Hoặc tiếp tục với</h5>
							</div>
							<div className="w-[100%] relative overflow-hidden pb-[10px]">
								<ReactFacebookLogin
									appId="1295307291063299"
									onClick={componentClick}
									fields="name,email,accessToken,id,picture"
									textButton="Đăng nhập bằng facebook"
									cssClass={classes.facebook}
								/>
								<i className={classes.iconFB}></i>
							</div>
						</div>
						<div className="center_col">
							<p className={classes.register}>
								Bạn chưa có tài khoản? <Link to="/register">Đăng ký</Link>
							</p>
						</div>
					</form>
				</div>
			</div>
		</LayoutPanes>
	);
};
export default LoginScreen;
