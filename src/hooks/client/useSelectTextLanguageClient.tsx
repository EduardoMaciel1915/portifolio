export const useSelectTextLanguageClient = <T,>(
  englishText: T,
  portugueseText: T,
  language?: string
) => {
  switch (language) {
    case 'en-US':
      return englishText;
    case 'pt-BR':
      return portugueseText;
    default:
      return portugueseText;
  }
};
