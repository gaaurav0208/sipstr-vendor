import { apiClient } from "./apiClient";


export const getOnboardingData = async () => {
  const res = await apiClient.get('/api/onboarding');
  return res.data;
};

export const postOnboardingData = async (data) => {
  const res = await apiClient.post('/api/onboarding', data);
  return res.data;
};
