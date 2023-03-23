import { collection, getDocs, addDoc } from 'firebase/firestore';
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	updatePassword,
	updateProfile,
} from 'firebase/auth';

import { auth, db } from './firebase';

export const getData = async (name) => {
	let newData;
	await getDocs(collection(db, name)).then((querySnapshot) => {
		const data = querySnapshot.docs.map((doc) => ({
			...doc.data(),
			id: doc.id,
		}));
		newData = data;
	});
	return newData;
};

export const addData = async (name, data) => {
	try {
		const docRef = await addDoc(collection(db, name), {
			data,
		});
		console.log('Document written with ID: ', docRef.id);
	} catch (e) {
		console.error('Error adding document: ', e);
	}
};

export const deleData = async (name, id) => {
	const docRef = await db.collection(name).doc(id);
	docRef
		.delete()
		.then(() => {
			console.log('Document successfully deleted!');
		})
		.catch((error) => {
			console.error('Error removing document: ', error);
		});
};
export const handleLogin = async (data) => {
	console.log(data);
	const users = await signInWithEmailAndPassword(
		auth,
		data.email,
		data.password
	);
	return users.user;
};
export const handleRegister = async (data) => {
	let value;
	await createUserWithEmailAndPassword(auth, data.email, data.password)
		.then((userCredential) => {
			// Signed in
			value = {
				user: userCredential.user,
			};
			// ...
		})
		.catch((error) => {
			value = {
				errorCode: error.code,
				errorMessage: error.message,
			};
			// ..
		});
	return value;
};
export const handlePassword = (data) => {
	var value = '';
	updatePassword(data.email, data.newPassword)
		.then(() => {
			value = 'Thay đổi mật khẩu thành công';
		})
		.catch((error) => {
			value = 'Thay đổi không thành công';
		});

	return value;
};
