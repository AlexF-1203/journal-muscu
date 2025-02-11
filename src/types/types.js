/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} email
 * @property {string} password
 * @property {string} first_name
 * @property {string} last_name
 */

/**
 * @typedef {Object} Exercise
 * @property {string} id
 * @property {string} nom
 * @property {string} groupe_musculaire
 * @property {string} niveau
 * @property {string[]} equipement_requis
 * @property {string} media
 * @property {Object} parametres_par_defaut
 * @property {number} parametres_par_defaut.series
 * @property {number} parametres_par_defaut.repetitions
 * @property {string} parametres_par_defaut.tempo
 * @property {string} parametres_par_defaut.repos
 */

/**
 * @typedef {Object} Performance
 * @property {number} charge
 * @property {number} reps_effectuees
 * @property {number} rpe
 */

/**
 * @typedef {Object} ExerciceSeance
 * @property {string} id
 * @property {string} exercice_id
 * @property {number} ordre
 * @property {Object} parametres
 * @property {number} parametres.series
 * @property {number} parametres.repetitions
 * @property {string} parametres.tempo
 * @property {number} parametres.repos
 * @property {Performance[]} performances
 */

/**
 * @typedef {Object} Seance
 * @property {string} id
 * @property {string} user_id
 * @property {string} nom
 * @property {Date} date
 * @property {string} notes
 * @property {string[]} exercices
 */

/**
 * @typedef {Object} Suivi
 * @property {string} id
 * @property {string} user_id
 * @property {string} seance_id
 * @property {string} exercice_id
 * @property {Date} date
 * @property {Object} progression
 * @property {number} progression.charge_max
 * @property {number} progression.volume_total
 */ 