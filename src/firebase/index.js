import { collection, getDocs, addDoc } from 'firebase/firestore';
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	updatePassword,
	updateProfile,
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth';

import { auth, db } from './firebase';

const googleAuth = new GoogleAuthProvider();
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
	let result,
		error = null;
	try {
		result = await signInWithEmailAndPassword(auth, data.email, data.password);
	} catch (e) {
		error = e;
	}
	return { result: result.user, error };
};
export const handleRegister = async (data) => {
	let result,
		error = null;
	try {
		result = await createUserWithEmailAndPassword(
			auth,
			data.email,
			data.password
		);
	} catch (e) {
		error = e;
	}
	return { result: result.user, error };
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
export async function signInGoogle() {
	let result = null,
		error = null;
	try {
		result = await signInWithPopup(auth, googleAuth);
	} catch (e) {
		error = e;
	}

	return { result, error };
}
