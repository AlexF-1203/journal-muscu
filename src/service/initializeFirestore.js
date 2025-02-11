import { db } from './firebase';
import { collection, doc, setDoc } from 'firebase/firestore';
import { exercicesInitiaux } from '../data/initialExercises';

export const initialiserFirestore = async () => {
  try {
    const batch = [];
    
    exercicesInitiaux.forEach((exercice) => {
      const docRef = doc(collection(db, 'Exercise'), exercice.id);
      batch.push(setDoc(docRef, exercice));
    });

    await Promise.all(batch);
    console.log('Exercices initialisés avec succès');
  } catch (error) {
    console.error('Erreur lors de l\'initialisation des exercices:', error);
  }
}; 