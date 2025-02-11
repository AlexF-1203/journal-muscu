export const exercicesInitiaux = [
  // Pectoraux
  {
    id: 'dev-couche',
    nom: 'Développé couché',
    groupe_musculaire: 'Pectoraux',
    parametres_par_defaut: {
      series: 4,
      repetitions: 8,
      tempo: '3010',
      repos: 120
    }
  },
  {
    id: 'ecarte-halteres',
    nom: 'Écarté haltères',
    groupe_musculaire: 'Pectoraux',
    parametres_par_defaut: {
      series: 3,
      repetitions: 12,
      tempo: '2011',
      repos: 90
    }
  },
  {
    id: 'dips',
    nom: 'Dips',
    groupe_musculaire: 'Pectoraux',
    parametres_par_defaut: {
      series: 3,
      repetitions: 10,
      tempo: '2010',
      repos: 90
    }
  },
  // Dos
  {
    id: 'traction',
    nom: 'Traction',
    groupe_musculaire: 'Dos',
    parametres_par_defaut: {
      series: 4,
      repetitions: 6,
      tempo: '2011',
      repos: 120
    }
  },
  {
    id: 'rowing-barre',
    nom: 'Rowing barre',
    groupe_musculaire: 'Dos',
    parametres_par_defaut: {
      series: 4,
      repetitions: 10,
      tempo: '2010',
      repos: 90
    }
  },
  {
    id: 'tirage-vertical',
    nom: 'Tirage vertical',
    groupe_musculaire: 'Dos',
    parametres_par_defaut: {
      series: 3,
      repetitions: 12,
      tempo: '2011',
      repos: 90
    }
  },
  // Jambes
  {
    id: 'squat',
    nom: 'Squat',
    groupe_musculaire: 'Jambes',
    parametres_par_defaut: {
      series: 5,
      repetitions: 5,
      tempo: '3010',
      repos: 180
    }
  },
  {
    id: 'leg-press',
    nom: 'Presse à cuisses',
    groupe_musculaire: 'Jambes',
    parametres_par_defaut: {
      series: 4,
      repetitions: 10,
      tempo: '2011',
      repos: 120
    }
  },
  {
    id: 'extension-jambes',
    nom: 'Extension des jambes',
    groupe_musculaire: 'Jambes',
    parametres_par_defaut: {
      series: 3,
      repetitions: 15,
      tempo: '2011',
      repos: 90
    }
  }
];

export const initialiserExercices = async (db) => {
  const batch = db.batch();
  const exercicesRef = collection(db, 'exercices');

  exercicesInitiaux.forEach((exercice) => {
    const docRef = doc(exercicesRef, exercice.id);
    batch.set(docRef, exercice);
  });

  await batch.commit();
}; 