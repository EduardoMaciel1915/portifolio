export const smoothScroll = (
  event: React.MouseEvent<HTMLAnchorElement>,
  targetId: string
) => {
  event.preventDefault();
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
};
