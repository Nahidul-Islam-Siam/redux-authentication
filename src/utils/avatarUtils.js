export const getAvatarUrl = (user) => {
  if (!user?.image || user?.image === '') {
    // Fallback to generate avatar from name or initials
    const name = user?.name || user?.fullName || 'User';
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff&bold=true&size=128`;
  }
  return user.image;
}; 