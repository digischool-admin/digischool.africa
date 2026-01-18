/**
 * Course Icon Mapping Configuration
 * DigiSchool Africa V1.1 PREMIUM
 * Maps each course to its custom icon
 */

const CourseIconMapping = {
  // Map course slug to icon filename
  'leadership-management': 'leadership',
  'excel-avance': 'excel',
  'marketing-digital': 'marketing',
  'vente-b2b': 'vente',
  'rh-digital': 'rh',
  'finance-gestion': 'finance',
  'ia-pratique': 'ia-pratique',
  'ia-entreprise': 'ia-entreprise',
  'certification-ia': 'certification',
  'data-analytics': 'data'
};

/**
 * Get icon path for a course
 * @param {string} courseSlug - The course identifier (e.g., 'leadership-management')
 * @returns {string} - Path to the icon SVG
 */
function getCourseIcon(courseSlug) {
  const iconName = CourseIconMapping[courseSlug] || 'default';
  return `/assets/course-icons/${iconName}.svg`;
}

/**
 * Get icon for a course by index (0-based)
 * @param {number} index - Course index in DigiSchoolCourses array
 * @returns {string} - Path to the icon SVG
 */
function getCourseIconByIndex(index) {
  const slugs = Object.keys(CourseIconMapping);
  if (index >= 0 && index < slugs.length) {
    return getCourseIcon(slugs[index]);
  }
  return '/assets/course-icons/default.svg';
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CourseIconMapping, getCourseIcon, getCourseIconByIndex };
}
