import { collection, getDocs, addDoc } from 'firebase/firestore';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from './firebase';

import { db } from './firebase';

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
	await createUserWithEmailAndPassword(auth, data);
};
