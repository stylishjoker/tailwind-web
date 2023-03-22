import { useState, useRef } from 'react';
import ReactFacebookLogin from 'react-facebook-login';
import { Link } from 'react-router-dom';

import classes from './login.module.css';
import LayoutPanes from '../layout/layoutPane';
import NewButton from '../components/newButton';
import { handleLogin } from '../firebase';

const RegisterScreen = () => {
	const [show, setShow] = useState(false);
	const [user, setUser] = useState();
	const accountRef = useRef();
	const passwordRef = useRef();

	const componentClick = (data) => {};
	const Login = async () => {
		const newData = {
			email: accountRef.current.value,
			password: passwordRef.current.value,
		};
		const userrr = await handleLogin(newData);
		setUser(userrr);
	};
	console.log(user);
	return (
		<LayoutPanes>
			<div className="container flex m-auto h-[100vh]">
				<div className={classes.banner}>
					<img
						src="https://static.kfcvietnam.com.vn/images/web/signin/lg/signin.jpg?v=gdZwJL"
						alt="kfc"
					/>
				</div>
				<div className={classes.content}>
					<h1>Đăng nhập</h1>
					<form className={classes.form}>
						<div className={classes.fromGroup} onClick={() => setShow(!show)}>
							<input type="text" ref={accountRef} required />
							<span className={classes.lable}>Họ và tên</span>
						</div>
						<div className={classes.fromGroup}>
							<input type="password" ref={passwordRef} required />
							<span className={classes.lable}>Số điện thoại</span>
						</div>
						<div className={classes.fromGroup}>
							<input type="password" ref={passwordRef} required />
							<span className={classes.lable}>Địa chỉ email của bạn</span>
						</div>
						<div className={classes.fromGroup}>
							<input type="password" ref={passwordRef} required />
							<span className={classes.lable}>Mật khẩu</span>
						</div>
						<div className="w-[100%]">
							<NewButton
								text="Tạo tài khoản"
								bg="bg-red-600"
								color="text-white"
								callback={Login}
							/>
						</div>
					</form>
				</div>
			</div>
		</LayoutPanes>
	);
};
export default RegisterScreen;
