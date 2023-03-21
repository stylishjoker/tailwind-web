import { useState } from 'react';
import ReactFacebookLogin from 'react-facebook-login';

import classes from './login.module.css';
import LayoutPanes from '../layout/layoutPane';
import NewButton from '../components/newButton';

const LoginScreen = () => {
	const [show, setShow] = useState(false);

	const componentClick = (data) => {
		console.log(data);
	};
	return (
		<LayoutPanes>
			<div className="container flex m-auto">
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
							<input type="text" required />
							<span className={classes.lable}>Địa chỉ email của bạn</span>
						</div>
						<div className={classes.fromGroup}>
							<input type="password" required />
							<span className={classes.lable}>Mật khẩu</span>
						</div>
						<NewButton
							text="Đăng nhập"
							bg="bg-emerald-500"
							color="text-white"
						/>
						<div className="mt-[20px] text-[14px]">
							<h5>Hoặc tiếp tục với</h5>
						</div>
						<ReactFacebookLogin
							appId="1295307291063299"
							autoLoad={true}
							onClick={componentClick}
							// fields="name,email,accessToken,id,picture"
							textButton="Đăng nhập bằng facebook"
							cssClass={classes.facebook}
						/>
					</form>
				</div>
			</div>
		</LayoutPanes>
	);
};
export default LoginScreen;
