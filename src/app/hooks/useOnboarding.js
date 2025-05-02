// hooks/useOnboarding.js
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getOnboardingData, postOnboardingData } from '../services/onboardingService';

export const useGetOnboarding = () =>
  useQuery({
    queryKey: ['onboarding'],
    queryFn: getOnboardingData,
  });

export const usePostOnboarding = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postOnboardingData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['onboarding'] });
    },
  });
};
