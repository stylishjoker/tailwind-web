export const isEmail = (input) => {
	let errorEmail = '';
	const emailRegex = /\S+@\S+\.\S+/;
	if (!emailRegex.test(input)) {
		errorEmail = 'Email không chính xác';
	} else {
		errorEmail = '';
	}
	return errorEmail;
};

export const isPassword = (input) => {
	let errorPassword = '';
	const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
	if (!passwordRegex.test(input)) {
		errorPassword =
			'Mật khẩu phải dài ít nhất 8 ký tự và chứa ít nhất một chữ thường, một chữ in hoa và một chữ số';
	}
	return errorPassword;
};
