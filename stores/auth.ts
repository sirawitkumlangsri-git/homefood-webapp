// store/auth.ts
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false);
  const user = ref({
    id: null,
    email: '',
    fullname: '',
    phoneNumber: '',
    role: '',
  });

  const router = useRouter();

  const initializeAuth = () => {
    const savedUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    if (savedUser && token) {
      isAuthenticated.value = true;
      user.value = JSON.parse(savedUser);
    }
  };

  const login = (userData) => {
    isAuthenticated.value = true;
    user.value = {
      id: userData.user.id,
      email: userData.user.email,
      fullname: userData.user.fullname,
      phoneNumber: userData.user.phoneNumber,
      role: userData.user.role,
    };
    localStorage.setItem('user', JSON.stringify(user.value));
    localStorage.setItem('token', userData.token);

    if (userData.user.role === 'admin') {
      router.push('/admin');
    } else {
      router.push('/');
    }
  };

  const logout = () => {
    isAuthenticated.value = false;
    user.value = {
      id: null,
      email: '',
      fullname: '',
      phoneNumber: '',
      role: '',
    };
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    router.push('/');
  };

  const isAdmin = computed(() => user.value?.role === 'admin');

  return {
    isAuthenticated,
    user,
    login,
    logout,
    initializeAuth,
    isAdmin,
  };
});