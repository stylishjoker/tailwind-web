import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import classes from './login.module.css';
import LayoutPanes from '../layout/layoutPane';
import NewButton from '../components/newButton';
import { handleRegister } from '../firebase';

const RegisterScreen = () => {
	const navigate = useNavigate();

	const [show, setShow] = useState(false);
	const [user, setUser] = useState(false);
	const [errorValidate, setErrorValidate] = useState('');

	const accountRef = useRef();
	const passwordRef = useRef();
	const confirmPasswordRef = useRef();

	const Login = async () => {
		if (passwordRef.current.value == confirmPasswordRef.current.value) {
			const newData = {
				email: accountRef.current.value,
				password: passwordRef.current.value,
			};
			const { error, result } = await handleRegister(newData);
			if (!error) {
				navigate('/login');
				console.log(result);
			}
		} else {
			setErrorValidate('Mật khẩu nhập lại không chính xác');
		}
	};
	return (
		<LayoutPanes>
			<div className="container flex m-auto min-h-[100vh]">
				<div className={classes.banner}>
					<img
						src="https://static.kfcvietnam.com.vn/images/web/signin/lg/signin.jpg?v=gdZwJL"
						alt="kfc"
					/>
				</div>
				<div className={classes.content}>
					<h1>Đăng Ký</h1>
					<form className={classes.form}>
						<div className={classes.fromGroup}>
							<input type="email" ref={accountRef} required />
							<span className={classes.lable}>Địa chỉ email của bạn</span>
						</div>
						<div className={classes.fromGroup}>
							<input type="password" ref={passwordRef} required />
							<span className={classes.lable}>Mật khẩu</span>
						</div>
						<div className={classes.fromGroup}>
							<input type="password" ref={confirmPasswordRef} required />
							<span className={classes.lable}>Nhập lại mật khẩu</span>
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
					{errorValidate ? <span>{errorValidate}</span> : <></>}
				</div>
			</div>
		</LayoutPanes>
	);
};
export default RegisterScreen;
