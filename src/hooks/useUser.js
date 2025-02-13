import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser, setUserProfile, clearUser } from '../redux/features/user/userSlice';

export const useUser = () => {
    const dispatch = useDispatch();
    const { currentUser, userProfile, isLoading } = useSelector((state) => state.user);

    const updateUserData = (userData) => {
        dispatch(setCurrentUser(userData));
    };

    const updateProfile = (profileData) => {
        dispatch(setUserProfile(profileData));
    };

    const clearUserData = () => {
        dispatch(clearUser());
    };

    return {
        currentUser,
        userProfile,
        isLoading,
        updateUserData,
        updateProfile,
        clearUserData
    };
}; 