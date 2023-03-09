import { collection, getDocs, addDoc } from "firebase/firestore";

import { db } from "./firebase";

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
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const deleData = async (name, id) => {
  const docRef = await db.collection(name).doc(id);
  docRef
    .delete()
    .then(() => {
      console.log("Document successfully deleted!");
    })
    .catch((error) => {
      console.error("Error removing document: ", error);
    });
};
