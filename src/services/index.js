/**
 * fetch for API data access and error handling
 * @param {object} url
 * @returns {object} data
 */
async function customFetch(url) {
  try {
    const response = await fetch(url);
    console.log(response);
    if (response.status !== 200) {
      return new Error("Problème d'accès aux données de l'API");
    }
    return response.json();
  } catch {
    throw new Error("Problème d'accès aux données de l'API");
  }
}

/**
 * retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
 * @param {string} id
 * @returns {object} user
 */
export async function getUser(id) {
  return customFetch(`http://localhost:3000/user/${id}`);
}

/**
 * retrieves a user's activity day by day with kilograms and calories.
 * @param {string} id
 * @returns {object} UserActivity
 */
export async function getUserActivity(id) {
  return customFetch(`http://localhost:3000/user/${id}/activity`);
}

/**
 * retrieves the average sessions of a user per day. The week starts on Monday.
 * @param {string} id
 * @returns {object} UserAverageSessions
 */
export async function getUserAverageSessions(id) {
  return customFetch(`http://localhost:3000/user/${id}/average-sessions`);
}

/**
 * retrieves a user's performance (energy, endurance, etc.).
 * @param {string} id
 * @returns {object} UserPerformance
 */
export async function getUserPerformance(id) {
  return customFetch(`http://localhost:3000/user/${id}/performance`);
}
