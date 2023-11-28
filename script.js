function toggleExperienceDetail(element) {
    // This function will toggle the 'expanded' class on the parent .experience-entry
    var experienceEntry = element.parentElement;
    if (experienceEntry.classList.contains('expanded')) {
        experienceEntry.classList.remove('expanded');
    } else {
        experienceEntry.classList.add('expanded');
    }
}
