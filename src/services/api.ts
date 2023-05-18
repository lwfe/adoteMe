import { db } from '../../firebase';
import { collection , onSnapshot } from "firebase/firestore";

export function getData(){
    let result: petsDTO[] = []

    onSnapshot(collection(db, "Pets"), 
    (doc) => {
        doc.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            }
        }) as petsDTO[]
    });

    console.log(result)

    return result
}