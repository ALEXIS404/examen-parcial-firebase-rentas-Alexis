//importar fire
import './firebase';

import { getFirestore, collection } from 'firebase/firestore';

const db = getFirestore(app);

const renta = collection(db, 'renta-examen');

